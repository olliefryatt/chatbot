// CV Data Store
const cvData = {
    personal: {
        name: "Oliver Fryatt",
        title: "Fintech & Impact Investment Leader",
        location: "New York, UK",
        linkedin: "https://www.linkedin.com/in/ollie-fryatt/",
        summary: "Visionary Fintech & Impact Investment Leader with a decade of experience scaling disruptive startups, launching high-impact financial products, and shaping the future of blockchain-based lending. A strategic operator at the intersection of finance, technology, and social impact, driving multi-million dollar initiatives across emerging markets. Passionate about leveraging Web3, microfinance, and impact investing to create sustainable financial ecosystems. Grew up and lived in Nepal, India, Switzerland, France, England, Senegal, and America, gaining a truly global perspective on economic development, financial inclusion, and cross-cultural business dynamics."
    },
    experience: [
        {
            company: "Lendable",
            title: "Head of Projects & Products",
            period: "2021 - Present",
            location: "London, UK",
            responsibilities: [
                "Spearhead all product and project development for a $500M+ impact investment fund",
                "Designed and launched AI-powered risk assessment tools, reducing loan default rates by 40%",
                "Built a decentralized credit scoring system utilizing blockchain for 2M+ underserved individuals",
                "Structured and deployed $150M+ in blended finance vehicles",
                "Developed strategic partnerships with DFIs, NGOs, and fintech startups, increasing fund reach by 60%"
            ]
        },
        {
            company: "RociFi – Crypto Lending & DeFi",
            title: "Founding Team",
            period: "2018 - 2021",
            location: "Remote/Global",
            responsibilities: [
                "Early employee at pioneering under-collateralized crypto lending platform, securing $50M+ in venture funding",
                "Led design of algorithmic credit risk engine for DeFi loans",
                "Managed strategic partnerships with crypto exchanges and DeFi protocols",
                "Advocated for progressive DeFi regulations in US, UK, and Singapore"
            ]
        },
        {
            company: "PEG Africa",
            title: "Director of Strategic Planning & Project Management",
            period: "2015 - 2018",
            location: "Lagos, Nigeria",
            responsibilities: [
                "Directed expansion strategy, increasing SME loan disbursement from $10M to $75M",
                "Led cross-functional team of 50+ in product development and operations",
                "Implemented mobile-first lending solutions for 500,000+ users",
                "Developed credit scoring models reducing NPL by 25%"
            ]
        },
        {
            company: "Fintech Startup (Stealth Mode)",
            title: "Founder & CEO",
            period: "2013 - 2015",
            location: "London, UK",
            responsibilities: [
                "Launched AI-driven personal finance automation startup",
                "Scaled MVP to 50,000+ users within 12 months, securing $2M in angel funding",
                "Developed B2B partnerships with digital banks and robo-advisors"
            ]
        },
        {
            company: "UK Civil Service",
            title: "Economist",
            period: "2010 - 2013",
            location: "London, UK",
            responsibilities: [
                "Provided macro-economic policy advisory on financial inclusion and digital banking",
                "Designed policy frameworks for UK's open banking",
                "Collaborated with World Bank, IMF, and FCA"
            ]
        }
    ],
    education: [
        {
            institution: "London School of Economics (LSE)",
            degree: "MSc in Economics & Finance",
            period: "2010",
            location: "London, UK"
        },
        {
            institution: "University of Oxford",
            degree: "BSc in Mathematics & Political Economy",
            period: "2008",
            location: "Oxford, UK"
        }
    ],
    skills: {
        technical: [
            "Blockchain & DeFi Lending",
            "Fintech Product Development",
            "Impact Investment & ESG Finance",
            "AI-Driven Credit Scoring",
            "Digital Banking",
            "Data-Driven Decision Making",
            "Financial Modeling"
        ],
        soft: [
            "Strategic Partnerships",
            "Leadership",
            "Cross-cultural Communication",
            "Policy Advisory",
            "Venture Scaling",
            "Project Management"
        ]
    },
    certifications: [
        {
            name: "Certified Blockchain Expert (CBX)",
            issuer: "Blockchain Council",
            date: "Not Specified"
        },
        {
            name: "Financial Modeling & Valuation Analyst (FMVA)",
            issuer: "Corporate Finance Institute",
            date: "Not Specified"
        },
        {
            name: "Project Management Professional (PMP)",
            issuer: "PMI",
            date: "Not Specified"
        }
    ],
    additional: {
        languages: ["English (Fluent)", "French (Intermediate)", "Yoruba (Conversational)"],
        speaking: [
            "TEDx Speaker on 'The Future of Finance: DeFi & Inclusive Growth'",
            "Featured in Forbes, Financial Times, and TechCrunch",
            "Guest Lecturer at Oxford's Saïd Business School"
        ],
        interests: [
            "Angel Investing",
            "Web3 Governance",
            "Emerging Markets Finance",
            "Marathon Running"
        ]
    }
};

// Helper functions for local processing
function matchQuery(query) {
    query = query.toLowerCase();
    
    // Define common question patterns
    const patterns = {
        education: /education|study|degree|university|school|college|lse|oxford/i,
        experience: /experience|work|job|career|company|lendable|rocifi|peg|civil service/i,
        skills: /skills|technologies|expertise|blockchain|defi|fintech/i,
        contact: /contact|email|phone|location|reach|linkedin/i,
        personal: /background|summary|about|who|profile|global|international/i,
        certifications: /certifications|certificates|qualified|blockchain expert|pmp|fmva/i,
        languages: /languages|speak|french|english|yoruba/i,
        speaking: /speaking|tedx|forbes|lecture|media/i,
        interests: /interests|hobbies|angel investing|marathon/i
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
            return `${cvData.personal.name}'s educational background includes: ${
                cvData.education.map(edu => 
                    `${edu.degree} from ${edu.institution} (${edu.period})`
                ).join(', ')
            }`;
            
        case 'experience':
            return `${cvData.personal.name}'s work experience includes: ${
                cvData.experience.map(exp => 
                    `${exp.title} at ${exp.company} (${exp.period})`
                ).join(', ')
            }`;
            
        case 'skills':
            return `${cvData.personal.name}'s key skills include: Technical: ${
                cvData.skills.technical.join(', ')
            }. Soft skills: ${
                cvData.skills.soft.join(', ')
            }`;
            
        case 'contact':
            return `${cvData.personal.name} is located in ${cvData.personal.location} and can be reached via LinkedIn at ${cvData.personal.linkedin}`;
            
        case 'personal':
            return cvData.personal.summary;

        case 'certifications':
            return `${cvData.personal.name}'s certifications include: ${
                cvData.certifications.map(cert => 
                    `${cert.name} from ${cert.issuer}`
                ).join(', ')
            }`;

        case 'languages':
            return `${cvData.personal.name} speaks: ${cvData.additional.languages.join(', ')}`;

        case 'speaking':
            return `${cvData.personal.name}'s speaking engagements and media appearances include: ${
                cvData.additional.speaking.join(', ')
            }`;

        case 'interests':
            return `${cvData.personal.name}'s interests include: ${cvData.additional.interests.join(', ')}`;
            
        default:
            return null;
    }
}

module.exports = {
    cvData,
    matchQuery,
    getLocalAnswer
}; 