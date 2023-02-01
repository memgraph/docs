import React from "react";
import styles from "./home-in-browser-data-analysis.module.css";
import Container from "../../../components/container/container";

export default function HomeInBrowserDataAnalysis() {
    return (
        <div className={styles.homeInBrowserDataAnalysis}>
            <Container>
                <h2>No downloading, no installing<br />- in-browser data analysis</h2>
                <div className={styles.homeInBrowserDataAnalysis__row}>
                    <div className={styles.homeInBrowserDataAnalysis__column + ' ' + styles.homeInBrowserDataAnalysis__column__cloud}>
                        <div className={styles.homeInBrowserDataAnalysis__title}>
                            Memgraph Cloud
                        </div>
                        <div className={styles.homeInBrowserDataAnalysis__subtitle}>
                            Check out Memgraph Cloud - a cloud service fully managed on AWS and available in 26 geographic regions around the world. Memgraph Cloud allows you to create projects with Enterprise instances of MemgraphDB from your browser.
                        </div>
                        <div className={styles.homeInBrowserDataAnalysis__image}>
                            <img src={require('/img/memgraph-cloud-the-fastest-way-to-build-graph-apps-for-streaming.gif').default}></img>
                        </div>
                    </div>
                    <div className={styles.homeInBrowserDataAnalysis__column}>
                        <div className={styles.homeInBrowserDataAnalysis__title}>
                            Memgraph Lab
                        </div>
                        <div className={styles.homeInBrowserDataAnalysis__subtitle}>
                            Visualize graphs and play with queries to understand your data. Memgraph Lab is a user interface that helps you explore and manipulate the data stored in Memgraph. Visualize graphs, execute ad hoc queries, and optimize their performance.
                        </div>
                        <div className={styles.homeInBrowserDataAnalysis__image}>
                            <img src={require('/img/memgraph-lab-understand-your-schema-visual.gif').default}></img>
                        </div>
                    </div>
                </div>
            </Container>
        </div >
    );
}
