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
                        <div className={styles.heroImg}>
                            <div className={styles.heroCodeSnippet}>
                                <pre>docker run -it -p 7687:7687 -p 7444:7444 -p 3000:3000 <wbr/>memgraph/memgraph-platform</pre>
                            </div>
                            <img src={useBaseUrl('img/hero-img-desktop.svg')} />
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}
