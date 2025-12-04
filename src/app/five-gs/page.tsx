import styles from "./five.module.css"

type G = {
    id: number;
    title: string;
    info: string
}

export default function FivePage() {
    const g: G[] = [
        {
            id: 1,
            title: "God Centeredness",
            info: "Christ at the center of all we do"
        }, 
        {
            id: 2,
            title: "Grace",
            info: "Operating under divine empowerment and favor"
        },
        {
            id: 3,
            title: "Glory",
            info: "Reflecting God's excellence and majesty in every arm"
        },
        {
            id: 4,
            title: "Growth",
            info: "Raising People, communities and industries into kingdom alignment"
        },
        {
            id: 5,
            title: "Global Impact",
            info: "Reaching nations and generations with transformation"
        }
    ]

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.headerContainer}>
                    <h1>The 5 G&apos;s of GMC</h1>
                    <p>Our foundational principles that guides everything we do</p>
                </div>

                <div className={styles.grid}>
                    { g.map(gr => (
                        <div key={gr.id} className={`${styles.card} ${styles.card}-${gr.id}`}>
                            <div className={styles.number}>{gr.id}</div>
                            <h3>{gr.title}</h3>
                            <p>{gr.info}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}