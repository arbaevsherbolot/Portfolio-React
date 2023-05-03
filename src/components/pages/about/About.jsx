import React from "react";
import aboutImage from "../../../assets/sherbolot.jpg";
import scss from "./About.module.scss";

export const About = () => {
  return (
    <>
      <div className={scss.page_wrapper}>
        <div className={scss.page_content}>
          <div className={scss.box_container}>
            <div className={scss.box}>
              <div className={scss.box_image}>
                <img src={aboutImage} alt="Sherbolot Arbaev" />
              </div>

              <div className={scss.box_title}>
                <h3>About Me</h3>
                <p>
                  My name is Sherbolot Arbaev, I am a student Full-Stack
                  software engineer. Develop and maintained full stack web
                  applications using Node.js, React, SCSS, MySQL, and
                  TypeScript. Collaborated with cross-functional teams including
                  designers, product managers, and QA engineers to deliver
                  high-quality software solutions. Designed and implemented
                  RESTful APIs for seamless integration between front-end and
                  back-end systems. Implemented responsive user interfaces using
                  modern front-end libraries and frameworks. Conducted code
                  reviews and provided constructive feedback to peers to
                  maintain code quality and best practices. Participated in
                  agile development processes, including sprint planning, daily
                  stand-ups, and retrospective meetings. Assisted in
                  troubleshooting and resolving production issues in a timely
                  manner. Mentored and provided guidance to junior developers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
