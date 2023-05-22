import scss from "./Skills.module.scss";
import html_icon from "../../../assets/svg/html.svg";
import css_icon from "../../../assets/svg/css.svg";
import git_icon from "../../../assets/svg/git.svg";
import tailwind_icon from "../../../assets/svg/tailwind.svg";
import javascript_icon from "../../../assets/svg/javascript.svg";
import typescript_icon from "../../../assets/svg/typescript.svg";
import react_icon from "../../../assets/svg/react.svg";
import node_icon from "../../../assets/svg/node.svg";

export const Skills = () => {
  return (
    <>
      <div className={scss.container}>
        <div className={scss.title}>
          <h1>Skills</h1>

          <p>
            As a <span>full-stack developer</span>, I have a variety of
            <span> skills </span>
            that allow me to handle both the <span>front-end</span> and
            <span>back-end</span>
            aspects of web development. These skills allow me to create
            comprehensive and interactive <span>web applications</span> from
            start to finish.
            <br />
            <br />I am proficient in several <span>programming languages </span>
            such as
            <span> JavaScript </span>,<span> TypeScript</span>, and
            <span> Node JS</span>. This versatility allows me to adapt to
            different project requirements and choose the best language for each
            task.
            <br />
            <br />
            Having knowledge in <span>front-end</span> technologies such as
            <span> JavaScript</span>, <span>React</span>,
            <span> TypeScript</span>,<span> HTML5</span>, <span> CSS3</span>,
            <span> SCSS</span>,<span> Tailwind</span>, <span>Bootstrap</span>,
            <span> Material-UI</span>, <span>Figma</span>. I can create
            <span> intuitive user interfaces</span> and <span>responsive</span>
            web designs. I have a keen eye for
            <span> design aesthetics</span>, which ensures that the
            <span> user experience</span> is fluid and visually appealing.
            <br />
            <br />I am well versed in <span>back-end</span> technologies such as
            <span> Node.js</span>, <span>Express</span>,
            <span> RESTful APIs</span>, and <span>GraphQL</span>. This knowledge
            allows me to <span>design</span> and implement
            <span> server-side logic</span>, manage <span>data storage </span>
            and retrieval, and create robust APIs to ensure seamless
            communication between <span>external</span> and
            <span> internal</span> systems.
            <br />
            <br />I have experience with various database systems such as
            <span> MySQL</span>,<span> PostgreSQL</span>, <span>MongoDB</span>.
            I can efficiently <span>design</span> and <span>optimize</span>
            <span> database schemas</span>, write complex queries, ensure data
            <span> integrity</span> and <span>security</span>.
            <br />
            <br />I am able to use <span>Git</span> and other version control
            tools to effectively <span>manage code</span> repositories. This
            allows me to <span>collaborate</span> with other
            <span> developers</span>, easily integrate <span>code</span>, and
            track changes throughout the <span>development process</span>.
            <br />
            <br />I am well-versed in <span>testing frameworks</span> such as
            <span> Jest</span>, and <span>Selenium</span> to ensure high
            <span> quality code</span>. I have experience with Continuous
            Integration and Deployment <span>(CI/CD)</span> pipelines using
            tools like <span>Jenkins</span>, <span>Travis CI</span> or
            <span> GitLab CI</span>.
          </p>

          <div className={scss.icons}>
            <div className={scss.icon}>
              <img className={scss.icon_img} src={html_icon} alt="HTML" />
            </div>

            <div className={scss.icon}>
              <img className={scss.icon_img} src={css_icon} alt="CSS" />
            </div>

            <div className={scss.icon}>
              <img
                className={scss.icon_img}
                src={tailwind_icon}
                alt="Tailwind"
              />
            </div>

            <div className={scss.icon}>
              <img
                className={scss.icon_img}
                src={javascript_icon}
                alt="JavaScript"
              />
            </div>

            <div className={scss.icon}>
              <img
                className={scss.icon_img}
                src={typescript_icon}
                alt="TypeScript"
              />
            </div>

            <div className={scss.icon}>
              <img className={scss.icon_img} src={react_icon} alt="React" />
            </div>

            <div className={scss.icon}>
              <img className={scss.icon_img} src={node_icon} alt="Node JS" />
            </div>

            <div className={scss.icon}>
              <img className={scss.icon_img} src={git_icon} alt="Git" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
