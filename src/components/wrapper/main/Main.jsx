import React from "react";
import { Route, Routes } from "react-router-dom";
import { Admin } from "../../pages/admin/Admin";
import { Home } from "../../pages/Home";
import { About } from "../../pages/about/About";
import { Contact } from "../../pages/contact/Contact";
import { Projects } from "../header/header_components/projects/Projects";

export const Main = () => {
  return (
    <>
      <Routes>
        <Route element={<Admin />} path="/adminsheradminpagesecret" />
        <Route element={<Home />} path="/" />
        <Route element={<About />} path="/about" />
        <Route element={<Contact />} path="/contact" />
        <Route element={<Projects />} path="/projects" />
      </Routes>
    </>
  );
};
