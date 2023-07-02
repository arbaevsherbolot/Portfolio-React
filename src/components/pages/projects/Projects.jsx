import React from "react";
import link_icon from "../../../assets/svg/link_icon.svg";
import github_icon from "../../../assets/svg/githubicon.svg";
import project_img from "../../../assets/ChatGPT-Telegram-Project.jpg";
import project_img2 from "../../../assets/ChatGPT-Telegram.png";
import project_img3 from "../../../assets/ChatGPT-Telegram-Mockup.png";
import project_img4 from "../../../assets/ortodont_project.png";
import project_img5 from "../../../assets/matrade_project.png";
import scss from "./Projects.module.scss";

export const Projects = () => {
  const titles = [
    "Projects",
    "Projects",
    "Projects",
    "Projects",
    "Projects",
    "Projects",
  ];

  const boxes = [
    {
      title: "M-A Trade",
      desc: `I <span>develop</span> the user interface,
    <span> Web page development</span>, I create
    <span> UX element</span> interactions, Design and mockups of
    <span> products</span> for companies.`,
      img: project_img5,
      github_link: "https://github.com/arbaevsherbolot/M-A-trade-website",
      demo_link: "https://ma-trade.netlify.app",
    },
  ];

  return (
    <>
      <div className={scss.boxes_container}>
        <div className={scss.page_title}>
          {titles.map((t, i) => (
            <h2 key={i} className={scss.title}>
              {t}
            </h2>
          ))}
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
            <img src={project_img3} alt="ChatGPT-Telegram" />
          </div>
        </div>

        <div className={scss.litle_boxes}>
          <div className={scss.left_content}>
            <img src={project_img2} alt="ChatGPT-Telegram" />
          </div>

          <div className={scss.right_content}>
            <img src={project_img} alt="ChatGPT-Telegram" />
          </div>
        </div>

        {boxes.map((d, i) => (
          <div key={i} className={scss.box}>
            <div className={scss.left_content}>
              <div className={scss.box_text}>
                <h3 className={scss.title}>{d.title}</h3>

                <p
                  className={scss.desc}
                  dangerouslySetInnerHTML={{ __html: d.desc }}
                />
              </div>

              <div className={scss.box_icons}>
                <a href={d.github_link} target="_blank">
                  <img
                    src={github_icon}
                    alt="Github-Icon"
                    className={scss.icon}
                  />
                </a>

                <a href={d.demo_link} target="_blank">
                  <img src={link_icon} alt="Link-Icon" className={scss.icon} />
                </a>
              </div>
            </div>

            <div className={scss.right_content}>
              <img src={d.img} alt="Project-Image" />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
