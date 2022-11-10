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
                    <p>In <a href="https://playground.memgraph.com/">Memgraph Playground</a> you can explore data sets, run example queries, check out the integrated graph visualizations - and get a jump start on your data driven project.</p>
                </div>
                <div className={styles.homePlaygroundEmbed__embed}>
                    <iframe src="https://playground.memgraph.com/share/96fe4f42-f5b2-41d1-8ace-4055ded85cbc/embed" width="100%" height="500rem"></iframe>
                </div>
            </Container>
        </div>
    );
}
