import React from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <>
      <div className={styles.footer_container}>
        <h3 className={styles.footer_title}>
          <Link style={{ color: "#fff" }} to="/admin">
            ©
          </Link> Sherbolot Arbaev 2023
        </h3>
      </div>
    </>
  );
};
