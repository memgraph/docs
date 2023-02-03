import React from 'react';
import styles from './callout-box-clickable.module.css';

export default function CalloutBoxClickable(props) {
    const {
        title,
        subtitle,
        url,
        urlText
    } = props;
    const iconArrowRight = "fa fa-arrow-right";

    return (
        <a href={url} style={{ textDecoration: 'none', color: '#231F20' }}>
            <div className={styles.calloutBox}>
                <div className={styles.calloutBox__title}>{title}</div>
                <div className={styles.calloutBox__subtitle}>{subtitle}</div>
                <a className={styles.calloutBox__url} href={url}>{urlText} &nbsp; <i className={iconArrowRight} style={{ color: "#FB6E00" }}></i>
                </a>
            </div>
        </a>
    );
}
