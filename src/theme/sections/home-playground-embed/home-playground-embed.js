import React from "react";
import styles from "./home-playground-embed.module.css";
import Container from "../../../components/container/container";

export default function HomePlaygroundEmbed() {
    return (
        <div className={styles.homePlaygroundEmbed}>
            <Container>
                <h2>Master Graph Algorithms in Minutes</h2>
                <div className={styles.homePlaygroundEmbed__subtitle}>
                    <p>In Memgraph Playground you can explore data sets, run example queries, check out the integrated graph visualizations - and get a jump start on your data driven project.</p>
                </div>
                <iframe src="https://playground.memgraph.com/share/cd825a1b-7635-4360-a966-3ea2e21f8d07/embed" width="100%" height="500rem"></iframe>
            </Container>
        </div>
    );
}
