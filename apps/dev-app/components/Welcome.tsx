import { useEffect, useState } from 'react';
import styles from '../styles/Welcome.module.scss';

const Welcome = (props: any) => {
  const [primary, setPrimary] = useState('');
  const [showSecondary, setShowSecondary] = useState(false);
  const [ticks, setTicks] = useState(0);

  const PRIMARY = 'exec hello-there';
  const SECONDARY = 'Hello! My name is Dan';

  const updateText = (end: string, ticks: number): string => {
    return end.slice(0, ticks);
  };

  const getGreeting = (secondary: string) => {
    if (showSecondary)
      return (
        <>
          <h1>{secondary}</h1>
          <p>
            <span className={styles.highlight}>Full-stack developer</span> and
            tech enthusiast.
          </p>
          <h3>~ &gt;</h3>
        </>
      );
    else return <></>;
  };

  useEffect(() => {
    if (primary !== PRIMARY) {
      setTimeout(() => {
        setTicks(ticks + 1);
        setPrimary(updateText(PRIMARY, ticks));
      }, 200);
    } else {
      setTimeout(() => {
        setShowSecondary(true);
      }, 1000);
    }
  }, [primary, ticks]);

  return (
    <div className={styles.container}>
      <h3>~ &gt; {primary}</h3>
      {getGreeting(SECONDARY)}
    </div>
  );
};

export default Welcome;
