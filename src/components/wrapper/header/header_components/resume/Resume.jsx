import React, { useState } from "react";
import { Modal } from "../modal/Modal";
import resume_pdf from "../../../../../assets/resume.pdf";
import scss from "./Resume.module.scss";

const Resume = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [openModal, setOpenModal] = useState(false);

  const quickView = () => {
    setOpenModal(true);
  };

  return (
    <>
      <div className={scss.resume_wrapper}>
        <div className={scss.button} onClick={() => setIsOpen(!isOpen)}>
          <h3 className={scss.title}>Resume</h3>
          <div
            className={
              isOpen
                ? `${scss.dropdown_menu} ${scss.active}`
                : `${scss.dropdown_menu}`
            }>
            <pre onClick={quickView}>Quick View</pre>

            <a href={resume_pdf} target="_blank">
              <pre>Download</pre>
            </a>
          </div>
        </div>
      </div>
      <Modal open={openModal} close={() => setOpenModal(false)} />
    </>
  );
};

export default Resume;
