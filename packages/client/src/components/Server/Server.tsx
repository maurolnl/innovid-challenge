import * as React from "react";

import {getServerLoad} from "../../api/getServerLoad";
import PcOff from "../../assets/pc-off.png";
import PcOn from "../../assets/pc-on.gif";
import styles from "../../App/App.module.scss";
import Button from "../Button/Button";

type ServerProps = {
  id: number;
  isActive: boolean;
  setIsActive: () => void;
  deleteServer: () => void;
};

const Server: React.FC<ServerProps> = ({id, isActive, setIsActive, deleteServer}) => {
  const [serverLoad, setServerLoad] = React.useState<number>(0);
  const [error, setError] = React.useState<boolean>(false);
  const intervalRef = React.useRef<number | null>(null);

  React.useEffect(() => {
    if (isActive) {
      setServerLoadState();
      intervalRef.current = setInterval(() => {
        setServerLoadState();
      }, 5000);
    } else {
      clearInterval(intervalRef.current);
      setServerLoad(0);
    }
  }, [isActive]);

  const getServerRiskClass = () => {
    if (serverLoad > 85) return styles.high_risk_load;
    else if (serverLoad < 30) return styles.low_risk_load;

    return styles.medium_risk_load;
  };

  const setServerLoadState = async () => {
    const serverLoad = await getServerLoad(id);

    setServerLoad(serverLoad.load);
  };

  return (
    <div className="window" style={{width: 320, margin: "15px 0"}}>
      <div className="title-bar">
        <div className="title-bar-text">Server #{id}</div>
        <div className="title-bar-controls">
          <button aria-label="Minimize" />
          <button aria-label="Maximize" />
          <button aria-label="Close" onClick={() => deleteServer()} />
        </div>
      </div>
      <div className="window-body">
        {isActive ? (
          <img alt="Pc image on" className={styles.img} src={PcOn} />
        ) : (
          <img alt="Pc image off" className={styles.img} src={PcOff} />
        )}
      </div>
      <div className="status-bar">
        <p className="status-bar-field">
          Status:{" "}
          {isActive ? (
            <span className={styles.server_on}>ON</span>
          ) : (
            <span className={styles.server_off}>OFF</span>
          )}
        </p>
        <Button setStatus={() => setIsActive()} status={isActive} />
        <p className={`status-bar-field ${getServerRiskClass()}`}>CPU Ussage: {serverLoad}%</p>
      </div>
    </div>
  );
};

export default Server;
