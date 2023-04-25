import React from "react";
import resume from "../../../../../assets/resume.pdf";
import styles from "./Resume.module.scss";

export const Resume = () => {
  const handleQuickView = () => {
    alert("QuickView")
  };

  const handleDownloadResume = () => {
    alert("Resume download")
  };

  return (
    <>
      <Dropdown
        trigger={<span className={styles.resume_button}>Resume</span>}
        menu={[
          <button onClick={handleQuickView}>Quick View</button>,
          <a href={resume} download="Resume - Sherbolot Arbaev">
            <button onClick={handleDownloadResume}>Download</button>
          </a>,
        ]}
      />
    </>
  );
};

const Dropdown = ({ trigger, menu }) => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className={styles.dropdown}>
      {React.cloneElement(trigger, {
        onClick: handleOpen,
      })}
      {open ? (
        <ul className={styles.menu}>
          {menu.map((menuItem, index) => (
            <li key={index} className={styles.menu_item}>
              {React.cloneElement(menuItem, {
                onClick: () => {
                  menuItem.props.onClick();
                  setOpen(false);
                },
              })}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};
