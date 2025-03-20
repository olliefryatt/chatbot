// CV Data Store - Public Version (Minimal)
const cvData = {
    personal: {
        name: "Oliver Fryatt",
        title: "Fintech & Impact Investment Leader",
        location: "New York, UK",
        linkedin: "https://www.linkedin.com/in/ollie-fryatt/",
        github: "https://github.com/olliefryatt",
        summary: "Technology leader with experience in fintech, impact investing, and product development."
    },
    experience: [
        {
            company: "Lendable",
            title: "Head of Projects & Products",
            period: "2023 - Present",
            location: "New York",
            responsibilities: [
                "Leading product and project development for impact investment fund",
                "Developing AI-powered tools and strategic partnerships"
            ]
        }
    ],
    education: [
        {
            institution: "Sciences Po, Paris",
            degree: "Master in Economics",
            period: "2018 - 2020",
            location: "Paris, France"
        }
    ],
    skills: {
        technical: [
            "Fintech Product Development",
            "AI & Machine Learning",
            "Data Analytics"
        ],
        soft: [
            "Leadership",
            "Project Management"
        ]
    }
};

// Helper functions for local processing
function matchQuery(query) {
    query = query.toLowerCase();
    
    // Define common question patterns
    const patterns = {
        education: /education|study|degree|university|school|college/i,
        experience: /experience|work|job|career|company/i,
        skills: /skills|technologies|expertise/i,
        contact: /contact|email|phone|location|reach|linkedin|github/i,
        personal: /background|summary|about|who|profile/i
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
            return `${cvData.personal.name} is located in ${cvData.personal.location}. You can find him on LinkedIn at ${cvData.personal.linkedin} and on GitHub at ${cvData.personal.github}`;
            
        case 'personal':
            return cvData.personal.summary;
            
        default:
            return null;
    }
}

module.exports = {
    cvData,
    matchQuery,
    getLocalAnswer
}; 