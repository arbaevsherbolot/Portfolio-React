import React from "react";
import { Typewriter } from "react-simple-typewriter";
import aboutImage from "../../../assets/sherbolot.jpg";
import projectImage from "../../../assets/Image-Project.png";
import scss from "./Home.module.scss";

export const Home = () => {
  return (
    <>
      <div className={scss.page_wrapper}>
        <div className={scss.container}>
          <div className={scss.home_content}>
            <div className={scss.home_image}></div>

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

            <div className={scss.box}>
              <div className={scss.box_image}>
                <img src={projectImage} alt="Project" />
              </div>

              <div className={scss.box_title}>
                <h3>Project</h3>
                <p>
                  I develop the user interface, Web page development, I create
                  UX element interactions, Design and mockups of products for
                  companies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
