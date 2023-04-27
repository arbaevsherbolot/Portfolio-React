import React from "react";
import Typical from "react-typical";
import scss from "./Home.module.scss";

export const Home = () => {
  return (
    <>
      <div className={scss.page_wrapper}>
        <div className={scss.container}>
          <div className={scss.box}>
            <div className={scss.box_title}>
              <h3>
                Hey I'm <br />
                <span className={scss.type}>
                  <Typical
                    loop={Infinity}
                    wrapper="b"
                    steps={[
                      "Sherbolot Arbaev 👋🏻",
                      1000,
                      "Full-Stack developer 🧑🏻‍💻",
                      1000,
                      "Software Engineer 😎",
                      1000,
                      "Graphic designer 🧑🏻‍🎨",
                      1000,
                      "UI-UX designer 🧑🏻‍🎨",
                      1000,
                      "Student 👨🏻‍🎓",
                      1000,
                    ]}
                  />
                </span>
              </h3>
              <p>
                I develop the user interface, Web page development, I create UX
                element interactions, Design and mockups of products for
                companies.
              </p>
            </div>
          </div>
          <div className={scss.box}></div>
        </div>
      </div>
    </>
  );
};
