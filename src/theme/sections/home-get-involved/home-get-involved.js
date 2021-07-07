import React from 'react';
import styles from './home-get-involved.module.css';
import Container from "../../../components/container/container";
import useBaseUrl from '@docusaurus/useBaseUrl';
import LinkRightArrow from "../../../components/link-right-arrow/link-right-arrow";
import ImageSwitcher from "../../../components/ImageSwitcher";

export default function HomeGetInvolved() {

    const items = [
        {
            title: 'Developer Forum',
            urlText: 'Join',
            url: 'https://discourse.memgraph.com/',
            img: useBaseUrl('img/dev-forum.svg'),
            imgDark: useBaseUrl('img/dev-forum-dark-mode.svg'),
        },
        {
            title: 'Stack Overflow',
            urlText: 'Ask Away',
            url: 'https://stackoverflow.com/questions/tagged/memgraphdb',
            img: useBaseUrl('img/stack-overflow.svg'),
            imgDark: useBaseUrl('img/stack-overflow-dark-mode.svg'),
        },
        {
            title: 'GitHub',
            urlText: 'Explore',
            url: 'https://github.com/memgraph',
            img: useBaseUrl('img/github.svg'),
            imgDark: useBaseUrl('img/github-dark-mode.svg'),
        }
    ];


    return (
        <Container>
            <div className={styles.homeGetInvolved}>
                <div className={styles.homeGetInvolved__inner}>
                    <div className={styles.homeGetInvolved__items}>
                        {items.map((item, i) => {
                            return (
                                <div key={i}>
                                    <div className={styles.homeGetInvolved__items__img}>
                                        <ImageSwitcher lightImageSrc={item.img} darkImageSrc={item.imgDark} alt={item.title} />
                                    </div>
                                    <div>
                                        <div>{item.title}</div>
                                        <a href={item.url}>{item.urlText}</a>
                                    </div>
                                </div>
                            );
                        })
                        }
                    </div>
                    <div>
                        <h2>Get Involved</h2>
                        <p>We are always happy to hear from our community and help with any problems or obstacles. Don’t
                            hesitate to reach out to us with questions and comments using one of the available
                            channels.</p>
                    </div>
                </div>
            </div>
        </Container>
    );
}
