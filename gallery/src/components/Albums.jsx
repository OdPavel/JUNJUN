import React from 'react';
import styles from './Albums.module.css'

const Albums = ({album, onClick}) => {

    return (
        <div onClick={()=> onClick(album.id)} className={styles.root}>
            <h2 className={styles.title}>{album.title}</h2>
        </div>

    )
}
export default Albums