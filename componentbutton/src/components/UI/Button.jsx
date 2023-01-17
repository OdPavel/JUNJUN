import React from 'react';
import styles from './Button.module.css'

const Button = ({inc, dec, onClickAdd, onClickPutAway}) => {
    return (
        <div className={styles.button}>
            <button onClick={(e) => onClickAdd(e)} type="button" className="btn btn-outline-success">{inc}</button>
            <button onClick={onClickPutAway} type="button" className="btn btn-outline-danger">{dec}</button>
        </div>
    );
};

export default Button;