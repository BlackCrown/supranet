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

      <div className={styles.contatoFooter}>
        <h1 className="Titulo">Solicite Contato:</h1>
        <div className={styles.dados}>
          <p className={styles.cabecalho}>
            Deixe seus dados e nossa empresa entrará em contato o mais rápido
            possível:{' '}
          </p>
          <form action="" className={styles.formulario}>
            <div className={styles.full}>
              <label htmlFor="nome">Nome: </label>
              <input type="text" id="nome" name="nome" />
            </div>

            <div>
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" />
            </div>

            <div>
              <label htmlFor="numero">Número: </label>
              <input type="text" id="numero" name="numero" />
            </div>

            <div className={styles.full}>
              <label htmlFor="endereco">Endereço: </label>
              <input type="text" id="endereco" name="endereco" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;
