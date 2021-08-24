import React from 'react';
import styles from './home-learn-with-us.module.css';
import Container from "../../../components/container/container";
import useBaseUrl from '@docusaurus/useBaseUrl';
import CalloutImgBox from "../../../components/callout-img-box/callout-img-box";

export default function HomeLearnWithUs() {
    const items = [{
        title: 'Playground',
        description: 'No downloads, installations, or registration required. Just choose a tutorial and try out Memgraph in your browser.',
        url: 'https://playground.memgraph.com/',
        img: useBaseUrl('img/tutorial-playground.svg'),
    },
        {
            title: 'Tutorials',
            description: 'Select one of the many available tutorials and give it a go locally.',
            url: useBaseUrl('/memgraph/tutorials'),
            img: useBaseUrl('img/tutorials-tut-img.svg'),
        },
        {
            title: 'Code with Buda',
            description: 'Watch as Memgraph’s CTO demonstrates how to use some of the most complex and powerful features.',
            url: 'https://www.youtube.com/playlist?list=PL7Eotag2rRhaYDrSNcltkbtj0S3yC7h-u',
            img: useBaseUrl('img/codewbuda-img.svg'),
        }
    ];


    return (
        <div className={styles.homeLearnWithUs}>
            <div className={styles.homeLearnWithUs__bg}>
                <img src={useBaseUrl('img/PatternBG.svg')}/>
            </div>
            <Container>
                <h2>Learn With Us</h2>
                <div className={styles.homeLearnWithUs__subtitle}>
                    <p>Get to know Memgraph by following one of our tutorials. We have prepared a lot of hands-on
                        examples in the form of tutorials and live streams.</p>
                </div>
                <div className={styles.homeLearnWithUs__items}>
                    <div>&nbsp;</div>
                    {items.map((item, i) => {
                        return (
                            <div key={i}>
                                <CalloutImgBox title={item.title} subtitle={item.description} url={item.url}
                                               img={item.img}/>
                            </div>
                        );
                    })
                    }
                </div>
            </Container>
        </div>
    );
}
