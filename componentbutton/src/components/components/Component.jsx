import React from 'react';
import styles from './Component.module.css'

const Component = ({arr, onClickRemove}) => {
    return (
        <div className={styles.btn}>
            {arr.map((item) => <button onDoubleClick={() => onClickRemove(item.id)} key={item.id} type='button'
                                       className={'btn btn-outline-primary'}>{item.numb}</button>)}
        </div>
    );
};

export default Component;