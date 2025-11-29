import Link from "next/link"
import Logo from "../../public/logo.svg"
import Image from "next/image"
import styles from "./page.module.css"

export default function Home() { 

  return (
    
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.logoContainer}>
              <Image src={Logo} alt="logo" width={200} height={200} className={styles.logo}/>
              <h1>Glorious Mandarin Company</h1>
          </div>
          
          <h3>God&apos;s Agenda. Global Impact</h3>
          <p>Led by God, Driven for Global Impact</p>
          <Link href={"/visions-missions"}>
            <button className={styles.cta}>Explore our mission</button>
          </Link>
        </div>  
      </div>
    
  )
}