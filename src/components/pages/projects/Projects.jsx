import React from "react";
import scss from "./Projects.module.scss";

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
                <img
                  src="https://unblast.com/wp-content/uploads/2020/05/Website-Mockup.jpg "
                  alt="Project"
                />
              </div>
            </div>

            <div className={scss.litle_boxes}>
              <div className={scss.box}>
                <div className={scss.box_image}>
                  <img
                    src="https://assets.wesayhowhigh.com/media/Blog/A%20Mobile%20First%20Approach/limitless-final61.gif"
                    alt="Project"
                  />
                </div>
              </div>

              <div className={scss.box}>
                <div className={scss.box_image}>
                  <img
                    src="https://assets.justinmind.com/wp-content/uploads/2020/08/travel-ecommerce-app-mockup.png"
                    alt="Project"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
