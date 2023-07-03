import React from "react";
import database_icon from "../../../assets/svg/database.svg";
import git_icon from "../../../assets/svg/git.svg";
import backend_icon from "../../../assets/svg/brain.svg";
import frontend_icon from "../../../assets/svg/window.svg";
import fullstack_icon from "../../../assets/svg/code.svg";
import javascript_icon from "../../../assets/svg/javascript.svg";
import styles from "./Skills.module.scss";

export const Skills = () => {
  const skills = [
    {
      title: "Full-Stack",
      img: fullstack_icon,
      desc: `As a <span>full-stack developer</span>, I have a variety of
    <span> skills </span>
    that allow me to handle both the <span>front-end</span> and
    <span> back-end </span>
    aspects of web development. These <span>skills</span> allow me to
    create comprehensive and interactive
    <span> web applications </span>
    from start to finish.`,
    },
    {
      title: "Front-End",
      img: frontend_icon,
      desc: `Having knowledge in <span>front-end</span> technologies such as
      <span> JavaScript</span>, <span>React</span>,
      <span> TypeScript</span>,<span> HTML5</span>, <span> CSS3</span>,
      <span> SCSS</span>,<span> Tailwind</span>, <span>Bootstrap</span>,
      <span> Material-UI</span>, <span>Figma</span>. I can create
      <span> intuitive user interfaces</span> and
      <span> responsive </span>
      web designs. I have a keen eye for
      <span> design aesthetics</span>, which ensures that the
      <span> user experience</span> is fluid and visually appealing.`,
    },
    {
      title: "Languages",
      img: javascript_icon,
      desc: `I am proficient in several <span>programming languages </span>
      such as
      <span> JavaScript </span>,<span> TypeScript</span>, and
      <span> Node JS</span>. This versatility allows me to adapt to
      different <span>project requirements</span> and choose the best
      language for each task.`,
    },
    {
      title: "Back-End",
      img: backend_icon,
      desc: `I am well versed in <span>back-end</span> technologies such as
      <span> Node.js</span>, <span>Express</span>, <span> Fastify</span>
      ,<span> RESTful APIs</span>, <span> Prisma</span>, and
      <span> GraphQL</span>. This knowledge allows me to
      <span> design</span> and implement
      <span> server-side logic</span>, manage <span>data storage </span>
      and retrieval, and create robust <span>APIs</span> to ensure
      seamless communication between <span>external</span> and
      <span> internal</span> systems.`,
    },
    {
      title: "Git",
      img: git_icon,
      desc: `I am able to use <span>Git</span> and other
      <span> version control </span>
      tools to effectively <span>manage code</span> repositories. This
      allows me to <span>collaborate</span> with other
      <span> developers</span>, easily integrate <span>code</span>, and
      track changes throughout the <span>development process</span>.`,
    },
    {
      title: "Database",
      img: database_icon,
      desc: `I have <span>experience</span> with various
      <span> database systems </span>
      such as
      <span> MySQL</span>,<span> PostgreSQL</span>, <span>MongoDB</span>. 
      I can efficiently <span>design</span> and <span>optimize</span>
      <span> database schemas</span>, write complex queries, ensure data
      <span> integrity</span> and <span>security</span>.`,
    },
  ];

  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>Skills</h1>

        <div className={styles.skills}>
          {skills.map((d, i) => (
            <div key={i} className={styles.skill_wrapper}>
              <div className={styles.skill_name}>
                <h3 className={styles.skill_title}>{d.title}</h3>

                {d.img ? (
                  <img
                    className={styles.skill_icon}
                    src={d.img}
                    alt="Skill-Icon"
                  />
                ) : null}
              </div>

              <p
                className={styles.desc}
                dangerouslySetInnerHTML={{ __html: d.desc }}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
