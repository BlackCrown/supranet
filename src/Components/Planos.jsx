import React from 'react';
import styles from './Planos.module.css';

const Planos = () => {
  return (
    <section className={styles.container}>
      <div className={styles.bg}>
        <div className={styles.cabecalho}>
          <p>
            Planos sobre medida
            <br /> Feitos para <strong>você</strong>
            <br /> ou <br />
            <strong>Sua empresa!!!</strong>
          </p>
          <p>
            Venha fazer parte dos nossos milhares de
            <br />
            <strong>clientes satisfeitos!!!</strong>
          </p>
        </div>
      </div>
      <div className="conheca">
        <h1 className={styles.planosTitulo}>Conheça nossos planos</h1>
        <div className={styles.card}>
          <h3 className={styles.cardTitulo}>
            PLANOS COMERCIAIS A PARTIR DE R$80 MENSAIS
          </h3>
          <ul>
            <li>Roteador de ultima geração</li>
            <li>Instalação em até 24 hrs</li>
            <li>Primeira fatura após 30 dias</li>
            <li>Suporte 24hrs por dia de seg à sexta</li>
          </ul>
        </div>
      </div>

      <div className={styles.card}>
        <h3 className={styles.cardTitulo}>
          PLANOS EMPRESARIAIS PERSONALIZADOS
        </h3>
        <ul>
          <li>Até 3 roteadores sem custo adicional</li>
          <li>Consultoria especializada em TI e Redes</li>
          <li>Planos anuais com desconto</li>
          <li>Suporte 24hrs todos os dias</li>
        </ul>
      </div>
    </section>
  );
};

export default Planos;
