/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable @typescript-eslint/no-unused-vars */
import styles from './Footer.module.scss';
import { ReactComponent as Logo } from 'assets/logo.svg';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Logo />
    </footer>
  );
}
