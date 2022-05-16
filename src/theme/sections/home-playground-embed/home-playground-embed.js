import React from "react";
import styles from "./home-playground-embed.module.css";
import Container from "../../../components/container/container";
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function HomePlaygroundEmbed() {
    return (
        <div className={styles.homePlaygroundEmbed}>
            <div className={styles.homePlaygroundEmbed__bg}>
                <img src={useBaseUrl('img/PatternBG.svg')} />
            </div>
            <Container>
                <h2>Master Graph Algorithms in Minutes</h2>
                <div className={styles.homePlaygroundEmbed__subtitle}>
                    <p>In Memgraph Playground you can explore data sets, run example queries, check out the integrated graph visualizations - and get a jump start on your data driven project.</p>
                </div>
                <div className={styles.homePlaygroundEmbed__embed}>
                    <iframe src="https://playground.memgraph.com/share/cd825a1b-7635-4360-a966-3ea2e21f8d07/embed" width="100%" height="500rem"></iframe>
                </div>
            </Container>
        </div>
    );
}
