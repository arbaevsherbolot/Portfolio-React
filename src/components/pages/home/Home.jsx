import { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import { About } from "../about/About";
import { Projects } from "../projects/Projects";
import { Skills } from "../skills/Skills";
import logo from "../../../assets/IOS_Boy.webp";
import scss from "./Home.module.scss";

export const Home = () => {
  document.title = "Sherbolot Arbaev | Portfolio";

  const [loadEffect, setLoadEffect] = useState(0);

  const onLoadEffect = () => {
    const windowScroll = document.documentElement.scrollTop;
    const windowHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const scrolled = (windowScroll / windowHeight) * 100;

    setLoadEffect(scrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", onLoadEffect);
  }, []);

  return (
    <>
      <div className={scss.page_wrapper}>
        <div className={scss.container}>
          <div className={scss.load} style={{ width: `${loadEffect}%` }}></div>

          <div className={scss.home_content}>
            <div className={scss.home_image}>
              <img src={logo} alt="IOS" />
            </div>

            <div className={scss.home_title}>
              <h3>
                Hi, I'm Sherbolot
                <span className={scss.second_name}> (Sher)</span>
                <br />I
                <span className={scss.type}>
                  <Typewriter
                    words={[" develop", " design", " create"]}
                    loop={true}
                    cursor
                    cursorStyle="|"
                    typeSpeed={80}
                    deleteSpeed={10}
                    delaySpeed={1000}
                  />
                </span>
                user-friendly products.
              </h3>
              {/* 
              <button className={scss.btn}>Contact me</button> */}
            </div>
          </div>

          <div className={scss.box_container}>
            <About />
            <Projects />
            <Skills />
          </div>
        </div>
      </div>
    </>
  );
};
