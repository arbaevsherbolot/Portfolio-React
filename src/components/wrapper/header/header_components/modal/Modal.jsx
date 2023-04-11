import React from "react";
import "./Modal.scss";

export const Modal = ({ active, setActive }) => {
  return (
    <>
      <div
        className={"modal"}
        onClick={() => setActive(false)}>
        <div
          className="modal_content"
          onClick={(e) => e.stopPropagation()}></div>
      </div>
    </>
  );
};
