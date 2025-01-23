import React from 'react';
import styles from './Empresa.module.css';

const Empresa = () => {
  return (
    <article className={styles.empresa}>
      <h1>Sobre a nossa Empresa</h1>
      <section>
        <p>
          <strong>SupraNet</strong> é uma <strong>empresa</strong> de internet
          dedicada a fornecer soluções de conectividade de
          <strong>alta qualidade</strong> para o mercado comercial e
          empresarial.
        </p>
        <p>
          Com um enfoque em planos acessíveis e personalizados, a
          <strong>SupraNet</strong> está comprometida em oferecer serviços que
          atendam às necessidades de ,<strong>empresas</strong> de todos os
          tamanhos, desde startups até grandes corporações.
        </p>
      </section>
      <section>
        <p>
          Nossa missão é <strong>conectar negócios</strong> ao mundo digital de
          maneira eficaz e econômica, proporcionando uma experiência de
          <strong>internet superior</strong> que impulsiona a
          <strong>produtividade</strong> e a <strong>inovação!!!</strong>
        </p>
      </section>
    </article>
  );
};

export default Empresa;
