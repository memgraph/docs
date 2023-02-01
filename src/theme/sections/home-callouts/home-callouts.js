import React from 'react';
import styles from './home-callouts.module.css';
import Container from "../../../components/container/container";
import useBaseUrl from '@docusaurus/useBaseUrl';
import CalloutBoxClickable from '../../../components/callout-box-clickable/callout-box-clickable';

export default function HomeCallouts() {
    const callouts = [
        {
            title: 'Install Memgraph',
            subtitle: 'Download and install Memgraph locally using Docker on Windows and macOS, or natively on Linux and WSL.',
            urlText: 'Follow guide',
            url: useBaseUrl('/memgraph/installation'),
        },
        {
            title: 'Connect to Memgraph',
            subtitle: 'Connect to the database using Memgraph Lab, mgconsole, various drivers (Python, C/C++ and others) and WebSocket.',
            urlText: 'Follow guide',
            url: useBaseUrl('/memgraph/connect-to-memgraph'),
        },
        {
            title: 'Import data',
            subtitle: 'Import data into Memgraph using Kafka, RedPanda or Pulsar streams, CSV and JSON files, or Cypher commands.',
            urlText: 'Follow guide',
            url: useBaseUrl('/memgraph/import-data'),
        },
    ]
    return (
        <Container>
            <div className={styles.homeCallouts}>
                {callouts.map((callout, i) => (
                    <div key={i} className={styles.homeCallouts__item}>
                        <CalloutBoxClickable title={callout.title} subtitle={callout.subtitle} url={callout.url} urlText={callout.urlText} />
                    </div>
                ))}
            </div>
        </Container>
    );
}
