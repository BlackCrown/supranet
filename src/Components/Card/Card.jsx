import React from 'react';
import styles from './Card.module.css';
import Checked from '../../assets/Checked.svg';

const Card = ({ titulo, beneficios, clas }) => {
  return (
    <div className={`${styles.container} ${clas}`}>
      <h3 className={styles.cardTitulo}>{titulo}</h3>
      <ul className={styles.vantagens}>
        {beneficios.map((beneficio) => (
          <div className={styles.beneficio} key={beneficio}>
            <img src={Checked} alt="" />
            <li>{beneficio}</li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Card;
