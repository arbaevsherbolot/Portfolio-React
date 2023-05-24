import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../../pages/home/Home";
import { Contact } from "../../pages/contact/Contact";
import { Admin } from "../../pages/admin/Admin";
import { Login } from "../../pages/admin/auth/Login";
import { Error } from "../../pages/error/Error";

export const Main = () => {
  return (
    <>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Contact />} path="/contact" />
        <Route element={<Admin />} path="/admin" />
        <Route element={<Login />} path="/login" />
        <Route element={<Error />} path="*" />
      </Routes>
    </>
  );
};
