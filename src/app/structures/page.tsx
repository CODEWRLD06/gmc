import styles from "./structures.module.css";

type Team = {
    title: string;
    info: string
}

type AI = {
    title: string;
    info: string;
    aiResponsibilities: string[]
    humanResponsibilites: string[]
}

export default function StructuresPage() {

    const executives: string[] = [
        "CEO (Visionary Leader, Prophetically Aligned)",
        "COO (Operations & Execution)",
        "CTO (Technology & AI Division)",
        "CFO (Finance & Partnerships)",
        "CMO (Marketing & Brand Identity)",
        "Director of Ministry",
        "Director of Education",
        "Director of Tech",
        "Director of Business",
        "Director of Foundation"
    ]

    const teams: Team[] = [
        {
            title: "Spiritual Leadership",
            info: "Prophets, Intercessors, Apostolic Advisors"
        },
        {
            title: "Operations",
            info: "Administrators, Finance, HR"
        },
        {
            title: "Creative/Tech",
            info: "AI agents, designers, media team"
        },
        {
            title: "Outreach & Missions Coordinators",
            info: "Field workers, evangelists, mission teams"
        },
        {
            title: "Partnerships & Diplomacy Unit",
            info: "Building global relationships and collaborations"
        }
    ]

    const ai: AI[] = [
        {
            title: "AI Agents & Human Teams",
            info: "Integrated for seamless operations",
            aiResponsibilities: [
                "Data analytics",
                "Admin automation",
                "Translation",
                "Outreach management",
                "Virtual curriculum developers",
                "Customer service",
                "Social media managers",
                "Market analysts"
            ],
            humanResponsibilites: [
                "Prophetic leadership",
                "Vision strategy",
                "Relational impact",
                "Strategic decision-making"
            ]
        }
    ]


    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.headerContainer}>
                    <h1>Organization Structure</h1>
                    <p>High-Level Leadership & Team Framework</p>
                </div>

                <main className={styles.grid}>
                    <div className={styles.BoardContainer}>
                        <h2>Board & Leadership</h2>
                        <div className={styles.boardListContainer}>
                            <div className={styles.boardCard}>
                                <h3>Board of Trustees</h3>
                                <p>Spirit-led visionaries, Kingdom financiers, Apostolic amd prophetic coverings</p>
                            </div>
                            <div className={styles.boardCard}>
                                <h3>Board of Apostolic & Strategic Advisors</h3>
                                <p>Prophetic Oversight + Business Advisors</p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.executivesContainer}>
                        <h2>Executive Leadership Team</h2>
                        <ul>
                            {
                                executives.map((executive, i) => (
                                    <li key={i}>{executive}</li>
                                ))
                            }                            
                        </ul>
                    </div>

                    <div className={styles.teamsContainer}>
                        <h2>Core Teams</h2>
                        { teams.map((team, i) => (
                            <div key={i}>
                                <h3>{team.title}</h3>
                                <p>{team.info}</p>
                            </div>
                        ))}
                    </div>

                    { ai.map((a, i) => (
                        <div key={i} className={styles.aiTeamContainer}>
                            <h2>{a.title}</h2>
                            <p>{a.info}</p>
                            <div className={styles.aiResContainer}>
                                <h2>AI Responsibilities</h2>
                                <ul className={styles.listCont}>
                                    { a.aiResponsibilities.map((res, i) => (
                                        <li key={i}>{res}</li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h2>Human Responsibilities</h2>
                                <ul className={styles.listCont}>
                                    { a.humanResponsibilites.map((res, i) => (
                                        <li key={i}>{res}</li>
                                    ))}
                                </ul>
                            </div>   
                        </div>
                    ))}
                </main>
            </div>
        </div>
    )
}