import React from "react";
import scss from "./Home.module.scss";

export const Home = () => {
  return (
    <>
      <div className={scss.page_wrapper}>
        <div className={scss.container}>
          <div className={scss.box}>
            <div className={scss.box_title}>
              <h3>
                Hello, I'm Sherbolot, a Full-Stack developer with 3 years of
                experience.
              </h3>
            </div>
          </div>
          <div className={scss.box}></div>
        </div>
      </div>
    </>
  );
};
