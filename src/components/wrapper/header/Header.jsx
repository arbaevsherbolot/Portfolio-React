import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Resume from "./header_components/resume/Resume";
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
          <div className={styles.links}>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? styles.active_link : styles.link
              }>
              Home
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? styles.active_link : styles.link
              }>
              Contact
            </NavLink>

            <a
              className={styles.link}
              href="https://github.com/arbaevsherbolot"
              target="_blank">
              Github
            </a>
          </div>
          <Resume />
        </div>

        <div className={styles.burger_menu}>
          <div className={styles.menu_icon}>
            <input
              className={
                isOpen
                  ? `${styles.button} ${styles.active}`
                  : `${styles.button}`
              }
              type="button"
              onClick={() => setIsOpen(!isOpen)}
            />
            <div>
              <span></span>
              <span></span>
            </div>
          </div>

          <div
            className={
              isOpen ? `${styles.menu} ${styles.active}` : `${styles.menu}`
            }>
            <div className={styles.links}>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? styles.active_link : styles.link
                }
                onClick={() => setIsOpen(!isOpen)}>
                Home
              </NavLink>

              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? styles.active_link : styles.link
                }
                onClick={() => setIsOpen(!isOpen)}>
                Contact
              </NavLink>

              <a
                className={styles.link}
                href="https://github.com/arbaevsherbolot"
                target="_blank">
                Github
              </a>

              <Resume />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
