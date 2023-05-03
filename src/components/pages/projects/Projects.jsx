import React from "react";
import scss from "./Projects.module.scss";
import projectImage from "../../../assets/Image-Project.png";

export const Projects = () => {
  return (
    <div>
      <div className={scss.page_wrapper}>
        <div className={scss.page_content}>
          <div className={scss.box_container}>
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
    </div>
  );
};
