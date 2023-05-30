import React, { useState, useEffect } from "react";
import { Wrapper } from "./components/wrapper/Wrapper";
import "./App.scss";

export const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1700);
  }, []);

  // useEffect(() => {
  //   setLoading(true);
  //   window.onload = () => setLoading(false);
  // }, []);

  return (
    <>
      {loading ? (
        <div
          style={{
            color: "#00ffbbeb",
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "200px",
            fontFamily: "PP Neue Machina, Ultrabold",
          }}>
          loading...
        </div>
      ) : (
        <Wrapper />
      )}
    </>
  );
};
