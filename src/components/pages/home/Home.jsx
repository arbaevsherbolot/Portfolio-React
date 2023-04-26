import React from "react";
import TypeWriterEffect from "react-typewriter-effect";
import scss from "./Home.module.scss";

export const Home = () => {
  return (
    <>
      <div className={scss.page_wrapper}>
        <div className={scss.container}>
          <div className={scss.box}>
            <div className={scss.box_title}>
              <h3>
                Hey I'm
                <span>
                  
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
