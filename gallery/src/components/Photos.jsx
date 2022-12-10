import React from 'react';
import styles from './Photos.module.css'

const Photos = ({photo}) => {
    return (
        <div className={styles.root}>
            <h4>Album: {photo.albumId}</h4>
            <h2 className={styles.title} >{photo.title}</h2>
            <p className={styles.id}>id: {photo.id}</p>
            <img className={styles.photo} src={photo.url} alt=""/>

        </div>
    );
};

export default Photos;