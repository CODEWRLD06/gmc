import styles from "./values.module.css"

type Value = {
    title: string;
    info: string;
}

export default function Values() {

    const values: Value[] = [
        {
            title: "Divine Leadership",
            info: "Jesus Christ is the head, foundation and direction of all GMC operations"
        },
        {
            title: "Excellence",
            info: "Delivering the highest global standard in every project, initiative and service"
        },
        {
            title: "Innovation",
            info: "Driving creativity through language, tech and enterprise"
        },
        {
            title: "Integrity",
            info: "Uphold transparency, truth and accountability in all dealings"
        },
        {
            title: "Impact",
            info: "Transfoming lives, families and nations through sustainanble initiatives"
        },
        {
            title: "Partnership",
            info: "Building bridges across cultures, continents and sectors"
        },
        {
            title: "Compassion",
            info: "Uplifiting the less priviledged through love and service"
        },
        {
            title: "Global Mindset",
            info: "Rooted in Christ, yet relevant across nations and industries"
        },
        {
            title: "Resilience",
            info: "Breaking patterns, pioneering new frontiers, unstoppable in purpose"
        },
        {
            title: "Light & Salt",
            info: "Serving as agents of influence and illumination in the world"
        },
        {
            title: "Collaboration",
            info: "Building partnerships locally and globally that foster kingdom growth"
        }
    ]


    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.headerContainer}>
                    <h1>Core Values</h1>
                    <p>Global Standards that define who we are</p>
                </div>

                <div className={styles.grid}>
                    { values.map((value, i) => (
                        <div key={i} className={styles.card}>
                            <h2>{value.title}</h2>
                            <p>{value.info}</p>
                        </div>
                    ))}
                </div>    
            </div>
        </div>
    )
}