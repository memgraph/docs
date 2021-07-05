import React from 'react';
import styles from './connect-button.module.css';
import ImageSwitcher from "../ImageSwitcher";

export default function ConnectButton(props) {
    const {
        title,
        url,
        img,
        imgActive,
        imgDark,
        imgDarkActive,
    } = props;

    return (
        <a href={url} className={styles.connectButton}
           style={styles}>
            <ImageSwitcher className={styles.connectButton__img} lightImageSrc={img} darkImageSrc={imgDark} />
            <ImageSwitcher lightImageSrc={imgActive} darkImageSrc={imgDarkActive} alt={title} className={styles.connectButton__imgActive} />
        </a>
    );
}
