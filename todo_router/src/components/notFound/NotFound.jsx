import React from 'react';
import styles from './NotFound.module.css';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className={styles.root}>
      <h1>Ничего не найдено</h1>
      <span>😕</span>
      <p>Bернитесь на главную</p>
      <Link to="/" className={styles.link}>
        Главная
      </Link>
    </div>
  );
};

export default NotFound;
