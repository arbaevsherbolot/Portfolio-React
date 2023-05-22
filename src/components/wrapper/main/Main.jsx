import React from "react";
import { Route, Routes } from "react-router-dom";
import { Admin } from "../../pages/admin/Admin";
import { Home } from "../../pages/home/Home";
import { Contact } from "../../pages/contact/Contact";
import { Error } from "../../pages/error/Error";

export const Main = () => {
  return (
    <>
      <Routes>
        <Route element={<Admin />} path="/admin" />
        <Route element={<Home />} path="/" />
        <Route element={<Contact />} path="/contact" />
        <Route element={<Error />} path="*" />
      </Routes>
    </>
  );
};
