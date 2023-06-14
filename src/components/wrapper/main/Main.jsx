import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useAuthUser } from "react-auth-kit";
import { Home } from "../../pages/home/Home";
import { Contact } from "../../pages/contact/Contact";
import { Blog } from "../../pages/blog/Blog";
import { Post } from "../../pages/blog/post/Post";
import { Login } from "../../pages/blog/auth/login/Login";
import { Register } from "../../pages/blog/auth/register/Register";
import { Error } from "../../pages/error/Error";

export const Main = () => {
  const auth = useAuthUser();
  const navigate = useNavigate();

  return (
    <>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Contact />} path="/contact" />
        <Route element={auth() ? <Blog /> : <Login />} path="/blog" />
        <Route element={auth() ? <Post /> : <Login />} path="/blog/post/:id" />
        <Route element={<Login />} path="/login" />
        <Route element={<Register />} path="/register" />
        <Route element={<Error />} path="*" />
      </Routes>
    </>
  );
};
