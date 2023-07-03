import React, { useState, useEffect } from "react";
import axios from "axios";
import { Layout } from "./components/layout/Layout";
import { PreLoader } from "./components/pre-loader/PreLoader";
import "./App.scss";

export const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1800);
  }, []);

  // useEffect(() => {
  //   setLoading(true);
  //   window.onload = () => setLoading(false);
  // }, []);

  return <>{loading ? <PreLoader /> : <Layout />}</>;
};
