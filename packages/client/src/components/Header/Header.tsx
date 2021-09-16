import React from "react";

import styles from "./Header.module.scss";
import app_styles from "../../App/App.module.scss";

type HeaderProps = {
  shutDownServers: () => void;
  restartServers: () => void;
  addServer: () => void;
};

const Header: React.FC<HeaderProps> = ({shutDownServers, restartServers, addServer}) => {
  return (
    <header className={`${styles.header_container} ${app_styles.container}`}>
      <div className={styles.global_action_container}>
        <button className={styles.shut_down_servers} onClick={() => shutDownServers()}>
          ⏸Shut Down all Servers
        </button>
        <button className={styles.restart_servers} onClick={() => restartServers()}>
          ⏯ Restart all Servers
        </button>
      </div>
      <div>
        <button className={styles.restart_servers} onClick={() => addServer()}>
          (～￣▽￣)～ Add Server
        </button>
      </div>
    </header>
  );
};

export default Header;
