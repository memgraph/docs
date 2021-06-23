import React from 'react';
import styles from './hero.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Container from "../../../components/container/container";

export default function Hero() {
    return (
        <div className={styles.heroContainer}>
            <Container>
                <div className={styles.heroInner}>
                    <div>
                        <h1>Memgraph Documentation
                            & User Guides</h1>
                        <p>Explore our guides, samples and references to analyze
                            your data with Memgraph</p>
                    </div>
                    <div>
                        <img src={useBaseUrl('img/hero-img-desktop.svg')} />
                    </div>
                </div>
            </Container>
        </div>
    );
}
