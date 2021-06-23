import React from 'react';
import styles from './home-ecosystem.module.css';
import Container from "../../../components/container/container";
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function HomeEcosystem() {

    const iconArrowRight = "fa fa-arrow-right";
    const ecosystems = {
        'Memgraph': {
            description: 'Memgraph is a modern graph analytics platform engineered from the ground up to deliver\n' +
                'real-time performance for both transactional and analytical graph workloads at scale.\n',
            url: 'https://memgraph.com/product',
            urlText: 'Learn more',
        },
        'Lab': {
            description: 'Memgraph Lab is a visual user interface that connects your local Memgraph instance or Cloud account. You can use Lab to import, explore and visualize your data as well as execute and optimize Cypher queries.',
            url: 'https://memgraph.com/product/lab',
            urlText: 'Learn more',
        },
        'Cloud': {
            description: 'A fully-managed, cloud-hosted graph database-as-a-service supported by the engineering team behind Memgraph. We take the day-to-day hassle of management operations out of your hands so you can focus on building your business.',
            url: 'https://memgraph.com/product/cloud',
            urlText: 'Learn more',
        },
        'Playground': {
            description: 'Memgraph Playground is a web platform that contains a lot of helpful tutorials and examples on how complex data can be explored using the Cypher query language. You don’t need to install Memgraph, just follow the tutorial and play around with the predefined queries.',
            url: 'https://playground.memgraph.com',
            urlText: 'Visit Playground',
        },
        'MAGE': {
            description: 'MAGE (Memgraph Advanced Graph Extensions) is an open-source repository that contains all available query modules written by the team behind Memgraph and its users. You can find and contribute implementations of various algorithms in multiple programming languages, all runnable inside Memgraph.',
            url: 'https://docs.memgraph.com/mage',
            urlText: 'Get Started'
        }
    };

    const ecosystemMenu = Object.keys(ecosystems);

    const [selectedItem, setSelectedItem] = React.useState(ecosystemMenu[0]);

    return (
        <div className={styles.homeEcosystem}>
            <Container>
                <h2>The Memgraph Ecosystem</h2>
                <div className={styles.homeEcosystem__menu}>
                    {ecosystemMenu.map((item, i) => {
                        const itemClass = item === selectedItem ? styles.homeEcosystem__menu__selected : '';
                        return (
                        <div key={i} className={itemClass}
                             onClick={() => setSelectedItem(item)}>{item}</div>
                        );
                    })}
                </div>
                <div className={styles.homeEcosystem__menu__border}>&nbsp;</div>
            </Container>
            <div className={styles.homeEcosystem__content}>
                <Container>
                    <div className={styles.homeEcosystem__content__inner}>
                        <div>
                            <div>{ecosystems[selectedItem].description}</div>
                            <a className={styles.homeEcosystem__content__url} href={ecosystems[selectedItem].url}>{ecosystems[selectedItem].urlText} <i className={iconArrowRight}></i>
                            </a>
                        </div>
                        <div>
                            <img src={useBaseUrl('img/memgraph-image.svg')}/>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
}
