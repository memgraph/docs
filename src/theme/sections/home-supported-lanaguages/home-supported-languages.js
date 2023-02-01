import React from "react";
import styles from "./home-supported-languages.module.css";
import Container from "../../../components/container/container";
import ThemedImage from "@theme/ThemedImage";

export default function HomeSupportedLanguages() {
    return (
        <div className={styles.homeSupportedLanguages}>
            <div className={styles.homeSupportedLanguages__content}>
                <Container>
                    <h2>Supported Languages</h2>
                    <ThemedImage
                        alt={'logotypes'}
                        sources={{
                            light: require('/img/logotypes.png').default,
                            dark: require('/img/logotypes-dark-mode.png').default,
                        }}
                    />
                    {/* <img src={require('/img/logotypes-dark-mode.png').default}></img> */}
                </Container>
            </div>
        </div >
    );
}
