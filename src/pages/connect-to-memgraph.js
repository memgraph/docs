import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Container from "../components/container/container";
import styles from "./connect-to-memgraph.module.css";
import useBaseUrl from '@docusaurus/useBaseUrl';
import ConnectButton from "../components/connect-button/connect-button";


function ConnectToMemgraph() {
    const context = useDocusaurusContext();
    const {siteConfig: {customFields = {}, tagline} = {}} = context;
    const title = "Connect to Memgraph";

    const viaDriver = [
        {
            title: 'Python',
            img: useBaseUrl('img/connect-page/python-unselected.png'),
            imgActive: useBaseUrl('img/connect-page/python-selected.png'),
        },
        {
            title: 'CSharp',
            img: useBaseUrl('img/connect-page/csharp-unselected.png'),
            imgActive: useBaseUrl('img/connect-page/csharp-selected.png'),
        },
    ]

    return (
        <Layout
            permalink="/"
            title={tagline}
            description={customFields.description}>
            <main>
                <Container size="small">
                    <div className={styles.connectToMemgraph}>
                        <h1>{title}</h1>
                        <section>
                            <h2>Connect via driver</h2>
                            <p>Connect to Memgraph using one of our official libraries. These are mantained, support new Memgraph features, receive bug fixes, performance echancements, and security patches.</p>
                            <div className={styles.connectToMemgraph__grid}>
                                {viaDriver.map((item, i) => {
                                    return (
                                        <ConnectButton title={item.title} img={item.img} imgActive={item.imgActive} />
                                    );
                                })}
                            </div>
                        </section>


                    </div>
                </Container>

            </main>
        </Layout>
    );
}

export default ConnectToMemgraph;
