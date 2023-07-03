import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { useAuthUser } from "react-auth-kit";
import { Home } from "../../pages/home/Home";
import { Contact } from "../../pages/contact/Contact";
import { Blog } from "../../pages/blog/Blog";
import { Profile } from "../../pages/profile/Profile";
import { Post } from "../../pages/blog/post/Post";
import { Login } from "../../pages/auth/login/Login";
import { Register } from "../../pages/auth/register/Register";
import { Error } from "../../pages/error/Error";

export const Router = () => {
  const auth = useAuthUser();

  const routes = [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "*",
      element: <Error />,
    },
    // {
    //   path: "/blog",
    //   element: auth() ? <Blog /> : <Navigate to="/blog/login" />,
    // },
    // {
    //   path: "/blog/post/:id",
    //   element: auth() ? <Post /> : <Navigate to="/blog/login" replace={true} />,
    // },
    // {
    //   path: "/blog/login",
    //   element: auth() ? <Navigate to="/blog" replace={true} /> : <Login />,
    // },
    // {
    //   path: "/blog/register",
    //   element: auth() ? <Navigate to="/blog" replace={true} /> : <Register />,
    // },
    // {
    //   path: "/blog/profile",
    //   element: auth() ? (
    //     <Profile />
    //   ) : (
    //     <Navigate to="/blog/login" replace={true} />
    //   ),
    // },
  ];

  return (
    <>
      <Routes>
        {routes.map((r, i) => (
          <Route key={i} element={r.element} path={r.path} />
        ))}
      </Routes>
    </>
  );
};
