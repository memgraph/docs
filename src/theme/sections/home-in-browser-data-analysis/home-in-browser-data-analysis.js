import React from "react";
import styles from "./home-in-browser-data-analysis.module.css";
import Container from "../../../components/container/container";
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function HomeInBrowserDataAnalysis() {
    const iconArrowRight = "fa fa-arrow-right";
    return (
        <div className={styles.homeInBrowserDataAnalysis}>
            <Container>
                <h2>No downloading, no installing<br />In-browser data analysis</h2>
                <div className={styles.homeInBrowserDataAnalysis__row}>
                    <div className={styles.homeInBrowserDataAnalysis__column + ' ' + styles.homeInBrowserDataAnalysis__column__cloud}>
                        <a href={useBaseUrl('/memgraph-cloud')} style={{ textDecoration: 'none', color: '#231F20' }}>
                            <div className={styles.homeInBrowserDataAnalysis__title}>
                                Memgraph Cloud
                            </div>
                        </a>
                        <div className={styles.homeInBrowserDataAnalysis__subtitle}>
                            Check out Memgraph Cloud - a cloud service fully managed on AWS and available in 26 geographic regions around the world. Memgraph Cloud allows you to create projects with Enterprise instances of MemgraphDB from your browser.
                        </div>
                        <div className={styles.homeInBrowserDataAnalysis__image}>
                            <a href={useBaseUrl('/memgraph-cloud')}>
                                <img src={require('/img/cloud.gif').default}></img>
                            </a>
                        </div>
                        <div className={styles.homeInBrowserDataAnalysis__cta}>
                            <a className={styles.homeInBrowserDataAnalysis__content__url} href={useBaseUrl('/memgraph-cloud')}>Get started with Cloud  &nbsp; <i className={iconArrowRight} style={{ color: "#FB6E00" }}></i></a>
                        </div>
                    </div>
                    <div className={styles.homeInBrowserDataAnalysis__column + ' ' + styles.homeInBrowserDataAnalysis__column__lab}>
                        <a href={useBaseUrl('/memgraph-lab')} style={{ textDecoration: 'none', color: '#231F20' }}>
                            <div className={styles.homeInBrowserDataAnalysis__title}>
                                Memgraph Lab
                            </div>
                        </a>
                        <div className={styles.homeInBrowserDataAnalysis__subtitle}>
                            Visualize graphs and play with queries to understand your data. Memgraph Lab is a user interface that helps you explore and manipulate the data stored in Memgraph. Visualize graphs, execute ad hoc queries, and optimize their performance.
                        </div>
                        <div className={styles.homeInBrowserDataAnalysis__image}>
                            <a href={useBaseUrl('/memgraph-lab')}>
                                <img src={require('/img/lab.gif').default}></img>
                            </a>
                        </div>
                        <div className={styles.homeInBrowserDataAnalysis__cta}>
                            <a className={styles.homeInBrowserDataAnalysis__content__url} href={useBaseUrl('/memgraph-lab')}>Get started with Lab  &nbsp; <i className={iconArrowRight} style={{ color: "#FB6E00" }}></i></a>
                        </div>
                    </div>
                </div>
            </Container>
        </div >
    );
}
