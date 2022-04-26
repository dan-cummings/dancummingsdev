import Header from './Header';
import Footer from './Footer';
import styles from '../styles/Layout.module.scss';

export default function Layout({ children }: { children: any }) {
  return (
    <>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  );
}
