import { Timer } from "lucide-react"
import styles from "./goals.module.css"

export default function GoalsPage() {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.headerContainer}>
                    <h1>Strategic Goals</h1>
                    <p>Building a sustainable future with clear milestones and Kingdom vision</p>
                </div>

                <main className={styles.mainContent}>
                    <div className={styles.card}>
                        <h2><Timer size={35} color="#DC143C" /> Short-Term Goals</h2>
                        <p>(1-3 Years)</p>
                        <ul className={styles.listCont}>
                            <li>Establish a strong prophetic & prayer backbone for the company</li>
                            <li>Launch the Glorious Mandarin Institute with a world class African centered Mandarin learning curriculum</li>
                            <li>Launch the first cohort of GMC trained Mandarin Learners and Educators</li>
                            <li>Build a strong brand identity and online presence (website, social media, mobile app)</li>
                            <li>Establish strategic partnerships with schools, universities, and churches</li>
                            <li>Establish strategic partnerships in Africa, Asia, Europe, and the US</li>
                            <li>Develop the AI-powered Mandarin Learning Platform</li>
                            <li>Roll out the GMC philanthropic project in Nigeria</li>
                        </ul>
                    </div>

                    <div className={styles.card}>
                        <h2><Timer size={35} color="#DC143C"/> Long-Term Goals</h2>
                        <p>(5-15 Years)</p>
                        <ul className={styles.listCont}>
                            <li>Position GMC as a model organization that combines faith, excellence, and innovation making it world&apos;s number one Kingdom driven Mandarin and cross-cultural institution</li>
                            <li>Diversify into multiple global businesses under the GMC umbrella with Kingdom wealth creation models</li>
                            <li>Build global partnerships with governments, universities, and ministries</li>
                            <li>Establish GMC physical learning centers with international campuses across Africa, Asia, Europe and America</li>
                            <li>Expand GMC into a global consortium with physical presence across continents</li>
                            <li>Build a digital metaverse hub for cultural, spiritual, and academic immersion</li>
                            <li>Expand philanthropic impact to reach millions of youths globally</li>
                        </ul>
                    </div>
                </main>
            </div>
        </div>
    )
}