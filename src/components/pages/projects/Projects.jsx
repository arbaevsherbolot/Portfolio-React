import React from "react";
import scss from "./Projects.module.scss";
import projectImage from "../../../assets/Image-Project.png";
import projectImageLitle1 from "../../../assets/Image-Project.png";
import projectImageLitle2 from "../../../assets/Image-Project.png";

export const Projects = () => {
  return (
    <div>
      <div className={scss.page_wrapper}>
        <div className={scss.page_content}>
          <div className={scss.box_container}>
            <div className={scss.box}>
              <div className={scss.box_title}>
                <h3>Project</h3>
                <p>
                  I <span>develop</span> the user interface,{" "}
                  <span>Web page development</span>, I create
                  <span> UX element</span> interactions, Design and mockups of{" "}
                  <span>products</span> for companies.
                </p>
              </div>

              <div className={scss.box_image}>
                <img src={projectImage} alt="Project" />
              </div>
            </div>

            <div className={scss.litle_boxes}>
              <div className={scss.box}>
                <div className={scss.box_image}>
                  <img src={projectImageLitle1} alt="Project" />
                </div>
              </div>

              <div className={scss.box}>
                <div className={scss.box_image}>
                  <img src={projectImageLitle2} alt="Project" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
