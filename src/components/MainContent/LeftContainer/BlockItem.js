import React from "react";
import styles from "./blockItem.module.css";
const BlockItem = ({ image, text, color }) => {
  return (
    <div className={styles.block__item}>
      <div
        className={styles["block__item-image"]}
        style={{ backgroundColor: color }}
      >
        {image}
      </div>
      <p>{text}</p>
    </div>
  );
};

export default BlockItem;
