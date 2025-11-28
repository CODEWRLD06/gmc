import styles from "./visions.module.css"

export default function visionsPage() {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.headerContainer}>
                    <h1>Vision & Mission</h1>
                    <p>Our foundational purpose and calling</p>
                </div>
                <div className={styles.info}>
                    <div className={styles.grid}>
                        <div className={styles.visionContent}>
                            <h2>Vision Statement</h2>
                            <p>
                                To be God&apos;s instrument in advancing Kingdom purposes globally by transforming lives, raising Kingdom ambassadors, and creating world class platforms that merge education, technology, business, ministry, and philanthropy.
                            </p>
                        </div>
                        <div className={styles.missionContent}>
                            <h2>Mission Statement</h2>
                            <p>Our mission is to manifest God&apos;s agenda on earth by:</p>
                            <ul>
                                <li>
                                    Raising kingdom minded global leaders through Mandarin education and beyond who are equipped spiritually, intellectually, and professionally to impact every sector of influence
                                </li>
                                <li>
                                    Leveraging technology, innovation and creativity to impact the world at scale
                                </li>
                                <li>
                                    Establishing sustainable businesses that upholds biblical principles
                                </li>
                                <li>
                                    Extending Christ&apos;s love through philantropy, youth empowerment and humanitarian services
                                </li>
                                <li>
                                    Serving as vessels through which God&apos;s grace, glory and wisdom flows to the nations
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}