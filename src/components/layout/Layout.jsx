import React from "react";
import { Header } from "./header/Header";
import { Router } from "./router/Router";
import { Footer } from "./footer/Footer";
import "./Layout.scss";

export const Layout = () => {
  return (
    <div className="wrapper">
      <header>
        <Header />
      </header>
      <main>
        <Router />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};
