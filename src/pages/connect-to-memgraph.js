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
            url: useBaseUrl('memgraph/getting-started/connecting-applications/python'),
        },
        {
            title: 'C#',
            img: useBaseUrl('img/connect-page/csharp-unselected.png'),
            imgActive: useBaseUrl('img/connect-page/csharp-selected.png'),
            url: useBaseUrl('memgraph/getting-started/connecting-applications/c-sharp'),
        },
        {
            title: 'Rust',
            img: useBaseUrl('img/connect-page/rust-unselected.png'),
            imgActive: useBaseUrl('img/connect-page/rust-selected.png'),
            url: useBaseUrl('memgraph/getting-started/connecting-applications/rust'),
        },
        {
            title: 'Java',
            img: useBaseUrl('img/connect-page/java-unselected.png'),
            imgActive: useBaseUrl('img/connect-page/java-selected.png'),
            url: useBaseUrl('memgraph/getting-started/connecting-applications/java'),
        },
        {
            title: 'GoLang',
            img: useBaseUrl('img/connect-page/golang-unselected.png'),
            imgActive: useBaseUrl('img/connect-page/golang-selected.png'),
            url: useBaseUrl('memgraph/getting-started/connecting-applications/go'),
        },
        {
            title: 'PHP',
            img: useBaseUrl('img/connect-page/php-unselected.png'),
            imgActive: useBaseUrl('img/connect-page/php-selected.png'),
            url: useBaseUrl('memgraph/getting-started/connecting-applications/php'),
        },
        {
            title: 'Ruby',
            img: useBaseUrl('img/connect-page/ruby-unselected.png'),
            imgActive: useBaseUrl('img/connect-page/ruby-selected.png'),
            url: 'https://github.com/neo4jrb/neo4j'
        },
        {
            title: 'JavaScript',
            img: useBaseUrl('img/connect-page/JS-unselected.png'),
            imgActive: useBaseUrl('img/connect-page/JS-selected.svg'),
            url: useBaseUrl('memgraph/getting-started/connecting-applications/javascript'),
        },
        {
            title: 'Haskell',
            img: useBaseUrl('img/connect-page/haskell-unselected.svg'),
            imgActive: useBaseUrl('img/connect-page/haskell-selected.svg'),
            url: useBaseUrl('memgraph/getting-started/connecting-applications/haskell'),
        },
    ];

    const viaLab = {
            title: 'MemgraphLab',
            img: useBaseUrl('img/connect-page/lab-unselected.svg'),
            imgActive: useBaseUrl('img/connect-page/lab-selected.svg'),
            url: useBaseUrl('memgraph-lab/'),
        };

    const viaConsole = [
        {
            title: 'Windows',
            img: useBaseUrl('img/connect-page/windows-unselected.svg'),
            imgActive: useBaseUrl('img/connect-page/windows-selected.svg'),
            url: useBaseUrl('memgraph/getting-started/querying#querying-using-console'),
        },
        {
            title: 'Apple',
            img: useBaseUrl('img/connect-page/apple-unselected.svg'),
            imgActive: useBaseUrl('img/connect-page/apple-selected.svg'),
            url: useBaseUrl('memgraph/getting-started/querying#querying-using-console'),
        },
        {
            title: 'Linux',
            img: useBaseUrl('img/connect-page/linux-unselected.svg'),
            imgActive: useBaseUrl('img/connect-page/linux-selected.svg'),
            url: useBaseUrl('memgraph/getting-started/querying#querying-using-console'),
        }
    ];

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
                                        <ConnectButton key={i} title={item.title} img={item.img} imgActive={item.imgActive} />
                                    );
                                })}
                            </div>
                        </section>

                        <section>
                            <h2>Connect via MemgraphLab</h2>
                            <p>What is Memgraph Lab, how it works, what to expect.</p>
                            <ConnectButton title={viaLab.title} img={viaLab.img} imgActive={viaLab.imgActive} />
                        </section>

                        <section>
                            <h2>Connect via mgconsole</h2>
                            <p>What is mgconsole, how it works, what to expect.</p>
                            <div className={styles.connectToMemgraph__grid}>
                                {viaConsole.map((item, i) => {
                                    return (
                                        <ConnectButton key={i} title={item.title} img={item.img} imgActive={item.imgActive} />
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
