import React from 'react';
import styles from './container-docs.module.css';

export default function Container(props) {

    const {
        size='default',
        children,
    } = props;

    let sizeClass = null;

    if (size === 'small') {
        sizeClass = styles.mgContainer__small;
    }

    return (
        <div className={`${styles.mgContainer} ${sizeClass}`}>
            {children}
        </div>
    );
}
