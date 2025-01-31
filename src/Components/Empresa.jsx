import React from 'react';
import styles from './Empresa.module.css';

const Empresa = () => {
  return (
    <article className={styles.SobreEmpresa}>
      <h1>Sobre a nossa Empresa</h1>
      <div className={styles.corpo}>
        <section className={styles.comercial}>
          <span className={styles.bgImgComercial} />
          <p className={styles.txt1}>
            <strong>SupraNet</strong> é uma <strong>empresa</strong> de internet
            dedicada a fornecer soluções de conectividade de
            <strong>alta qualidade</strong> para o mercado comercial e
            empresarial.
          </p>
          <p className={styles.txt2}>
            Com um enfoque em planos acessíveis e personalizados, a
            <strong>SupraNet</strong> está comprometida em oferecer serviços que
            atendam às necessidades de ,<strong>empresas</strong> de todos os
            tamanhos, desde startups até grandes corporações.
          </p>
        </section>
        <section className={`${styles.empresarial} ${styles.bgEmpresarial}`}>
          <span className={styles.bgImgEmpresarial} />
          <p>
            Nossa missão é <strong>conectar negócios</strong> ao mundo digital
            de maneira eficaz e econômica, proporcionando uma experiência de
            <strong>internet superior</strong> que impulsiona a
            <strong>produtividade</strong> e a <strong>inovação!!!</strong>
          </p>
        </section>
      </div>
    </article>
  );
};

export default Empresa;
