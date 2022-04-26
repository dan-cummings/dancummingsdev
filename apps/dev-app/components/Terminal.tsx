import styles from '../styles/Terminal.module.scss';

const Terminal = ({ children }: { children: any }) => {
  return (
    <div className={styles.window}>
      <div className={styles.topbar}>
        <span className={[styles.red, styles.dot].join(' ')}></span>
        <span className={[styles.yellow, styles.dot].join(' ')}></span>
        <span className={[styles.green, styles.dot].join(' ')}></span>
      </div>
      <div className={styles.commandline}>{children}</div>
    </div>
  );
};

export default Terminal;
