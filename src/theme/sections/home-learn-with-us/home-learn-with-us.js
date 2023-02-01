import React from 'react';
import styles from './home-learn-with-us.module.css';
import Container from "../../../components/container/container";
import useBaseUrl from '@docusaurus/useBaseUrl';
import CalloutImgBox from "../../../components/callout-img-box/callout-img-box";

export default function HomeLearnWithUs() {
    const items = [
        {
            title: 'Email Courses',
            description: 'Sign up for the free email courses and learn about graph-related topics such as Cypher and data modeling.',
            url: 'https://memgraph.com/email-courses',
            img: useBaseUrl('img/cypher-email-course.svg'),
        },
        {
            title: 'Playground',
            description: 'Explore datasets to learn Cypher query langauge and how to analyze data with graph algorithms.',
            url: 'https://playground.memgraph.com/',
            img: useBaseUrl('img/tutorial-playground.svg'),
        },
        {
            title: 'Tutorials',
            description: 'Select one of the many available tutorials and examples available in our documentation and give it a go locally.',
            url: useBaseUrl('/memgraph/tutorials'),
            img: useBaseUrl('img/tutorials-tut-img.svg'),
        },
        {
            title: 'Cypher Manual',
            description: 'If you get stuck with writing Cypher queries, the manual will guide you to get the insights you require.',
            url: useBaseUrl('/cypher-manual'),
            img: useBaseUrl('img/cypher-manual.svg'),
        },
        {
            title: 'Webinars & On Demand Courses',
            description: 'Learn more about graph databases in general or deep dive into one of the use case with Memgraph webinars.',
            url: 'https://memgraph.com/webinars',
            img: useBaseUrl('img/webinar.svg'),
        },
        {
            title: 'Code with Buda',
            description: 'Watch as Memgraph’s CTO demonstrates how to use some of the most complex and powerful features.',
            url: 'https://www.youtube.com/playlist?list=PL7Eotag2rRhaYDrSNcltkbtj0S3yC7h-u',
            img: useBaseUrl('img/code-with-buda.svg'),
        }
    ];


    return (
        <div className={styles.homeLearnWithUs}>
            <Container>
                <h2>Learn With Us</h2>
                <div className={styles.homeLearnWithUs__subtitle}>
                    <p>Get to know Memgraph by following one of our tutorials. We have prepared a lot of hands-on
                        examples in the form of tutorials and live streams.</p>
                </div>
                <div className={styles.homeLearnWithUs__items}>
                    {/* <div>&nbsp;</div> */}
                    {items.map((item, i) => {
                        return (
                            <div key={i}>
                                <CalloutImgBox title={item.title} subtitle={item.description} url={item.url}
                                    img={item.img} />
                            </div>
                        );
                    })
                    }
                </div>
            </Container>
        </div>
    );
}
