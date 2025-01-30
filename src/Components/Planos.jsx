import React from 'react';
import styles from './Planos.module.css';
import Card from './Card/Card';

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
        <div className={styles.planos}>
          <Card
            clas="card1"
            titulo="PLANOS COMERCIAIS  A PARTIR DE R$80 MENSAIS"
            beneficios={[
              'Roteador de última geração',
              'Instalação em até 24 hrs',
              'Primeira parcela após 30 dias',
              'Suporte 24 hrs de seg à sab',
            ]}
          />

          <Card
            clas="card2"
            titulo="PLANOS EMPRESARIAIS PERSONALIZADOS"
            beneficios={[
              'Até 3 roteadores sem custo adicional',
              'Consultoria especializada em TI e Redes',
              'Planos anuais com desconto',
              'Suporte 24hrs todos os dias',
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default Planos;
