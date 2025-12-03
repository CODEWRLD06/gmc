"use client"
import Logo from "../../../public/logo-two.svg"
import Image from "next/image"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import styles from "./sidebar.module.css"

export default function SideBar() {
    const [isActive, setIsActive] = useState<boolean>(false)
    const pathName = usePathname()

    const toggleSideBar = () => {
        setIsActive(!isActive)
    }

    const closeSideBar = () => {
        setIsActive(false)
    }
    
    return (
        <>
            <button 
                onClick={toggleSideBar}
                className={`${styles.hamburger} ${isActive ? styles.active : ''}`}
            >
                <span></span>
                <span></span>
                <span></span>
            </button>

            <div 
                onClick={closeSideBar}
                className={`${styles.overlay} ${isActive ? styles.overlayActive : ""}`}
            ></div>

            <nav className={`${styles.sideBar} ${isActive ? styles.sideBarActive : ''}`}>
                <div className={styles.sideBarHeader}>
                    <div className={styles.logoContainer}>
                        <Image 
                            src={Logo} 
                            alt="Logo" 
                            className={styles.logo} 
                            width={250} 
                            height={100}
                        />
                    </div>
                    <p className={styles.tagline}>God&apos;s Agenda, Global Impact.</p>
                </div>

                <ul className={styles.navList}> 
                    <li>
                        <Link
                            href="/"
                            onClick={closeSideBar}
                            className={pathName === "/" ? styles.activeLink : ''}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/visions-missions"
                            onClick={closeSideBar}
                            className={pathName === "/visions-missions" ? styles.activeLink : ''}
                        >
                            Visions & Missions
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/five-gs"
                            onClick={closeSideBar}
                            className={pathName === "/five-gs" ? styles.activeLink : ''}
                        >
                            The 5 G&apos;s of GMC
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/values"
                            onClick={closeSideBar}
                            className={pathName === "/values" ? styles.activeLink : ''}
                        >
                            Values
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/pillars"
                            onClick={closeSideBar}
                            className={pathName === "/pillars" ? styles.activeLink : ''}
                        >
                            Pillars
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/structures"
                            onClick={closeSideBar}
                            className={pathName === "/structures" ? styles.activeLink : ''}
                        >
                            Organization Structure
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/goals"
                            onClick={closeSideBar}
                            className={pathName === "/goals" ? styles.activeLink : ''}
                        >
                            Goals
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/contact"
                            onClick={closeSideBar}
                            className={pathName === "/contact" ? styles.activeLink : ''}
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}
