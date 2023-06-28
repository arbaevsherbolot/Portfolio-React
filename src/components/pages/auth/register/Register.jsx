import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import show_icon from "../../../../assets/svg/show.svg";
import hide_icon from "../../../../assets/svg/hide.svg";
import username_icon from "../../../../assets/svg/username.svg";
import email_icon from "../../../../assets/svg/email.svg";
import password_icon from "../../../../assets/svg/password.svg";
import google_icon from "../../../../assets/svg/google.svg";
import apple_icon from "../../../../assets/svg/apple.svg";
import styles from "../Auth.module.scss";

export const Register = () => {
  document.title = "Sherbolot Arbaev | Register";

  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChangeUsername = (e) => {
    setData((prev) => ({
      ...prev,
      username: e.target.value,
    }));
  };

  const handleChangeEmail = (e) => {
    setData((prev) => ({
      ...prev,
      email: e.target.value,
    }));
  };

  const handleChangePassword = (e) => {
    setData((prev) => ({
      ...prev,
      password: e.target.value,
    }));
  };

  const password_toggle = () => {
    setShowPassword(!showPassword);
  };

  const server_url = "https://auth-node.up.railway.app";

  const navigate = useNavigate();

  const notifyError = (msg) => {
    return toast.error(`${msg}`, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  const sendData = async (e) => {
    e.preventDefault();

    try {
      if (!validateUsername(data.username)) {
        notifyError("Invalid Username!");
      } else if (!validateEmail(data.email)) {
        notifyError("Invalid Email!");
      } else if (data.password.length < 8) {
        notifyError("Password must be at least 8 characters!");
      } else {
        await axios.post(`${server_url}/auth/register`, data);

        setData((prev) => ({
          ...prev,
          username: "",
          email: "",
          password: "",
        }));

        navigate("/blog/login");
      }
    } catch {
      notifyError("Username already exists!");
    }
  };

  const validateUsername = (username) => {
    const regex = /^[\w\s]{2,30}$/;
    return regex.test(username);
  };

  const validateEmail = (email) => {
    const regex = /^\S+@\S+\.\S+$/;
    return regex.test(email);
  };

  return (
    <>
      <div className={styles.page}>
        <form onSubmit={sendData} className={styles.form}>
          <h3 className={styles.title}>Welcome! 👋🏻</h3>

          {/* <div className={styles.services_auth_buttons}>
            <div className={styles.google_btn}>
              <img src={google_icon} alt="Google" />
              <span>Sign Up with Google</span>
            </div>

            <div className={styles.apple_btn}>
              <img src={apple_icon} alt="Apple" />
              <span>Sign Up with Apple</span>
            </div>
          </div> */}

          <div className={styles.input_wrapper}>
            <img src={username_icon} alt="Username" />

            <input
              required
              type="text"
              value={data.username}
              placeholder="Username"
              onChange={handleChangeUsername}
              className={styles.input}
            />
          </div>

          <div className={styles.input_wrapper}>
            <img src={email_icon} alt="Email" />

            <input
              required
              type="text"
              value={data.email}
              placeholder="Email"
              onChange={handleChangeEmail}
              className={styles.input}
            />
          </div>

          <div className={styles.input_wrapper}>
            <img src={password_icon} alt="Password" />

            <input
              required
              type={showPassword ? "text" : "password"}
              value={data.password}
              placeholder="Password"
              onChange={handleChangePassword}
              className={styles.input}
            />

            <div className={styles.password_btn_wrapper}>
              <img
                src={showPassword ? hide_icon : show_icon}
                alt="password-icon"
                className={styles.password_btn}
                onClick={password_toggle}
              />

              <div className={styles.hint_container}>
                <p className={styles.hint_title}>
                  {showPassword ? "Hide" : "Show"}
                </p>
              </div>
            </div>
          </div>

          <button type="submit" className={styles.button}>
            Sign Up
          </button>

          <Link className={styles.link} to="/blog/login">
            Already have an account? <span>Log In</span>
          </Link>
        </form>

        <ToastContainer />
      </div>
    </>
  );
};
