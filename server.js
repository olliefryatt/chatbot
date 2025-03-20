const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();
const { cvData, matchQuery, getLocalAnswer } = require('./cvData');

const app = express();
const PORT = process.env.PORT || 3000;

// Security middleware
app.use(cors({
    origin: process.env.ALLOWED_ORIGINS ? process.env.ALLOWED_ORIGINS.split(',') : '*',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
}));

// Additional security headers for iframe embedding
app.use((req, res, next) => {
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('X-Frame-Options', 'ALLOW-FROM https://*.squarespace.com');
    res.setHeader('X-XSS-Protection', '1; mode=block');
    res.setHeader('Content-Security-Policy', "frame-ancestors 'self' https://*.squarespace.com");
    next();
});

// Middleware to parse JSON requests
app.use(express.json());

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Simple rate limiting
const REQUESTS_PER_MINUTE = 10;
const requests = new Map();

function rateLimit(ip) {
    const now = Date.now();
    const windowStart = now - 60000; // 1 minute ago
    
    const requestTimestamps = requests.get(ip) || [];
    const windowRequests = requestTimestamps.filter(timestamp => timestamp > windowStart);
    
    if (windowRequests.length >= REQUESTS_PER_MINUTE) {
        return false;
    }
    
    windowRequests.push(now);
    requests.set(ip, windowRequests);
    return true;
}

// Create a comprehensive system prompt with CV information
function createSystemPrompt() {
    return `You are an AI assistant that provides information about ${cvData.personal.name}. Here is his background:

PROFILE:
${cvData.personal.summary}

CURRENT ROLE:
${cvData.experience[0].title} at ${cvData.experience[0].company} (${cvData.experience[0].period})

EDUCATION:
${cvData.education.map(edu => `- ${edu.degree} from ${edu.institution} (${edu.period})`).join('\n')}

KEY SKILLS:
Technical: ${cvData.skills.technical.join(', ')}
Soft Skills: ${cvData.skills.soft.join(', ')}

Only provide information based on this CV data. If asked about anything not mentioned in this CV, respond with "I don't have that information in Oliver's CV." Do not make up or infer information that isn't explicitly stated in the CV.`;
}

// Endpoint to handle chat messages
app.post('/chat', async (req, res) => {
    const userMessage = req.body.message;
    const clientIp = req.ip;

    // Check rate limit
    if (!rateLimit(clientIp)) {
        return res.status(429).json({ error: 'Too many requests. Please wait a minute.' });
    }

    try {
        // First, try to answer locally
        const category = matchQuery(userMessage);
        if (category) {
            const localAnswer = getLocalAnswer(category, userMessage);
            if (localAnswer) {
                return res.json({ reply: localAnswer });
            }
        }

        // If we can't answer locally, use OpenAI with CV context
        const response = await axios.post('https://api.openai.com/v1/chat/completions', {
            model: 'gpt-3.5-turbo',
            messages: [
                { 
                    role: 'system', 
                    content: createSystemPrompt()
                },
                { role: 'user', content: userMessage }
            ],
            max_tokens: 150,
            temperature: 0.7
        }, {
            headers: {
                'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
                'Content-Type': 'application/json'
            },
        });

        const botMessage = response.data.choices[0].message.content;
        res.json({ reply: botMessage });
    } catch (error) {
        console.error('Error:', error.response ? error.response.data : error.message);
        res.status(500).json({ 
            error: 'Error processing request',
            details: error.response ? error.response.data : error.message
        });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});