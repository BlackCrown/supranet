import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.menuFooter}>
        <h1 className="Titulo">Menu</h1>
        <nav>
          <ul>
            <li>
              <a href="#">Quero contratar</a>
            </li>
            <li>
              <a href="#">Planos para Empresaas</a>
            </li>
            <li>
              <a href="#">Trabalhe Conosco</a>
            </li>
            <li>
              <a href="#">Sobre a SupraNet</a>
            </li>
            <li>
              <a href="#">Suporte on-line</a>
            </li>
            <li>
              <a href="#">Duvidas frequentes</a>
            </li>
            <li>
              <a href="#">Meios de contato</a>
            </li>
          </ul>
        </nav>
      </div>

      <div>
        <h1 className="Titulo">Solicite Contato:</h1>
        <div>
          <form action=""></form>
        </div>
      </div>
    </div>
  );
};

export default Footer;
