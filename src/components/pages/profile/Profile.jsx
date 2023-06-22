import React, { useState, useEffect } from "react";
import axios from "axios";
import { useAuthUser } from "react-auth-kit";
import { ToastContainer, toast } from "react-toastify";
import styles from "./Profile.module.scss";

export const Profile = ({ open, close }) => {
  const [userinfo, setUserinfo] = useState({
    username: "",
    email: "",
    photo: "",
    FirstName: "",
    LastName: "",
  });
  const [sendButton, setSendButton] = useState(false);
  const auth = useAuthUser();

  const server_url = "https://auth-node.up.railway.app";

  const notifyError = (msg) => {
    return toast.error(msg ? msg : "Server temporarily unavailable", {
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

  const notifySuccess = (msg) => {
    toast.success(msg ? msg : "Your profile updated successfully!", {
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

  useEffect(() => {
    try {
      const getUserInfo = async () => {
        await axios
          .post(`${server_url}/auth/profile`, {
            username: auth().username,
          })
          .then((data) => {
            setUserinfo((prev) => ({
              ...prev,
              username: data.data.userinfo.username,
              email: data.data.userinfo.email,
              photo: data.data.userinfo.photo,
              FirstName: data.data.userinfo.FirstName,
              LastName: data.data.userinfo.LastName,
            }));
          });
      };

      getUserInfo();
    } catch {
      notifyError();
    }
  }, []);

  const handleChangePhoto = (e) => {
    setUserinfo((prev) => ({
      ...prev,
      photo: e.target.value,
    }));
  };

  const handleChangeFirstName = (e) => {
    setUserinfo((prev) => ({
      ...prev,
      FirstName: e.target.value,
    }));
  };

  const handleChangeLastName = (e) => {
    setUserinfo((prev) => ({
      ...prev,
      LastName: e.target.value,
    }));
  };

  const editProfile = async (e) => {
    e.preventDefault();

    setSendButton(true);

    setInterval(() => {
      setSendButton(false);
    }, 1000);

    try {
      notifySuccess();

      await axios.post(`${server_url}/auth/edit/profile`, {
        username: auth().username,
        userinfo: userinfo,
      });
    } catch {
      notifyError();
    }
  };

  if (!open) {
    return null;
  }

  return (
    <>
      <div className={open ? styles.modal_wrapper_open : styles.modal_wrapper}>
        <div className={styles.modal_container}>
          <ToastContainer />

          <form onSubmit={editProfile} className={styles.form}>
            <div className={styles.input_container}>
              <span className={styles.span}>First Name</span>
              <input
                required
                type="text"
                placeholder="First Name"
                value={userinfo.FirstName ? userinfo.FirstName : ""}
                onChange={handleChangeFirstName}
                className={styles.input}
              />
            </div>

            <div className={styles.input_container}>
              <span className={styles.span}>Last Name</span>
              <input
                required
                type="text"
                placeholder="Last Name"
                value={userinfo.LastName ? userinfo.LastName : ""}
                onChange={handleChangeLastName}
                className={styles.input}
              />
            </div>

            <div className={styles.input_container}>
              <span className={styles.span}>Photo URL</span>
              {userinfo.photo ? (
                <div className={styles.photo}>
                  <img src={userinfo.photo} alt="Icon" />
                </div>
              ) : null}
              <input
                type="text"
                placeholder="Photo URL"
                onChange={handleChangePhoto}
                value={userinfo.photo ? userinfo.photo : ""}
                className={styles.input}
              />
            </div>

            <div className={styles.buttons}>
              <div onClick={close} className={styles.close}>
                Close
              </div>

              <button
                disabled={sendButton}
                className={sendButton ? styles.submited : styles.submit}
                type="submit">
                {sendButton ? "Sending..." : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
