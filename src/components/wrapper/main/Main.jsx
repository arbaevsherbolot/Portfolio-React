import React from "react";
import { Route, Routes } from "react-router-dom";
import { Admin } from "../../pages/admin/Admin";
import { Home } from "../../pages/home/Home";
import { About } from "../../pages/about/About";
import { Contact } from "../../pages/contact/Contact";

export const Main = () => {
  return (
    <>
      <Routes>
        <Route element={<Admin />} path="/adminsheradminpagesecret" />
        <Route element={<Home />} path="/" />
        <Route element={<About />} path="/about" />
        <Route element={<Contact />} path="/contact" />
      </Routes>
    </>
  );
};
