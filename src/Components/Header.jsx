import React from 'react';
import styles from './Header.module.css';
import logo from '../assets/SupraNet_P.png';

const Header = () => {
  return (
    <div className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.logoImg}>
          <img src={logo} alt="Logo da empresa SupraNet" />
        </div>
        <ul>
          <li>
            <a href="#">empresa</a>
          </li>
          <li>
            <a href="#planos">planos</a>
          </li>
          <li className={styles.btnContratar}>
            <a href="#contratar">contratar</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
