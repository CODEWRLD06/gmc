import Link from "next/link"
import styles from "./page.module.css"

export default function Home() { 

  return (
    
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Glorious Mandarin Company</h1>
          <h3>God's Agenda. Global Impact</h3>
          <p>Led by God, Driven for Global Impact</p>
          <Link href={"/visions-missions"}>
            <button className={styles.cta}>Explore our mission</button>
          </Link>
        </div>  
      </div>
    
  )
}