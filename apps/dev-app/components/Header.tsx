import styles from '../styles/Header.module.scss';
import Link from 'next/link';

export default function Header() {
    return (
        <header className={styles.header}>
            <h1 className={styles.logo}>
                DANCUMMINGS<span className={styles.dot}>.</span>DEV
            </h1>
            <ul>
                <li>
                    <Link href='/'>
                        <a>Home</a>
                    </Link>
                </li>
                <li>
                    <Link href='/about'>
                        <a>About</a>
                    </Link>
                </li>
                <li>
                    <Link href='/projects'>
                        <a>Projects</a>
                    </Link>
                </li>
            </ul>
        </header>
    )
}