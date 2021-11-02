import React from "react";
import Blocks from "./Blocks";
import styles from "./leftContainer.module.css";
const LeftContainer = () => {
  return (
    <div className={styles.left__container}>
      <Blocks />
    </div>
  );
};

export default LeftContainer;
