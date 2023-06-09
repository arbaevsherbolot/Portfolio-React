import React from "react";
import scss from "./PreLoader.module.scss";
import load_svg from "../../assets/svg/loader.svg";

export const PreLoader = () => {
  return (
    <>
      <div className={scss.container}>
        <div className={scss.load_title}>loading...</div>
        {/* 
        <img src={load_svg} alt="Loading" /> */}
      </div>
    </>
  );
};
