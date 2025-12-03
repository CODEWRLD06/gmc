import { MapPin, Mail, Phone } from "lucide-react"
import { FaWhatsapp, FaFacebook, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import styles from "./contact.module.css"

export default function Contact () {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.headerContainer}>
                    <h1>Get In Touch</h1>
                    <p>Ready to join God&apos;s agenda for global impact? Let&apos;s connect!</p>
                </div>

                <div className={styles.cardContainer}>
                    <div className={styles.card}>
                        <h2>Contact Information</h2>
                        <p><MapPin size={35}/> Lagos, Nigeria</p>
                        <a
                            href="mailto:gloriousmandarincompany@gmail.com"
                        >
                            <Mail size={35}/>gloriousmandarincompany@gmail.com
                        </a>
                        <p><Phone size={35} />+234 XXX XXX XXXX</p>
                    </div>
                    <div className={styles.card}>
                        <h2>Quick Message</h2>
                        <p>Have questions about our programs, want to volunteer , or interested in partnerships? Reach out via WhatsApp and we&apos;ll respond quickly!</p>
                        <a 
                            href="https://wa.me/2348105834317" 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                        <div>
                            <h4><FaWhatsapp size={30} /> Chat on Whatsapp</h4>
                        </div>
                        </a>
                        
                    </div>
                    <div className={styles.card}>
                        <h2>Connect With Us</h2>
                        <p>Follow our journey as we impact lives globally</p>
                        <div className={styles.socialsGrid}>
                            <a 
                                href="https://wa.me/2348105834317" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className={styles.social}
                            >
                                <div className={styles.icon}><FaWhatsapp size={30} /> Whatsapp</div>
                            </a>
                            <a 
                                href="https://www.facebook.com/Glorious Mandarin Company" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className={styles.social}
                            >
                                <div className={styles.icon}><FaFacebook size={30} /> Facebook</div>
                            </a>
                            <a 
                                href="https://www.instagram.com/gmcompany_official"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.social}
                            >
                                <div className={styles.icon}><FaInstagram size={30} /> Instagram</div>
                            </a>
                            <a 
                                href="/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.social}
                            >
                                <div className={styles.icon}>
                                    <FaXTwitter size={30} /> Twitter
                                    <span>Coming Soon</span>
                                </div>
                            </a>   
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}