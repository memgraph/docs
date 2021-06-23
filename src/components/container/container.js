import React from 'react';
import styles from './container.module.css';

export default function Container(props) {

    const component = 'mg-container';

    const {
        size='default',
        children,
    } = props;

    return (
        <div className={styles.mgContainer}>
            {children}
        </div>
    );
}
