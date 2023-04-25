import React from "react";
import resume_pdf from "../../../../../assets/resume.pdf";
import scss from "./Resume.module.scss";

const Resume = () => {
  return (
    <div className={scss.resume_wrapper}>
      <div className={scss.button}>
        <h3 className={scss.title}>Resume</h3>
        <div className={scss.dropdown_menu}>
          <pre>Quick View</pre>
          <a href={resume_pdf}>
            <pre>Download</pre>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Resume;
