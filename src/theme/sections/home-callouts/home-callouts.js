import React from 'react';
import styles from './home-callouts.module.css';
import CalloutBox from "../../../components/callout-box/callout-box";
import Container from "../../../components/container/container";
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function HomeCallouts() {
    const callouts = [
        {
            title: 'Run a real-time graph streaming platform',
            subtitle: 'Download and install Memgraph locally and start exploring your data.',
            urlText: 'Get Started with Memgraph',
            url: 'https://docs.memgraph.com/memgraph/getting-started/',
        },
        {
            title: 'Run Memgraph in the cloud',
            subtitle: 'Explore your data in the cloud through our fully-managed service.',
            urlText: 'Get Started with Cloud',
            url: 'https://memgraph.com/product/clouad',
        },
        {
            title: 'Connect to Memgraph',
            subtitle: 'Connect to Memgraph with your preferred programming language, via CLI console or the Memgraph Lab GUI.',
            urlText: 'Start exploring your data',
            url: useBaseUrl('connect-to-memgraph'),
        },
        {
            title: 'Query, analyze & visualize the data',
            subtitle: 'Use Memgraph Lab to visualize, query, and interact with your data.',
            urlText: 'Get Started with Memgraph Lab',
            url: 'https://docs.memgraph.com/memgraph-lab/',
        },
        {
            title: 'Cypher Manual',
            subtitle: 'Start learning the Cypher query language and analyze your data.',
            urlText: 'Start learning Cypher',
            url: 'https://docs.memgraph.com/cypher-manual/',
        }
    ]
    return (
        <Container>
            <div className={styles.homeCallouts}>
                {callouts.map((callout, i) => (
                    <div key={i} className={styles.homeCallouts__item}>
                        <CalloutBox title={callout.title} subtitle={callout.subtitle} url={callout.url} urlText={callout.urlText} />
                    </div>
                ))}
            </div>
        </Container>
    );
}
