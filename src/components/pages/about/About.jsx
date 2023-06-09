import React from 'react';
import aboutImage from "../../../assets/sherbolot.png";
import aboutElementImage from "../../../assets/about-element.png";
import aboutElementIcon from "../../../assets/svg/IOS.svg";
import scss from "./About.module.scss";

export const About = () => {
  return (
    <>
      <div className={scss.page_wrapper}>
        <div className={scss.page_content}>
          <div className={scss.box_container}>
            <div className={scss.box}>
              <div className={scss.box_circle}>
                <div className={scss.box_circle__image}>
                  <img src={aboutElementImage} alt="Icon" />
                </div>

                <img
                  className={scss.ios_man}
                  src={aboutElementIcon}
                  alt="Icon"
                />
              </div>

              <div className={scss.box_image}>
                <img src={aboutImage} alt="Sherbolot Arbaev" />
              </div>

              <div className={scss.box_title}>
                <h3>About Me</h3>
                <p>
                  My name is <span>Sherbolot Arbaev</span>, I am a student
                  <span> Full-Stack software engineer</span>. Develop and
                  maintained full stack web applications using
                  <span> JavaScript, TypeScript, Node.js, React, Next JS. </span>
                  Collaborated with cross-functional teams including designers,
                  product managers, and QA engineers to deliver high-quality
                  software solutions. Designed and implemented
                  <span> RESTful APIs </span> for seamless integration between
                  <span> front-end</span> and <span>back-end</span> systems.
                  Implemented responsive user interfaces using modern
                  <span> front-end libraries</span> and <span>frameworks</span>.
                  Conducted code reviews and provided constructive feedback to
                  peers to maintain code quality and best practices.
                  Participated in agile development processes, including sprint
                  planning, daily stand-ups, and retrospective meetings.
                  Assisted in troubleshooting and resolving production issues in
                  a timely manner. <span>Mentored and provided </span>
                  guidance to junior developers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
