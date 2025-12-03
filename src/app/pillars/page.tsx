import Image from "next/image"
import { database } from "@/vals"
import styles from "./pillars.module.css"

export default function Pillars() {

    return (
        <div className={styles.container}>
            <Image 
                src="/pillars.png"
                alt="pillars"
                fill
                priority
                style={{
                    "objectFit": "cover"
                }}
            />
            <div className={styles.content}>
                <div className={styles.headerContainer}>
                    <h1>Core Pillars</h1>
                    <p>The 5 arms of GMC</p>
                </div>

                <div className={styles.grid}>
                    { database.map(data => (
                        <div key={data.id} className={styles.card}>
                            <div className={styles.cardHeader}>
                                <div className={styles.number}>
                                    {data.id}
                                </div>
                                <div className={styles.cardHeaderText}>
                                    <h1>{data.title}</h1>
                                    <p>{data.info}</p>
                                </div>
                            </div>

                            <div className={styles.quoteContainer}>
                                <p>{data.quote}</p>
                            </div>

                            { data.arms ? (
                                <div className={styles.listContainer}>
                                    <h2>{data.arms.title}</h2>
                                    <ul>
                                        { data.arms.info.map((arm, i) => (
                                            <li key={i}>{arm}</li>
                                        ))}
                                    </ul>
                                </div>
                            ) : (
                                <div className={styles.listContainer}>
                                    <h2>{data.activities?.title}</h2>
                                    <ul>
                                        { data.activities?.info.map((activity, i) => (
                                            <li key={i}>{activity}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            <div className={styles.impactContainer}>
                                <h2>{data.impact.title}:</h2>
                                <p>{data.impact.info}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}