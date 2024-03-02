import styles from './Footer.module.css'
import Image from 'next/image'

export default function Footer() {
    return (
        <>
            <main className={styles.footer}>
                <Image
                src={'/copyright.svg'}
                alt='copyright symbol'
                width={15}
                height={15}
                />
                <p className={styles.footerText}>Orbit 2024</p>
                <p className={styles.footerText}>ALL RIGHTS RESERVED</p>
            </main>
        </>
    )
}