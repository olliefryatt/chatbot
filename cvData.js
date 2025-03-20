// CV Data Store
const cvData = {
    personal: {
        name: "Oliver Fryatt",
        title: "Fintech & Impact Investment Leader",
        location: "New York, UK",
        linkedin: "https://www.linkedin.com/in/ollie-fryatt/",
        github: "https://github.com/olliefryatt",
        summary: "I have over a decade of experience managing products, data, and integrations for fintechs, startups, and investors. My background in data product design, analytics, automation, and systems integration reflects my commitment to building scalable solutions. I'm motivated by the opportunity to create products and infrastructure that empower individuals to reach their full potential and lead their best lives."
    },
    experience: [
        {
            company: "Lendable",
            title: "Head of Projects & Products",
            period: "2023 - Present",
            location: "New York",
            responsibilities: [
                "Spearhead all product and project development for a $600M+ impact investment fund",
                "Designed and launched AI-powered risk assessment tools, reducing reporting requirements by 60%",
                "Developed strategic partnerships with DFIs, NGOs, and fintech startups, increasing fund reach by 60%",
                "Delivered end-to-end integration projects, delivering capital monitoring dashboards for investors. Managed product backlogs and coordinated cross-functional teams. Monitoring $600m of investor funds",
                "Provided data and financialdue diligence for investors on several micro-finance institutions in Sub-Saharan Africa and a South East Asian remittances provider. Supporting $250m in acquisitions"
            ]
        },
        {
            company: "RociFi, Crypto Lending & DeFi",
            title: "Founding Team",
            period: "2022 - 2023",
            location: "Remote/Global",
            responsibilities: [
                "Early employee at pioneering under-collateralized crypto lending platform, securing $2M+ in venture funding",
                "Led design of algorithmic credit risk engine for DeFi loans",
                "Led a cross functional team of seven developers to design and implement a blockchain lending product and credit model; disbursed $500k in unsecured blockchain loans on polygon",
                "Defined business and client requirements, translated into user stories; prioritized these, undertook trade-off analysis, ensured backlog was transparent and ultimately secured 20k new customers",
                "Managed strategic partnerships with crypto exchanges and DeFi protocols",
                "Built several Dune dashboards to monitor and track protocol performance"
            ]
        },
        {
            company: "PEG Africa",
            title: "Director of Strategic Planning & Project Management",
            period: "2019 - 2022",
            location: "Senegal, Ghana, Mali, Ivory Coast",
            responsibilities: [
                "Designed and implemented a custom loan management system, ERP, and mobile app in four West African markets. Automated 40% of business reports using Tableau and Python. Managed team of five",
                "Led cross-functional team of 4+ in product development and operations",
                "Implemented mobile-first lending solutions for 500,000+ users",
                "Managed integrations with multiple West African telco providers to automate 100% of customer payments. Coordinating stakeholder relationships to ensure alignment and successful delivery.",
                "Reporting to the co-founder I launched two West African markets (Senegal and Mali), scaled these markets to a 150+ full time staff, and built a $7m loan portfolio with over 10k clients."
            ]
        },
        {
            company: "Fintech Startup (Stealth Mode)",
            title: "Founder & CEO",
            period: "2018 - 2018",
            location: "London, UK",
            responsibilities: [
                "Designed a platform using behavioral insights and energy monitoring to reduce household energy use.",
                "Scaled MVP to 5,000+ users within 12 months, securing angel funding",
                "Developed initial partnerships, secured $200k in grant funding & investment."
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
        },
        {
            company: "OECD",
            title: "Consultant",
            period: "2015",
            location: "Paris, France",
            responsibilities: [
                "Built statistical model benchmarking SDG indicators across countries",
                "Model outputs used in several OECD policy reports"
            ]
        },
        {
            company: "IDDRI",
            title: "Economist",
            period: "2016",
            location: "Paris, France",
            responsibilities: [
                "Published a study addressing financing challenges for electric vehicle adoption",
                "Secured $30k funding for research project"
            ]
        }
    ],
    education: [
        {
            institution: "Sciences Po, Paris",
            degree: "Master in Economics",
            period: "2018 - 2020",
            location: "Paris, France"
        },
        {
            institution: "University of Sussex",
            degree: "Economics and Development",
            period: "2008 - 2011",
            location: "Sussex, UK"
        }
    ],
    skills: {
        technical: [
            "Blockchain & DeFi Lending",
            "Solidity & Smart Contracts",
            "Python & Tableau",
            "Postgres & SQL",
            "AI & Machine Learning",
            "Open Banking & API Integrations",
            "AI and ChatGPT",
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
        contact: /contact|email|phone|location|reach|linkedin|github/i,
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
            return `${cvData.personal.name} is located in ${cvData.personal.location}. You can find him on LinkedIn at ${cvData.personal.linkedin} and on GitHub at ${cvData.personal.github}`;
            
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