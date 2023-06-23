import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { useAuthUser } from "react-auth-kit";
import { Home } from "../../pages/home/Home";
import { Contact } from "../../pages/contact/Contact";
import { Blog } from "../../pages/blog/Blog";
import { Profile } from "../../pages/profile/Profile";
import { Post } from "../../pages/blog/post/Post";
import { Login } from "../../pages/blog/auth/login/Login";
import { Register } from "../../pages/blog/auth/register/Register";
import { Error } from "../../pages/error/Error";

export const Main = () => {
  const auth = useAuthUser();

  return (
    <>
      <Routes>
        <Route element={<Home />} path="/" />

        <Route element={<Contact />} path="/contact" />

        <Route
          element={
            auth() ? <Blog /> : <Navigate to="/blog/login" replace={true} />
          }
          path="/blog"
        />

        <Route
          element={
            auth() ? <Post /> : <Navigate to="/blog/login" replace={true} />
          }
          path="/blog/post/:id"
        />

        <Route
          element={auth() ? <Navigate to="/blog" replace={true} /> : <Login />}
          path="/blog/login"
        />

        <Route
          element={
            auth() ? <Navigate to="/blog" replace={true} /> : <Register />
          }
          path="/blog/register"
        />

        <Route
          element={
            auth() ? (
              <Profile />
            ) : (
              <Navigate to="/blog/register" replace={true} />
            )
          }
          path="/blog/profile"
        />

        <Route element={<Error />} path="*" />
      </Routes>
    </>
  );
};
