type Desc = {
    title: string;
    info: string;
}


type List = {
    title: string;
    info: string[];
}


type Pillar = {
    id: number;
    title: string;
    info: string;
    quote: string;
    focus: Desc;
    purpose: Desc;
    mandate: Desc;
    arms?: List;
    activities?: List;
    impact: Desc; 
}

export const database: Pillar[] = [
    {
        id: 1, 
        title: "Ministry", 
        info: "The Spiritual Arm",
        quote: "GMC Ministry Arm serves as the altar upon which the vision of the consortium rests. We are not just building an organization; we are building God's Kingdom footprint on the earth",
        focus: {
            title: "Focus",
            info: "Global Gospel Mission & Intercession" 
        },

        purpose: {
            title: "Purpose",
            info: "To advance God's Kingdom agenda and serve as an expression of divine grace and prophetic leading"
        },

        mandate: {
            title: "Mandate", 
            info: "Depopulating darkness, populating light. Raising Kingdom ambassadors who see business, language, and innovation as ministry"
        },

        arms: {
            title: "Arms",
            info: [
                "Gospel Mission (Schools, Revival in China, Africa, Global Missions)",
                "Intercessory Ministry (for Nations, Church, Families, Orphans, Captives, the Lost)",
                "Ministry of Light (Shining Christ's Light into Darkness)",
                "Missionary Field work & church planting across continents"
            ]
        },

        impact: {
            title: "Impact",
            info: "A global network of intercessors, missionaries, and End time Kingdom revivalists"
        },
    },

    {
        id: 2, 
        title: "Education", 
        info: "The Knowledge Arm",
        quote: "We educate to transform, equipping students with language mastery and Kingdom vision to thrive in global spaces.",
        focus: {
            title: "Focus",
            info: "Language, Enlightenment & Empowerment"
        },

        purpose: {
            title: "Purpose",
            info: "To equip individuals with globally ready skills through Mandarin education and cultural intelligence"
        },

        mandate: {
            title: "Mandate",
            info: "Education beyond academics empowerment with the Word, Spirit, and global skills. Training globally ready youths who are linguistically skilled, culturally intelligent, and Kingdom minded"
        },
        activities: {
            title: "Acivities",
            info: [
            "Glorious Mandarin Institute",
            "Mandarin teaching, training and empowerment programs",
            "Glorious Academies",
            "Global Curriculum Development",
            "Mandarin Bilingual Exposure",
            "National school outreach programs",
            "National & Inter-School Language Empowerment Competitions",
            "Global language exchange and immersion programs"
        ]
        },
        impact: {
            title: "Impact",
            info: "Equipping youths and professionals with global communication tools, making them globally competitive while positioning Mandarin not just as a language of trade, but as a tool of cultural diplomacy and revival"
        },
    }, 

    {
        id: 3, 
        title: "Technology", 
        info: "The Innovation Arm",
        quote: "We harness the wisdom of God in technology to pioneer solutions that transform industries and empower generations.",
        focus: {
            title: "Focus",
            info: 'Technology, Creativity, Innovation'
        },

        purpose: {
            title: "Puspose",
            info: "To leverage AI, digital platforms, and tech innovations for Kingdom impact and global accessibility"
        },

        mandate: {
            title: "Mandate",
            info: "Equipping African youths as global trailblazers in technology & creative industry"
        },

        activities: {
            title: "Activities",
            info: [
                "AI-powered language learning platforms and virtual tutors",
                "Global e-learning hubs integrating language, culture, and digital literacy",
                "Tech incubation centers for Christian innovators and Kingdom projects",
                "Virtual reality cultural immersion programs",
                "Web Development, App Development, AI, Animation, Graphics",
                "Generative AI & Prompt Engineering Training Program",
                "GMC Creatives Community",
                "Secondary School Tech Empowerment Conferences"
            ]
        },

        impact: {
            title: "Impact",
            info: "Raising Kingdom innovators who dominate the global digital economy"
        },
    },

    {
        id: 4, 
        title: "Business", 
        info: "The Enterprise / Market place / Wealth Creation Arm",
        quote: "Our business arm exists to model Kingdom excellence in the marketplace, setting new standards of integrity, wealth creation, and global partnerships.",
        focus: {
            title: "Focus",
            info: "Bilateral Trade & Enterprise Development"
        },

        purpose: {
            title: "Purpose",
            info: "To establish sustainable Kingdom businesses that fund impact projects and empower generations"
        },

        mandate: {
            title: "Mandate",
            info: "To create sustainable enterprises that fund Kingdom impact while empowering communities"
        },

        arms: {
            title: "Arms",
            info: [
                "China Africa bilateral trade mission",
                "Business Networking Opportunity & Exhibitions",
                "Beauty & Lifestyle Enterprises",
                "Business education for emerging entrepreneurs",
                "Annual China Africa Business Expo",
                "Importation & Exportation (China Africa)",
                "Entrepreneurial empowerment programs",
                "Strategic collaborations and joint ventures"
            ]
        },
        impact: {
            title: "Impact",
            info: " Creating Kingdom wealth streams, promoting ethical trade, and empowering African businesses globally"
        },
    },

    {
        id: 5, 
        title: "Foundation", 
        info: "The Humanitarian, Philanthropy, Charitable & Impact Arm",
        quote: "Our foundation arm extends the heart of Christ in love, justice, and restoration to the world.",
        focus: {
            title: "Focus",
            info: "Philanthropy & Social Impact"
        },

        purpose: {
            title: "Purpose",
            info: "To drive philanthropy, social impact, and youth empowerment on a global scale"
        },

        mandate: {
            title: "Mandate",
            info: "To express God's heart of compassion to the hurting, broken, and needy through social impact and charitable initiatives"
        },
        arms: {
            title: "Arms",
            info: [
                "Back-to-School & Youth Empowerment Programs",
                "Remote Area Ministerial Outreach & Empowerment Programs",
                "Orphanage, Disability, Elderly Care, Widows & Less","Privileged Initiative",
                "Medical Outreach & Prison Ministry",
                "Operation Feed the Nation",
                "Kingdom Advancement & Corporate Social Responsibility",
                "Scholarships and educational aid",
                "Health and community development",
            ]
        },
        impact: {
            title: "Impact",
            info: "Being the hands and feet of Christ in transforming lives globally in underserved communities, restoring dignity and hope"
        },
    }
] 