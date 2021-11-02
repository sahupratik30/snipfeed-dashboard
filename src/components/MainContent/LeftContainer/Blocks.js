import React, { useState } from "react";
import { Fragment } from "react";
import styles from "./blocks.module.css";
import profile from "../../../images/profile.svg";
import CreateBlock from "./CreateBlock";
import addBlocks from "../../../utils/add-block-item";
import monitizableBlocks from "../../../utils/monitizable-block-item";
import BlockItem from "./BlockItem";
const Blocks = () => {
  const [show, setShow] = useState(true);
  const toggleBlock = () => {
    setShow(!show);
  };
  return (
    <Fragment>
      <div className={styles.blocks}>
        <div className={styles.blocks__addblock}>
          <p>Add Block</p>
          <div className={styles.blocks__addblocks}>
            {addBlocks.map((block) => {
              return (
                <BlockItem
                  image={block.image}
                  text={block.text}
                  color={block.color}
                />
              );
            })}
          </div>
        </div>
        {show && (
          <div className={styles.blocks__monetizableblock}>
            <p>Monetizable Blocks</p>
            <div className={styles.blocks__monitizaleblocks}>
              {monitizableBlocks.map((block) => {
                return (
                  <BlockItem
                    image={block.image}
                    text={block.text}
                    color={block.color}
                  />
                );
              })}
            </div>
          </div>
        )}
        <button
          type="button"
          className={styles.blocks__button}
          onClick={toggleBlock}
        >
          <i className={show ? "fas fa-chevron-up" : "fas fa-chevron-down"}></i>
        </button>
      </div>
      <div className={styles.blocks__biodetail}>
        <div className={styles["blocks__biodetail-div"]}>
          <div className={styles["blocks__biodetail-page-header"]}>
            <div>Page Header</div>
          </div>
          <div className={styles["blocks__biodetail-bio"]}>
            <div className={styles["blocks__biodetail-profile"]}>
              <img src={profile} alt="profile" />
            </div>
            <div className={styles["blocks__biodetail-text"]}>
              <h1>Add Your Bio</h1>
              <p>Profile Pic, Name and Bio</p>
            </div>
          </div>
        </div>
      </div>
      <CreateBlock />
    </Fragment>
  );
};

export default Blocks;
