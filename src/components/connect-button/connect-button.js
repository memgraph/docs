import React from "react";
import styles from "./connect-button.module.css";
import ThemedImage from "@theme/ThemedImage";
import useBaseUrl from "@docusaurus/useBaseUrl";

export default function ConnectButton(props) {
  const { title, url, img, imgActive, imgDark, imgDarkActive } = props;

  return (
    <a href={url} className={styles.connectButton} style={styles}>
      <ThemedImage
        alt={title}
        className={styles.connectButton__img}
        sources={{
          light: useBaseUrl(img),
          dark: useBaseUrl(imgDark),
        }}
      />
      <ThemedImage
        alt={title}
        className={styles.connectButton__imgActive}
        sources={{
          light: useBaseUrl(imgActive),
          dark: useBaseUrl(imgDarkActive),
        }}
      />
    </a>
  );
}
