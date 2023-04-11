import React, { useState } from "react";
import { Modal } from "../modal/Modal";
import styles from "./Projects.module.scss";

export const Projects = () => {
  const [modalActive, setModalActive] = useState(true);
  return (
    <>
      <div className={styles.wrapper}>
        <button onClick={() => {
          setModalActive(true)
          console.log("Clicked modal active")
        }}>Modal</button>

        <Modal active={modalActive} setActive={setModalActive} />
      </div>
    </>
  );
};
