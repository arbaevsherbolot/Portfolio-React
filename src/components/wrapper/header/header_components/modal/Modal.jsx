import React, { useState } from "react";
import resume_png from "../../../../../assets/resume.png";
import styles from "./Modal.module.scss";

export const Modal = ({ open, close }) => {
  if (!open) {
    return null;
  }

  return (
    <>
      <div className={styles.modal_window}>
        <div className={styles.modal_container}>
          <img
            className={styles.modal_img}
            src={resume_png}
            alt="Sherbolot Arbaev CV"
          />

          <div onClick={close} className={styles.close_btn}></div>
        </div>
      </div>
    </>
  );
};
