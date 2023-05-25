import link_icon from "../../../assets/svg/link_icon.svg";
import github_icon from "../../../assets/svg/github_icon.svg";
import project_img_1 from "../../../assets/ortodont_project.png";
import project_img_2 from "../../../assets/ortodont_project2.png";
import project_img_3 from "../../../assets/ortodont_project3.png";
import scss from "./Projects.module.scss";

export const Projects = () => {
  return (
    <>
      <div className={scss.boxes_container}>
        <div className={scss.big_box}>
          <div className={scss.box_content}>
            <div className={scss.box_text}>
              <h3 className={scss.title}>Project</h3>

              <p className={scss.desc}>
                I <span>collaborated</span> with <span>UI/UX designers</span> to
                <span> create</span> an <span>intuitive interface</span> for
                patients and practitioners, <span>focusing</span> on easy
                navigation and <span>clear information</span> presentation.
                Using modern
                <span> front-end </span>
                technologies like <span>React.js</span> and <span>Next.js</span>
                , I built a <span>responsive</span> and
                <span> interactive UI</span>. For the
                <span> back-end infrastructure</span>, I utilized
                <span> Node.js</span> and <span>Express.js</span> to develop a
                robust server-side solution. I prioritized building secure
                <span> APIs </span>
                that facilitated seamless communication between the
                <span> front-end</span> and the <span>database</span>.
                Integration with <span>external systems</span> like
                <span> appointment scheduling</span> and
                <span> payment gateways</span> was implemented by me to ensure a
                smooth <span>user experience</span>.
              </p>
            </div>

            <div className={scss.box_icons}>
              <img src={github_icon} alt="Github-Icon" className={scss.icon} />

              <img src={link_icon} alt="Link-Icon" className={scss.icon} />
            </div>
          </div>

          <div className={scss.box_img}>
            <img
              src="https://assets-global.website-files.com/5d3e265ac89f6a3e64292efc/638787a7bce3cec952ae47fa_hero.webp"
              alt="Project"
            />
          </div>
        </div>

        <div className={scss.litle_boxes}>
          <div className={scss.left_content}>
            <img
              src="https://cdn.dribbble.com/users/1346196/screenshots/6176280/attachments/1324203/web_mockup.png"
              alt="Project-Image"
            />
          </div>

          <div className={scss.right_content}>
            <img
              src="https://assets.justinmind.com/wp-content/uploads/2020/08/travel-ecommerce-app-mockup.png"
              alt="Project-Image"
            />
          </div>
        </div>

        <div className={scss.box}>
          <div className={scss.left_content}>
            <div className={scss.box_text}>
              <h3 className={scss.title}>Project</h3>

              <p className={scss.desc}>
                I <span>develop</span> the user interface,
                <span> Web page development</span>, I create
                <span> UX element</span> interactions, Design and mockups of
                <span> products</span> for companies.
              </p>
            </div>

            <div className={scss.box_icons}>
              <img src={github_icon} alt="Github-Icon" className={scss.icon} />

              <img src={link_icon} alt="Link-Icon" className={scss.icon} />
            </div>
          </div>

          <div className={scss.right_content}>
            <img
              src="https://cdn.dribbble.com/users/5693896/screenshots/14832331/screens_iso-preview_4x.jpg"
              alt="Project-Image"
            />
          </div>
        </div>

        <div className={scss.box}>
          <div className={scss.left_content}>
            <div className={scss.box_text}>
              <h3 className={scss.title}>Project</h3>

              <p className={scss.desc}>
                I <span>develop</span> the user interface,
                <span> Web page development</span>, I create
                <span> UX element</span> interactions, Design and mockups of
                <span> products</span> for companies.
              </p>
            </div>

            <div className={scss.box_icons}>
              <img src={github_icon} alt="Github-Icon" className={scss.icon} />

              <img src={link_icon} alt="Link-Icon" className={scss.icon} />
            </div>
          </div>

          <div className={scss.right_content}>
            <img
              src="https://cdn.dribbble.com/users/5693896/screenshots/14832331/screens_iso-preview_4x.jpg"
              alt="Project-Image"
            />
          </div>
        </div>
      </div>
    </>
  );
};
