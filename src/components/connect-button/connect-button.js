import React from 'react';
import styles from './connect-button.module.css';

export default function ConnectButton(props) {
    const {
        title,
        url,
        img,
        imgActive,
    } = props;

    return (
        <a href={url} className={styles.connectButton}
           style={styles}>
            <img src={img} alt={title} className={styles.connectButton__img} />
            <img src={imgActive} alt={title} className={styles.connectButton__imgActive} />
        </a>
    );
}
