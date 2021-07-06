import React from 'react';
import styles from './callout-img-box.module.css';

export default function CalloutImgBox(props) {
    const {
        title,
        subtitle,
        url,
        img
    } = props;

    return (
        <a href={url} className={styles.calloutImgBox}>
            <div className={styles.calloutImgBox__img}>
                    <img src={img} alt={title} />
            </div>
            <div className={styles.calloutImgBox__title}>{title}</div>
            <div className={styles.calloutImgBox__subtitle}>{subtitle}</div>
        </a>
    );
}
