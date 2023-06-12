import React from "react";
import { Route, Routes } from "react-router-dom";
import { useAuthUser } from "react-auth-kit";
import { Home } from "../../pages/home/Home";
import { Contact } from "../../pages/contact/Contact";
import { Blog } from "../../pages/blog/Blog";
import { Post } from "../../pages/blog/post/Post";
import { Login } from "../../pages/blog/auth/Login";
import { Error } from "../../pages/error/Error";

export const Main = () => {
  const auth = useAuthUser();

  return (
    <>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Contact />} path="/contact" />
        <Route element={<Blog />} path="/blog" />
        <Route element={<Post />} path="/blog/post/:id" />
        <Route element={<Error />} path="*" />
      </Routes>
    </>
  );
};
