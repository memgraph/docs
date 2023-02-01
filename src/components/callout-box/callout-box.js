import React from 'react';
import styles from './callout-box.module.css';

export default function CalloutBox(props) {
    const {
        title,
        subtitle,
        url,
        urlText
    } = props;
    const iconArrowRight = "fa fa-arrow-right";

    return (
        <div className={styles.calloutBox}>
            <div className={styles.calloutBox__title}>{title}</div>
            <div className={styles.calloutBox__subtitle}>{subtitle}</div>
            <a className={styles.calloutBox__url} href={url}>{urlText} &nbsp; <i className={iconArrowRight} style={{ color: "#FB6E00" }}></i>
            </a>
        </div>
    );
}
