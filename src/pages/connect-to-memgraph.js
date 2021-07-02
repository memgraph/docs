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

    const imgFolder = 'img/connect-page/';

    const viaDriver = [
        {
            title: 'Python',
            img: useBaseUrl(imgFolder + 'python-unselected.png'),
            imgActive: useBaseUrl(imgFolder + 'python-selected.png'),
            imgDark: useBaseUrl(imgFolder + 'python-unselected.png'),
            imgDarkActive: useBaseUrl(imgFolder + 'python-selected.png'),
            url: useBaseUrl('memgraph/getting-started/connecting-applications/python'),
        },
        {
            title: 'C#',
            img: useBaseUrl(imgFolder + 'csharp-unselected.png'),
            imgActive: useBaseUrl(imgFolder + 'csharp-selected.png'),
            imgDark: useBaseUrl(imgFolder + 'csharp-unselected.png'),
            imgDarkActive: useBaseUrl(imgFolder + 'csharp-selected.png'),
            url: useBaseUrl('memgraph/getting-started/connecting-applications/c-sharp'),
        },
        {
            title: 'Rust',
            img: useBaseUrl(imgFolder + 'rust-unselected.png'),
            imgActive: useBaseUrl(imgFolder + 'rust-selected.png'),
            imgDark: useBaseUrl(imgFolder + 'dark/rust-unselected-dm.svg'),
            imgDarkActive: useBaseUrl(imgFolder + 'dark/rust-selected-dm.png'),
            url: useBaseUrl('memgraph/getting-started/connecting-applications/rust'),
        },
        {
            title: 'Java',
            img: useBaseUrl(imgFolder + 'java-unselected.png'),
            imgActive: useBaseUrl(imgFolder + 'java-selected.png'),
            imgDark: useBaseUrl(imgFolder + 'dark/java-unselected-dm.svg'),
            imgDarkActive: useBaseUrl(imgFolder + 'dark/java-selected-dm.svg'),
            url: useBaseUrl('memgraph/getting-started/connecting-applications/java'),
        },
        {
            title: 'GoLang',
            img: useBaseUrl(imgFolder + 'golang-unselected.png'),
            imgActive: useBaseUrl(imgFolder + 'golang-selected.png'),
            imgDark: useBaseUrl(imgFolder + 'dark/golang-unselected-dm.png'),
            imgDarkActive: useBaseUrl(imgFolder + 'dark/golang-selected-dm.png'),
            url: useBaseUrl('memgraph/getting-started/connecting-applications/go'),
        },
        {
            title: 'PHP',
            img: useBaseUrl(imgFolder + 'php-unselected.png'),
            imgActive: useBaseUrl(imgFolder + 'php-selected.png'),
            imgDark: useBaseUrl(imgFolder + 'dark/php-unselected-dm.png'),
            imgDarkActive: useBaseUrl(imgFolder + 'dark/php-selected-dm.png'),
            url: useBaseUrl('memgraph/getting-started/connecting-applications/php'),
        },
        {
            title: 'Ruby',
            img: useBaseUrl(imgFolder + 'ruby-unselected.png'),
            imgActive: useBaseUrl(imgFolder + 'ruby-selected.png'),
            imgDark: useBaseUrl(imgFolder + 'dark/ruby-unselected-dm.png'),
            imgDarkActive: useBaseUrl(imgFolder + 'dark/ruby-selected-dm.svg'),
            url: 'https://github.com/neo4jrb/neo4j'
        },
        {
            title: 'JavaScript',
            img: useBaseUrl(imgFolder + 'JS-unselected.png'),
            imgActive: useBaseUrl(imgFolder + 'JS-selected.svg'),
            imgDark: useBaseUrl(imgFolder + 'JS-unselected.png'),
            imgDarkActive: useBaseUrl(imgFolder + 'dark/JS-selected-dm.svg'),
            url: useBaseUrl('memgraph/getting-started/connecting-applications/javascript'),
        },
        {
            title: 'Haskell',
            img: useBaseUrl(imgFolder + 'haskell-unselected.svg'),
            imgActive: useBaseUrl(imgFolder + 'haskell-selected.svg'),
            imgDark: useBaseUrl(imgFolder + 'dark/haskell-unselected-dm.svg'),
            imgDarkActive: useBaseUrl(imgFolder + 'haskell-selected.svg'),
            url: useBaseUrl('memgraph/getting-started/connecting-applications/haskell'),
        },
    ];

    const viaLab = {
            title: 'MemgraphLab',
            img: useBaseUrl(imgFolder + 'lab-unselected.svg'),
            imgActive: useBaseUrl(imgFolder + 'lab-selected.svg'),
            imgDark: useBaseUrl(imgFolder + 'dark/lab-unselected-dm.svg'),
            imgDarkActive: useBaseUrl(imgFolder + 'dark/lab-selected-dm.svg'),
            url: useBaseUrl('memgraph-lab/'),
        };

    const viaConsole = {
        title: 'mgconsole',
        img: useBaseUrl(imgFolder + 'mgconsole-unselected.svg'),
        imgActive: useBaseUrl(imgFolder + 'mgconsole-selected.svg'),
        imgDark: useBaseUrl(imgFolder + 'dark/mgconsole-unselected-dm.svg'),
        imgDarkActive: useBaseUrl(imgFolder + 'dark/mgconsole-selected-dm.svg'),
        url: useBaseUrl('memgraph/getting-started/querying#querying-using-console'),
    };

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
                            <h2>Connect via Driver</h2>
                            <p>Connect to Memgraph from your favorite programming language. We support a wide range of drivers.</p>
                            <div className={styles.connectToMemgraph__grid}>
                                {viaDriver.map((item, i) => {
                                    return (
                                        <ConnectButton key={i} url={item.url} title={item.title} img={item.img} imgActive={item.imgActive} imgDark={item.imgDark} imgDarkActive={item.imgDarkActive} />
                                    );
                                })}
                            </div>
                        </section>

                        <section>
                            <h2>Connect via Memgraph Lab</h2>
                            <p>Memgraph Lab is an interactive application for querying and visualizing your graphs.</p>
                            <ConnectButton title={viaLab.title} url={viaLab.url} img={viaLab.img} imgActive={viaLab.imgActive} imgDark={viaLab.imgDark} imgDarkActive={viaLab.imgDarkActive} />
                        </section>
                        {/*
                            <section>
                                <h2>Connect via mgconsole</h2>
                                <p>A command-line interface for querying Memgraph.</p>
                                <div className={styles.connectToMemgraph__grid}>
                                    {viaConsole.map((item, i) => {
                                        return (
                                            <ConnectButton key={i} url={item.url} title={item.title} img={item.img} imgActive={item.imgActive} imgDark={item.imgDark} imgDarkActive={item.imgDarkActive} />
                                        );
                                    })}
                                </div>
                            </section>
                        */}
                        {
                            // Temporary image, a custom mgconsole image is needed
                        }
                        <section>
                            <h2>Connect via mgconsole</h2>
                            <p>A command-line interface for querying Memgraph.</p>
                            <ConnectButton title={viaConsole.title} url={viaConsole.url} img={viaConsole.img} imgActive={viaConsole.imgActive} imgDark={viaConsole.imgDark} imgDarkActive={viaConsole.imgDarkActive} />
                        </section>
                    </div>
                </Container>

            </main>
        </Layout>
    );
}

export default ConnectToMemgraph;
