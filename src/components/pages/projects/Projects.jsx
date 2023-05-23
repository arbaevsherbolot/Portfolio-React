import link_icon from "../../../assets/svg/link_icon.svg";
import github_icon from "../../../assets/svg/github_icon.svg";
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
                  src="https://seo-x.ru/images/sayt3d2-removebg-preview%20(1).png"
                  alt="Project"
                />
              </div>

              <div className={scss.box_bottom}>
                <div className={scss.icons}>
                  <a href="https://next-dentist911.vercel.app/" target="_blank">
                    <div className={scss.icon}>
                      <img
                        className={scss.icon_img}
                        src={link_icon}
                        alt="Icon"
                      />
                    </div>
                  </a>

                  <a
                    href="https://github.com/arbaevsherbolot?tab=repositories"
                    target="_blank">
                    <div className={scss.icon}>
                      <img
                        className={scss.icon_img}
                        src={github_icon}
                        alt="Icon"
                      />
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div className={scss.litle_boxes}>
              <div className={scss.box}>
                <div className={scss.box_image}>
                  <img
                    src="https://cdn.dribbble.com/users/1346196/screenshots/6176280/attachments/1324203/web_mockup.png"
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

            <div className={scss.second_box}>
              <div className={scss.box_title}>
                <h3>Project</h3>
                <p>
                  I <span>develop</span> the user interface,
                  <span> Web page development</span>, I create
                  <span> UX element</span> interactions, Design and mockups of
                  <span> products</span> for companies.
                </p>
              </div>

              <div className={scss.box_image}>
                <img
                  src="https://cdn.dribbble.com/users/5693896/screenshots/14832331/screens_iso-preview_4x.jpg"
                  alt="Project"
                />
              </div>

              <div className={scss.box_bottom}>
                <div className={scss.icons}>
                  <a href="https://next-dentist911.vercel.app/" target="_blank">
                    <div className={scss.icon}>
                      <img
                        className={scss.icon_img}
                        src={link_icon}
                        alt="Icon"
                      />
                    </div>
                  </a>

                  <a
                    href="https://github.com/arbaevsherbolot?tab=repositories"
                    target="_blank">
                    <div className={scss.icon}>
                      <img
                        className={scss.icon_img}
                        src={github_icon}
                        alt="Icon"
                      />
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div className={scss.third_box}>
              <div className={scss.box_title}>
                <h3>Project</h3>
                <p>
                  I <span>develop</span> the user interface,
                  <span> Web page development</span>, I create
                  <span> UX element</span> interactions, Design and mockups of
                  <span> products</span> for companies.
                </p>
              </div>

              <div className={scss.box_image}>
                <img
                  src="https://cdn.dribbble.com/users/5693896/screenshots/14832331/screens_iso-preview_4x.jpg"
                  alt="Project"
                />
              </div>

              <div className={scss.box_bottom}>
                <div className={scss.icons}>
                  <a href="https://next-dentist911.vercel.app/" target="_blank">
                    <div className={scss.icon}>
                      <img
                        className={scss.icon_img}
                        src={link_icon}
                        alt="Icon"
                      />
                    </div>
                  </a>

                  <a
                    href="https://github.com/arbaevsherbolot?tab=repositories"
                    target="_blank">
                    <div className={scss.icon}>
                      <img
                        className={scss.icon_img}
                        src={github_icon}
                        alt="Icon"
                      />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
