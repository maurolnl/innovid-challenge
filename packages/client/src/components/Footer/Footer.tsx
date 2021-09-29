import React from "react";

import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.footer_text}>
        Made with ♡ by&nbsp;{""}
        <a
          className={styles.footer_link}
          href="https://maurolquiroga.site/"
          rel="noopener noreferrer"
          target="_blank"
        >
          MauroLNL
        </a>
      </p>
    </footer>
  );
};

export default Footer;
