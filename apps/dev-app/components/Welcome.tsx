import { useEffect, useState } from 'react';
import styles from '../styles/Welcome.module.scss';

const Welcome = (props: any) => {
    const [primary, setPrimary] = useState('');
    const [secondary, setSecondary] = useState('');
    const [ticks, setTicks] = useState(0);

    const PRIMARY = 'exec hello-there';
    const SECONDARY = 'Hello! My name is Dan'

    function updateText(end:string, ticks:number): string {
        return end.slice(0, ticks);
    }

    useEffect(() => {
        setTimeout(() => {
            setTicks(ticks + 1);
            if (primary !== PRIMARY) {
                setPrimary(updateText(PRIMARY, ticks));
            } else {
                if (secondary !== SECONDARY) {
                    setSecondary(updateText(SECONDARY, ticks));
                }
            }
        }, 100);
    })

    return (
        <div className={styles.container}>
            <h3>
            ~ &gt; {primary}
            </h3>
            <h1>
                {secondary}
            </h1>
            <p>
                <span className={styles.highlight}>Full-stack developer</span> and tech enthusiast.
            </p>
        </div>
    )
}

export default Welcome;