import Link from "next/link"
import Logo from "../../public/logo-two.svg"
import Image from "next/image"
import styles from "./page.module.css"

export default function Home() { 

  return (
    
      <div className={styles.hero}>
        <Image 
          src="/hero.png"
          alt="hero"
          fill
          priority
          style={{
            "objectFit": "cover"
          }}
        />
        <div className={styles.heroContent}>
          <div className={styles.logoContainer}>
              <Image src={Logo} alt="logo" width={400} height={400} className={styles.logo}/>
              <h2>Glorious Mandarin Company</h2>
          </div>
          
          <p>God&apos;s Agenda, Global Impact.</p>
          <Link href={"/visions-missions"}>
            <button className={styles.cta}>Explore our mission</button>
          </Link>
        </div>  
      </div>
    
  )
}