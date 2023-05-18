import scss from "./Skills.module.scss";
import html_icon from "../../../assets/svg/html.svg";
import css_icon from "../../../assets/svg/css.svg";
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
            magnam nemo dolorum numquam ut asperiores excepturi. Eos voluptate
            ratione, esse est non placeat reprehenderit sapiente culpa quis
            natus, eaque velit.
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
          </div>
        </div>
      </div>
    </>
  );
};
