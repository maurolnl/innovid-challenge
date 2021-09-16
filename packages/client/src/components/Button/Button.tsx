import React from "react";

import styles from "./Button.module.scss";

type ButtonProps = {
  status: boolean;
  setStatus: () => void;
};

const Button: React.FC<ButtonProps> = ({status, setStatus}) => {
  const handleToggleStatus = () => {
    setStatus();
  };

  return (
    <>
      {status ? (
        <a
          className={`status-bar-field ${styles.toggle_button}`}
          onClick={() => handleToggleStatus()}
        >
          shut down
        </a>
      ) : (
        <a
          className={`status-bar-field ${styles.toggle_button}`}
          onClick={() => handleToggleStatus()}
        >
          turn on
        </a>
      )}
    </>
  );
};

export default Button;
