import React from "react";
import styles from "./createBlock.module.css";
import illustration from "../../../images/illustration.svg";
const CreateBlock = () => {
  return (
    <div className={styles.create__block}>
      <img src={illustration} alt="illustration" />
      <h4>Add your first block</h4>
      <p>Start creating your page by adding blocks.</p>
    </div>
  );
};

export default CreateBlock;
