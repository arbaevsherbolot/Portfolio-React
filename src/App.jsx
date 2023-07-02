import React, { useState, useEffect } from "react";
import axios from "axios";
import { Wrapper } from "./components/wrapper/Wrapper";
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

  return <>{loading ? <PreLoader /> : <Wrapper />}</>;
};
