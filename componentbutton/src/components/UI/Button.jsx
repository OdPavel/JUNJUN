import React from 'react';
import styles from './Button.module.css'

const Button = ({inc, dec, onClick}) => {
    return (
        <div className={styles.button}>
            <button onClick={()=>onClick(+1)} type="button" className="btn btn-outline-success">{inc}</button>
            <button onClick={()=>onClick(-1)} type="button" className="btn btn-outline-danger">{dec}</button>
        </div>
    );
};

export default Button;