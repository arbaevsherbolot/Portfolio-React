import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useSignIn } from "react-auth-kit";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import show_icon from "../../../../assets/svg/show.svg";
import styles from "./Login.module.scss";

export const Login = () => {
  document.title = "Sherbolot Arbaev | Login";

  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const signIn = useSignIn();

  const handleChangeUsername = (e) => {
    setData((prev) => ({
      ...prev,
      username: e.target.value,
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

  const server_url = "https://auth-node.up.railway.app/auth";

  const notifySuccess = () => {
    return toast.success("Successfully logged in", {
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

  const notifyError = (msg) => {
    const defaultMessage = "Server temporarily unavailable";

    return toast.error(msg ? `${msg}` : defaultMessage, {
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

  const navigate = useNavigate();

  const sendData = async (e) => {
    e.preventDefault();

    try {
      if (!validateUsername(data.username)) {
        notifyError("Invalid Username!");
      } else {
        await axios.post(`${server_url}/admin-login`, data).then((res) => {
          if (res.data.auth === true) {
            const token = res.data.token;
            const username = res.data.data.username;
            const email = res.data.data.email;

            signIn({
              token: token,
              expiresIn: 3600,
              tokenType: "Bearer",
              authState: {
                username: username,
                email: email,
              },
            });

            navigate("/blog");

            notifySuccess();

            setData((prev) => ({
              ...prev,
              username: "",
              password: "",
            }));
          } else {
            notifyError(res.data.message);
          }
        });
      }
    } catch {
      notifyError();
    }
  };

  const validateUsername = (username) => {
    const regex = /^[\w\s]{2,30}$/;
    return regex.test(username);
  };

  return (
    <>
      <div className={styles.page}>
        <form onSubmit={sendData} className={styles.form}>
          <img
            src="https://cdn3d.iconscout.com/3d/premium/thumb/gamers-5266580-4403854.png"
            alt="Image"
            className={styles.form_img}
          />

          <input
            required
            type="text"
            value={data.username}
            placeholder="Username"
            onChange={handleChangeUsername}
            className={styles.input}
          />

          <div className={styles.password_wrapper}>
            <input
              required
              type={showPassword ? "text" : "password"}
              value={data.password}
              placeholder="Password"
              onChange={handleChangePassword}
              className={styles.input}
            />

            <img
              src={show_icon}
              alt="password-icon"
              className={styles.password_btn}
              onClick={password_toggle}
            />
          </div>

          <button type="submit" className={styles.button}>
            Log In
          </button>

          <p className={styles.desc}>
            The blog page is only available to the admin, since the site is
            under development
          </p>
        </form>

        <ToastContainer />
      </div>
    </>
  );
};