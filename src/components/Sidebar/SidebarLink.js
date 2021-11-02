import React from "react";
import styles from "./sidebarlink.module.css";
const SidebarLink = ({ image, text, name }) => {
  return (
    <div className={styles.sidebar__link}>
      {image}
      {text && <p>{text}</p>}
    </div>
  );
};

export default SidebarLink;
