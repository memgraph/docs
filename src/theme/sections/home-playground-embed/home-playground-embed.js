import React from "react";
import styles from "./home-playground-embed.module.css";
import Container from "../../../components/container/container";
import useBaseUrl from "@docusaurus/useBaseUrl";
import ThemedImage from "@theme/ThemedImage";

export default function HomePlaygroundEmbed() {
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

    return (
        <div className={styles.homePlaygroundEmbed}>
            <Container>
                <h2>Master Graph Algorithms in Minutes</h2>
                <div className={styles.homePlaygroundEmbed__subtitle}>
                    <p>In Memgraph Playground you can explore data sets, run example queries, check out the integrated graph visualizations - and get a jump start on your data driven project.</p>
                </div>
                <iframe src="https://playground.memgraph.com/share/cd825a1b-7635-4360-a966-3ea2e21f8d07/embed" width="100%" height="500rem"></iframe>
            </Container>
        </div>
    );
}
