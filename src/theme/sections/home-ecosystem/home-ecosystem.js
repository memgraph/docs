import React from 'react';
import styles from './home-ecosystem.module.css';
import Container from "../../../components/container/container";
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function HomeEcosystem() {

    const iconArrowRight = "fa fa-arrow-right";
    const ecosystems = {
        'Memgraph': {
            description: 'The core of the Memgraph Ecosystem is a fast in-memory graph database written in C++ that can help you deliver real-time performance for both transactional and analytical graph workloads at scale.',
            url: useBaseUrl('/memgraph'),
            urlText: 'Get started',
        },
        'Lab': {
            description: 'Memgraph Lab is a visual user interface that connects your local Memgraph instance or Cloud account. You can use Lab to import, explore and visualize your data as well as execute and optimize Cypher queries.',
            url: 'https://memgraph.com/product/lab',
            urlText: 'Learn more',
        },
        'MAGE': {
            description: 'MAGE (Memgraph Advanced Graph Extensions) is an open-source repository that contains all available query modules written by the team behind Memgraph and its users. You can find and contribute implementations of various algorithms in multiple programming languages, all runnable inside Memgraph.',
            url: useBaseUrl('/mage'),
            urlText: 'Get started',
        },
        'GQLAlchemy': {
            description: 'GQLAlchemy is a fully open-source Python library that aims to be the go-to Object Graph Mapper (OGM) - a link between Graph Database objects and Python objects.',
            url: useBaseUrl('/gqlalchemy'),
            urlText: 'Learn more',
        }
    };

    const ecosystemMenu = Object.keys(ecosystems);

    const [selectedItem, setSelectedItem] = React.useState(ecosystemMenu[0]);

    return (
        <div className={styles.homeEcosystem}>
            <Container>
                <h2>The Memgraph ecosystem</h2>
                <div className={styles.homeEcosystem__menu}>
                    {ecosystemMenu.map((item, i) => {
                        const itemClass = item === selectedItem ? styles.homeEcosystem__menu__selected : '';
                        return (
                            <div key={i} className={itemClass}
                                onClick={() => setSelectedItem(item)}>{item}</div>
                        );
                    })}
                </div>
                {/* <div className={styles.homeEcosystem__menu__border}>&nbsp;</div> */}
            </Container>
            <div className={styles.homeEcosystem__content}>
                <Container>
                    <div className={styles.homeEcosystem__content__inner}>
                        <div>
                            <div className={styles.homeEcosystem__content__description}>{ecosystems[selectedItem].description}</div>
                            <a className={styles.homeEcosystem__content__url} href={ecosystems[selectedItem].url}>{ecosystems[selectedItem].urlText} &nbsp; <i className={iconArrowRight} style={{ color: "#FB6E00" }}></i>
                            </a>
                        </div>
                        <div>
                            <img src={useBaseUrl('img/memgraph-image.svg')} />
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
}
