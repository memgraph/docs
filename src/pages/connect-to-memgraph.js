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
            imgDark: useBaseUrl(imgFolder + 'dark/python-unselected-dm.png'),
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
            imgDark: useBaseUrl(imgFolder + 'dark/rust-selected-dm.png'),
            imgDarkActive: useBaseUrl(imgFolder + 'dark/rust-unselected-dm.svg'),
            url: useBaseUrl('memgraph/getting-started/connecting-applications/rust'),
        },
        {
            title: 'Java',
            img: useBaseUrl(imgFolder + 'java-unselected.png'),
            imgActive: useBaseUrl(imgFolder + 'java-selected.png'),
            imgDark: useBaseUrl(imgFolder + 'dark/java-selected-dm.svg'),
            imgDarkActive: useBaseUrl(imgFolder + 'dark/java-unselected-dm.svg'),
            url: useBaseUrl('memgraph/getting-started/connecting-applications/java'),
        },
        {
            title: 'GoLang',
            img: useBaseUrl(imgFolder + 'golang-unselected.png'),
            imgActive: useBaseUrl(imgFolder + 'golang-selected.png'),
            imgDark: useBaseUrl(imgFolder + 'dark/golang-selected-dm.png'),
            imgDarkActive: useBaseUrl(imgFolder + 'dark/golang-selected-dm.png'),
            url: useBaseUrl('memgraph/getting-started/connecting-applications/go'),
        },
        {
            title: 'PHP',
            img: useBaseUrl(imgFolder + 'php-unselected.png'),
            imgActive: useBaseUrl(imgFolder + 'php-selected.png'),
            imgDark: useBaseUrl(imgFolder + 'dark/php-selected-dm.png'),
            imgDarkActive: useBaseUrl(imgFolder + 'dark/php-unselected-dm.png'),
            url: useBaseUrl('memgraph/getting-started/connecting-applications/php'),
        },
        {
            title: 'Ruby',
            img: useBaseUrl(imgFolder + 'ruby-unselected.png'),
            imgActive: useBaseUrl(imgFolder + 'ruby-selected.png'),
            imgDark: useBaseUrl(imgFolder + 'dark/ruby-selected-dm.svg'),
            imgDarkActive: useBaseUrl(imgFolder + 'dark/ruby-unselected-dm.png'),
            url: 'https://github.com/neo4jrb/neo4j'
        },
        {
            title: 'JavaScript',
            img: useBaseUrl(imgFolder + 'JS-unselected.png'),
            imgActive: useBaseUrl(imgFolder + 'JS-selected.svg'),
            imgDark: useBaseUrl(imgFolder + 'dark/JS-selected-dm.svg'),
            imgDarkActive: useBaseUrl(imgFolder + 'JS-selected.svg'),
            url: useBaseUrl('memgraph/getting-started/connecting-applications/javascript'),
        },
        {
            title: 'Haskell',
            img: useBaseUrl(imgFolder + 'haskell-unselected.svg'),
            imgActive: useBaseUrl(imgFolder + 'haskell-selected.svg'),
            imgDark: useBaseUrl(imgFolder + 'haskell-selected.svg'),
            imgDarkActive: useBaseUrl(imgFolder + 'dark/haskell-unselected-dm.svg'),
            url: useBaseUrl('memgraph/getting-started/connecting-applications/haskell'),
        },
    ];

    const viaLab = {
            title: 'MemgraphLab',
            img: useBaseUrl(imgFolder + 'lab-unselected.svg'),
            imgActive: useBaseUrl(imgFolder + 'lab-selected.svg'),
            imgDark: useBaseUrl(imgFolder + 'dark/lab-selected-dm.svg'),
            imgDarkActive: useBaseUrl(imgFolder + 'dark/lab-unselected-dm.svg'),
            url: useBaseUrl('memgraph-lab/'),
        };

    const viaConsole = [
        {
            title: 'Windows',
            img: useBaseUrl(imgFolder + 'windows-unselected.svg'),
            imgActive: useBaseUrl(imgFolder + 'windows-selected.svg'),
            imgDark: useBaseUrl(imgFolder + 'dark/windows-selected-dm.svg'),
            imgDarkActive: useBaseUrl(imgFolder + 'dark/windows-unselected-dm.png'),
            url: useBaseUrl('memgraph/getting-started/querying#querying-using-console'),
        },
        {
            title: 'Apple',
            img: useBaseUrl(imgFolder + 'apple-unselected.svg'),
            imgActive: useBaseUrl(imgFolder + 'apple-selected.svg'),
            imgDark: useBaseUrl(imgFolder + 'dark/apple-selected-dm.svg'),
            imgDarkActive: useBaseUrl(imgFolder + 'dark/apple-unselected-dm.png'),
            url: useBaseUrl('memgraph/getting-started/querying#querying-using-console'),
        },
        {
            title: 'Linux',
            img: useBaseUrl(imgFolder + 'linux-unselected.svg'),
            imgActive: useBaseUrl(imgFolder + 'linux-selected.svg'),
            imgDark: useBaseUrl(imgFolder + 'dark/linux-selected-dm.svg'),
            imgDarkActive: useBaseUrl(imgFolder + 'dark/linux-unselected-dm.svg'),
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
                                        <ConnectButton key={i} title={item.title} img={item.img} imgActive={item.imgActive} imgDark={item.imgDark} imgDarkActive={item.imgDarkActive} />
                                    );
                                })}
                            </div>
                        </section>

                        <section>
                            <h2>Connect via MemgraphLab</h2>
                            <p>What is Memgraph Lab, how it works, what to expect.</p>
                            <ConnectButton title={viaLab.title} img={viaLab.img} imgActive={viaLab.imgActive} imgDark={viaLab.imgDark} imgDarkActive={viaLab.imgDarkActive} />
                        </section>

                        <section>
                            <h2>Connect via mgconsole</h2>
                            <p>What is mgconsole, how it works, what to expect.</p>
                            <div className={styles.connectToMemgraph__grid}>
                                {viaConsole.map((item, i) => {
                                    return (
                                        <ConnectButton key={i} title={item.title} img={item.img} imgActive={item.imgActive} imgDark={item.imgDark} imgDarkActive={item.imgDarkActive} />
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
