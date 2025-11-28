"use client"

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
                    <h1 className={styles.logo}>GMC</h1>
                    <p className={styles.tagline}>God's Agenda. Global Impact.</p>
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
                            The 5 G's of GMC
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
                            Organizational Structure
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
                </ul>
            </nav>
        </>
    )
}
