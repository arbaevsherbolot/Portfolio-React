import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Resume } from "./header_components/resume/Resume";
import logo from "../../../assets/logo.webp";
import styles from "./Header.module.scss";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className={styles.navbar}>
        <Link to="/">
          <img className={styles.logo} src={logo} alt="logo" />
        </Link>
        <div className={styles.nav_right}>
          <div className={isOpen ? styles.links_open : styles.links}>
            <NavLink
              onClick={() => setIsOpen(!isOpen)}
              to="/"
              className={({ isActive }) =>
                isActive ? styles.active_link : styles.link
              }>
              Home
            </NavLink>

            <NavLink
              onClick={() => setIsOpen(!isOpen)}
              to="/about"
              className={({ isActive }) =>
                isActive ? styles.active_link : styles.link
              }>
              About
            </NavLink>

            <NavLink
              onClick={() => setIsOpen(!isOpen)}
              to="/contact"
              className={({ isActive }) =>
                isActive ? styles.active_link : styles.link
              }>
              Contact
            </NavLink>

            <a
              onClick={() => setIsOpen(!isOpen)}
              className={styles.link}
              href="https://github.com/Sherbo1ot"
              target="_blank">
              Github
            </a>
          </div>
          <Resume />
        </div>

        <div className={styles.burger_menu} onClick={() => setIsOpen(!isOpen)}>
          <span className={isOpen ? styles.open : ""} />
          <span className={isOpen ? styles.open : ""} />
          <span className={isOpen ? styles.open : ""} />
        </div>
      </div>
    </>
  );
};
