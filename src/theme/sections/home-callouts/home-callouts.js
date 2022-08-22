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
            url: useBaseUrl('/memgraph/getting-started'),
        },
        {
            title: 'Try out Memgraph Cloud',
            subtitle: 'Explore your data in the cloud through our fully-managed service.',
            urlText: 'Get Started with Cloud',
            url: useBaseUrl('/memgraph-cloud'),
        },
        {
            title: 'MAGE - graph library',
            subtitle: 'Run graph algorithms on real-time data - stream processing with the power of graph analytics.',
            urlText: 'Get Started with MAGE',
            url: useBaseUrl('/mage'),
        },
        {
            title: 'Import your data',
            subtitle: 'Import data into Memgraph using streaming data sources, CSV files, or Cypher commands.',
            urlText: 'Gather all your data in one place',
            url: useBaseUrl('/memgraph/import-data'),
        },
        /*
        {
            title: 'Connect to Memgraph',
            subtitle: 'Connect to Memgraph with your preferred programming language, via CLI console or the Memgraph Lab GUI.',
            urlText: 'Start exploring your data',
            url: useBaseUrl('/memgraph/connect-to-memgraph'),
        },
        */
        // {
        //     title: 'Query, analyze & visualize the data',
        //     subtitle: 'Use Memgraph Lab to visualize, query, and interact with your data.',
        //     urlText: 'Get Started with Memgraph Lab',
        //     url: useBaseUrl('/memgraph-lab'),
        // },
        {
            title: 'GQLAlchemy - Python library',
            subtitle: 'Instead of writing Cypher queries, write object-oriented Python code, which the Object Graph Mapper will automatically translate into Cypher queries.',
            urlText: 'Get started with GQLAlchemy',
            url: useBaseUrl('/gqlalchemy'),

        },
        {
            title: 'Cypher Manual',
            subtitle: 'Start learning the Cypher query language and analyze your data.',
            urlText: 'Start learning Cypher',
            url: useBaseUrl('/cypher-manual'),
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
