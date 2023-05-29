import link_icon from "../../../assets/svg/link_icon.svg";
import github_icon from "../../../assets/svg/github_icon.svg";
import project_img from "../../../assets/ChatGPT-Telegram-Project.jpg";
import project_img2 from "../../../assets/ChatGPT-Telegram.png";
import project_img3 from "../../../assets/ChatGPT-Telegram-Mockup.png";
import project_img4 from "../../../assets/ortodont_project.png";
import project_img5 from "../../../assets/matrade_project.png";
import scss from "./Projects.module.scss";

export const Projects = () => {
  return (
    <>
      <div className={scss.boxes_container}>
        <div className={scss.page_title}>
          <h2 className={scss.title}>Projects</h2>
          <h2 className={scss.title}>Projects</h2>
          <h2 className={scss.title}>Projects</h2>
          <h2 className={scss.title}>Projects</h2>
          <h2 className={scss.title}>Projects</h2>
          <h2 className={scss.title}>Projects</h2>
          <h2 className={scss.title}>Projects</h2>
        </div>

        <div className={scss.big_box}>
          <div className={scss.box_content}>
            <div className={scss.box_text}>
              <h3 className={scss.title}>ChatGPT</h3>

              <p className={scss.desc}>
                I created a <span>ChatGPT bot</span> in <span>Telegram </span>
                using <span>Node.js</span> and the
                <span> node-telegram-bot-api </span>
                library. By connecting it to the <span>Telegram API</span> and
                integrating the <span>GPT-3.5</span> model, I developed an
                intelligent bot that assists users by answering questions,
                providing information, and delivering delightful communication.
                My <span>project</span> showcased the power of <span>AI </span>
                in the <span>Telegram</span> community, leaving a lasting
                impression.
              </p>
            </div>

            <div className={scss.box_icons}>
              <a
                href="https://github.com/arbaevsherbolot/telegram-bot"
                target="_blank">
                <img
                  src={github_icon}
                  alt="Github-Icon"
                  className={scss.icon}
                />
              </a>

              <a href="" target="_blank">
                <img src={link_icon} alt="Link-Icon" className={scss.icon} />
              </a>
            </div>
          </div>

          <div className={scss.box_img}>
            <img src={project_img3} alt="Project" />
          </div>
        </div>

        <div className={scss.litle_boxes}>
          <div className={scss.left_content}>
            <img src={project_img2} alt="ChatGPT-Telegram" />
          </div>

          <div className={scss.right_content}>
            <img src={project_img} alt="Project-Image" />
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
              <a
                href="https://github.com/arbaevsherbolot?tab=repositories"
                target="_blank">
                <img
                  src={github_icon}
                  alt="Github-Icon"
                  className={scss.icon}
                />
              </a>

              <a href="https://next-dentist911.vercel.app/" target="_blank">
                <img src={link_icon} alt="Link-Icon" className={scss.icon} />
              </a>
            </div>
          </div>

          <div className={scss.right_content}>
            <img
              src="https://assets-global.website-files.com/5d3e265ac89f6a3e64292efc/638787a7bce3cec952ae47fa_hero.webp"
              alt="Project-Image"
            />
          </div>
        </div>

        <div className={scss.box}>
          <div className={scss.left_content}>
            <div className={scss.box_text}>
              <h3 className={scss.title}>M-A Trade</h3>

              <p className={scss.desc}>
                I <span>develop</span> the user interface,
                <span> Web page development</span>, I create
                <span> UX element</span> interactions, Design and mockups of
                <span> products</span> for companies.
              </p>
            </div>

            <div className={scss.box_icons}>
              <a
                href="https://github.com/arbaevsherbolot?tab=repositories"
                target="_blank">
                <img
                  src={github_icon}
                  alt="Github-Icon"
                  className={scss.icon}
                />
              </a>

              <a href="https://next-dentist911.vercel.app/" target="_blank">
                <img src={link_icon} alt="Link-Icon" className={scss.icon} />
              </a>
            </div>
          </div>

          <div className={scss.right_content}>
            <img src={project_img5} alt="Project-Image" />
          </div>
        </div>
      </div>
    </>
  );
};
