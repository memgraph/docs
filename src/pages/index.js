import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import {translate} from '@docusaurus/Translate';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import ImageSwitcher from '../../src/components/ImageSwitcher.js';

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig: {customFields = {}, tagline} = {}} = context;
  return (
    <Layout
      permalink="/"
      title={tagline}
      description={customFields.description}>
      <main>
        <div className={styles.hero}>
          <div className={styles.heroInner}>
            <h1 className={styles.heroProjectTagline}>
              <img
                alt={{message: 'Memgraph'}}
                className={styles.heroLogo}
                src={useBaseUrl('img/Memgraph-logo-white-rgb.png')}
              />
              <span
                className={styles.heroTitleTextHtml}
                dangerouslySetInnerHTML={{
                  __html: translate({
                    id: 'homepage.hero.title',
                    message:
                    "The world's most <b>powerful</b> graph <b>database</b>",
                    description:
                      'Welcome to the Memgraph Docs homepage.',
                  }),
                }}
              />
            </h1>
            <div className={styles.indexCtas}>
              <Link
                className={styles.indexCtasGetStartedButton}
                to={useBaseUrl('/memgraph/overview')}>
                Get Started
              </Link>
              {/*
              <Link
                className={styles.indexCtaTryNowButton}
                to="https://playground.memgraph.com">
                Memgraph Playground
              </Link>
              */}
            </div>
          </div>
        </div>
        <div className={clsx(styles.announcement, styles.announcementDark)}>
          <div className={styles.announcementInner}>
            Don't want to install anything? Check out {' '}
            <Link to="https://playground.memgraph.com">
              Memgraph Playground
            </Link>
            !
          </div>
        </div>
        <div className={styles.section}>
          <div className="container text--center margin-bottom--xl">
            <div className="row">
              <div className="col">
              <div className={styles.rcorners}>
              <a href={useBaseUrl('/memgraph-lab')}>
              {<ImageSwitcher 
                className={styles.featureImage}
                alt="Memgraph Lab"
                  lightImageSrc={useBaseUrl('img/icons-white/conconnector.png')}
                  darkImageSrc={useBaseUrl('img/icons/conconnector.png')}/>}
                <h2 className={clsx(styles.featureHeading)}>
                  Memgraph Lab
                </h2>
              </a>
                <p className="padding-horiz--md">
                Memgraph Lab is a lightweight and intuitive visual user interface, 
                designed to help you with every stage of your graph development 
                and learning process.
                </p>
              </div>
              </div>
              <div className="col">
              <div className={styles.rcorners}>
              <a href={useBaseUrl('/cypher-manual/')}>
              {<ImageSwitcher 
                className={styles.featureImage}
                alt="Cypher manual"
                  lightImageSrc={useBaseUrl('img/icons-white/book.png')}
                  darkImageSrc={useBaseUrl('img/icons/book.png')}/>}
                <h2 className={clsx(styles.featureHeading)}>
                Cypher manual
                </h2>
                </a>
                <p className="padding-horiz--md">
                Cypher is the most widely adopted, fully-specified, and open query language 
                for property graph databases. It provides an intuitive way to work with property graphs.
                </p>
              </div>
              </div>
              <div className="col">
              <div className={styles.rcorners}>
              <a href={useBaseUrl('/memgraph/database-functionalities')}>
              <ImageSwitcher 
                className={styles.featureImage}
                alt="Database functionalities"
                  lightImageSrc={useBaseUrl('img/icons-white/cogs.png')}
                  darkImageSrc={useBaseUrl('img/icons/cogs.png')}/>
                <h2 className={clsx(styles.featureHeading)}>
                  Database functionalities
                </h2>
                </a>
                <p className="padding-horiz--md">
                Take a look at all the functionalities that Memgraph DB has to offer.
                </p>
              </div>
              </div>
            </div>
          </div>
          <div className="container text--center">
            <div className="row">
              <div className="col col--4 col--offset-2">
              <div className={styles.rcorners}>
              <a href={useBaseUrl('/memgraph/tutorials/tutorials')}>
              <ImageSwitcher 
                className={styles.featureImage}
                alt="Tutorials"
                  lightImageSrc={useBaseUrl('img/icons-white/idea-alt.png')}
                  darkImageSrc={useBaseUrl('img/icons/idea-alt.png')}/>
                <h2 className={clsx(styles.featureHeading)}>
                Tutorials
                </h2>
                </a>
                <p className="padding-horiz--md">
                  
                Our tutorials provide the user with a reasonably-sized 
                dataset and some example queries that showcase how to use Memgraph 
                on that particular dataset. 
                  
                </p>
              </div>
              </div>
              <div className="col col--4">
              <div className={styles.rcorners}>
              <a href="https://discourse.memgraph.com">
              <ImageSwitcher 
                className={styles.featureImage}
                alt="Developer Forum"
                  lightImageSrc={useBaseUrl('img/icons-white/blog.png')}
                  darkImageSrc={useBaseUrl('img/icons/blog.png')}/>
                <h2 className={clsx(styles.featureHeading)}>
                Developer Forum
                </h2>
                </a>
                <p className="padding-horiz--md">
                  
                    You can always leave a post on our developer forum. 
                    We encourage you to leave feedback and submit ideas so we can make our product even better for everyone.
                  
                </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default Home;
