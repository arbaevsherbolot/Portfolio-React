import React from "react";
import { Typewriter } from "react-simple-typewriter";
import scss from "./Home.module.scss";

export const Home = () => {
  return (
    <>
      <div className={scss.page_wrapper}>
        <div className={scss.container}>
          <div className={scss.home_content}>
            <div className={scss.home_title}>
              <h3>
                Hi, I'm Sherbolot
                <br />I
                <span className={scss.type}>
                  <Typewriter
                    words={[" develop", " design", " create"]}
                    loop={true}
                    cursor
                    cursorStyle="|"
                    typeSpeed={80}
                    deleteSpeed={10}
                    delaySpeed={1000}
                  />
                </span>
                user-friendly products.
              </h3>
            </div>
          </div>
          <div className={scss.box_container}>
            <div className={scss.box}>
              <div className={scss.box_title}>
                <p>
                  I develop the user interface, Web page development, I create
                  UX element interactions, Design and mockups of products for
                  companies.
                </p>
              </div>
            </div>
            <div className={scss.box}></div>
          </div>
        </div>
      </div>
    </>
  );
};
