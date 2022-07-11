import React from "react";
import styles from "./home-get-involved.module.css";
import Container from "../../../components/container/container";
import useBaseUrl from "@docusaurus/useBaseUrl";
import ThemedImage from "@theme/ThemedImage";

export default function HomeGetInvolved() {
  const items = [
    {
      title: "GitHub",
      urlText: "Explore",
      url: "https://github.com/memgraph",
      img: useBaseUrl("img/github.svg"),
      imgDark: useBaseUrl("img/github-dark-mode.svg"),
    },
    {
      title: "Discord",
      urlText: "Join",
      url: "https://discord.gg/memgraph",
      img: useBaseUrl("img/discord.svg"),
      imgDark: useBaseUrl("img/discord-dark-mode.svg"),
    },
    {
      title: "Stack Overflow",
      urlText: "Ask Away",
      url: "https://stackoverflow.com/questions/tagged/memgraphdb",
      img: useBaseUrl("img/stack-overflow.svg"),
      imgDark: useBaseUrl("img/stack-overflow-dark-mode.svg"),
    },
    {
      title: "Developer Forum",
      urlText: "Join",
      url: "https://discourse.memgraph.com/",
      img: useBaseUrl("img/dev-forum.svg"),
      imgDark: useBaseUrl("img/dev-forum-dark-mode.svg"),
    },
  ];

  const iconArrowRight = "fa fa-arrow-right";

  return (
    <Container>
      <div className={styles.homeGetInvolved}>
        <div className={styles.homeGetInvolved__inner}>
          <div className={styles.homeGetInvolved__items}>
            {items.map((item, i) => {
              return (
                <div key={i}>
                  <div className={styles.homeGetInvolved__items__img}>
                    <ThemedImage
                      alt={item.title}
                      sources={{
                        light: useBaseUrl(item.img),
                        dark: useBaseUrl(item.imgDark),
                      }}
                    />
                  </div>
                  <div>
                    <div>{item.title}</div>
                    <a className={styles.linkCommunity} href={item.url}><span>{item.urlText}</span> <i className={iconArrowRight}>&nbsp;</i></a>
                  </div>
                </div>
              );
            })}
          </div>
          <div>
            <h2>Get Involved</h2>
            <p>
              We are always happy to hear from our community and help with any
              problems or obstacles. Don’t hesitate to reach out to us with
              questions and comments using one of the available channels.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}
