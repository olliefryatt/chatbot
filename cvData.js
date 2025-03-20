// MOCK CV DATA FOR DEMONSTRATION PURPOSES ONLY
// This is a simplified example to show how the AI chatbot training data is structured.
// The actual CV data used in production is loaded from environment variables.

const cvData = process.env.CV_DATA ? 
    JSON.parse(process.env.CV_DATA) : 
    {
        personal: {
            name: "Mr. Bean",
            title: "Professional Troublemaker & Teddy Bear Enthusiast",
            location: "London, UK",
            linkedin: "https://www.linkedin.com/in/mrbean-example",
            github: "https://github.com/mrbean",
            summary: "Eccentric problem solver with a unique approach to everyday situations. Known for innovative solutions to simple tasks and maintaining a strong friendship with my teddy bear. Expert in turning ordinary situations into extraordinary adventures."
        },
        experience: [
            {
                company: "Teddy Co.",
                title: "Chief Chaos Officer",
                period: "1990 - Present",
                location: "London, UK",
                responsibilities: [
                    "Developed groundbreaking techniques for parking Mini Coopers in unusual spaces",
                    "Pioneered new methods of dressing while driving",
                    "Revolutionized the art of making turkey sandwiches at the beach",
                    "Successfully managed complex teddy bear maintenance operations"
                ]
            },
            {
                company: "Royal College of Art",
                title: "Amateur Security Guard",
                period: "1994 - 1994",
                location: "London, UK",
                responsibilities: [
                    "Briefly protected priceless artwork using unconventional methods",
                    "Developed innovative techniques for staying awake during night shifts",
                    "Accidentally improved museum visitor engagement metrics"
                ]
            }
        ],
        education: [
            {
                institution: "Oxford University of Peculiar Arts",
                degree: "Master of Mischief",
                period: "1980 - 1983",
                location: "Oxford, UK"
            }
        ],
        skills: {
            technical: [
                "Mini Cooper Parking",
                "Advanced Teddy Bear Care",
                "Creative Problem Solving",
                "Improvisational Engineering"
            ],
            soft: [
                "Non-verbal Communication",
                "Creating Memorable Situations",
                "Finding Alternative Solutions",
                "Teddy Bear Relations"
            ]
        },
        additional: {
            languages: ["English (Minimal)", "Mumbling (Expert)", "Facial Expressions (Fluent)"],
            interests: [
                "Teddy Bears",
                "Mini Coopers",
                "Christmas Turkey",
                "Going to the Beach",
                "Art Galleries (Visiting, not touching)"
            ]
        }
    };

// Helper functions for local processing
function matchQuery(query) {
    query = query.toLowerCase();
    
    // Define common question patterns - expanded to handle all possible CV sections
    const patterns = {
        education: /education|study|degree|university|school|college/i,
        experience: /experience|work|job|career|company/i,
        skills: /skills|technologies|expertise/i,
        contact: /contact|email|phone|location|reach|linkedin|github/i,
        personal: /background|summary|about|who|profile/i,
        certifications: /certifications|certificates|qualified/i,
        languages: /languages|speak/i,
        speaking: /speaking|talks|lecture|media/i,
        interests: /interests|hobbies/i
    };

    // Match query to patterns
    for (const [category, pattern] of Object.entries(patterns)) {
        if (pattern.test(query)) {
            return category;
        }
    }

    return null;
}

function getLocalAnswer(category, query) {
    switch(category) {
        case 'education':
            return cvData.education ? `${cvData.personal.name}'s educational background includes: ${
                cvData.education.map(edu => 
                    `${edu.degree} from ${edu.institution} (${edu.period})`
                ).join(', ')
            }` : null;
            
        case 'experience':
            return cvData.experience ? `${cvData.personal.name}'s work experience includes: ${
                cvData.experience.map(exp => 
                    `${exp.title} at ${exp.company} (${exp.period})`
                ).join(', ')
            }` : null;
            
        case 'skills':
            return cvData.skills ? `${cvData.personal.name}'s key skills include: Technical: ${
                cvData.skills.technical.join(', ')
            }. Soft skills: ${
                cvData.skills.soft.join(', ')
            }` : null;
            
        case 'contact':
            return `${cvData.personal.name} is located in ${cvData.personal.location}. You can find him on LinkedIn at ${cvData.personal.linkedin} and on GitHub at ${cvData.personal.github}`;
            
        case 'personal':
            return cvData.personal.summary;

        case 'certifications':
            return cvData.certifications ? `${cvData.personal.name}'s certifications include: ${
                cvData.certifications.map(cert => 
                    `${cert.name} from ${cert.issuer}`
                ).join(', ')
            }` : null;

        case 'languages':
            return cvData.additional?.languages ? 
                `${cvData.personal.name} speaks: ${cvData.additional.languages.join(', ')}` : null;

        case 'speaking':
            return cvData.additional?.speaking ? 
                `${cvData.personal.name}'s speaking engagements and media appearances include: ${
                    cvData.additional.speaking.join(', ')
                }` : null;

        case 'interests':
            return cvData.additional?.interests ? 
                `${cvData.personal.name}'s interests include: ${cvData.additional.interests.join(', ')}` : null;
            
        default:
            return null;
    }
}

module.exports = {
    cvData,
    matchQuery,
    getLocalAnswer
}; 