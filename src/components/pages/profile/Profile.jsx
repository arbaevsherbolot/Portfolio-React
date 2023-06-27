import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuthUser } from "react-auth-kit";
import { ToastContainer, toast } from "react-toastify";
import styles from "./Profile.module.scss";

export const Profile = () => {
  const [userinfo, setUserinfo] = useState({
    username: "",
    email: "",
    photo: "",
    FirstName: "",
    LastName: "",
  });
  const [sendButton, setSendButton] = useState(false);

  const [error, setError] = useState({
    photoUrlInput: false,
    FirstNameInput: false,
    LastNameInput: false,
  });

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

  const editProfile = async (e) => {
    e.preventDefault();

    try {
      if (checkValidate()) {
        setSendButton(true);

        setInterval(() => {
          setSendButton(false);
        }, 1000);

        notifySuccess();

        await axios.post(`${server_url}/auth/edit/profile`, {
          username: auth().username,
          userinfo: userinfo,
        });
      }
    } catch {
      notifyError();
    }
  };

  const checkValidate = () => {
    if (validate(userinfo.FirstName) || userinfo.FirstName === "") {
      setError((prev) => ({
        ...prev,
        FirstNameInput: true,
      }));
      return false;
    } else if (validate(userinfo.LastName) || userinfo.LastName === "") {
      setError((prev) => ({
        ...prev,
        LastNameInput: true,
      }));
      return false;
    } else if (validate(userinfo.photo) || userinfo.photo === "") {
      setError((prev) => ({
        ...prev,
        photoUrlInput: true,
      }));
      return false;
    } else {
      setError((prev) => ({
        ...prev,
        photoUrlInput: false,
        FirstNameInput: false,
        LastNameInput: false,
      }));
      return true;
    }
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

  const handleChangePhoto = (e) => {
    setUserinfo((prev) => ({
      ...prev,
      photo: e.target.value,
    }));
  };

  const validate = (i) => {
    const regex = /[!@#$%^*()+[\]{};'"\\?|,<>]/;
    return regex.test(i);
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

  return (
    <>
      <div className={styles.page_wrapper}>
        <div className={styles.page_container}>
          <ToastContainer />

          <div className={styles.title_wrapper}>
            <h3 className={styles.title}>Profile Information</h3>
          </div>

          <form onSubmit={editProfile} className={styles.form}>
            <div className={styles.input_container}>
              <span className={styles.span}>First Name</span>
              <input
                type="text"
                placeholder="First Name"
                value={userinfo.FirstName ? userinfo.FirstName : ""}
                onChange={handleChangeFirstName}
                className={
                  error.FirstNameInput ? styles.input_error : styles.input
                }
              />
            </div>

            <div className={styles.input_container}>
              <span className={styles.span}>Last Name</span>
              <input
                type="text"
                placeholder="Last Name"
                value={userinfo.LastName ? userinfo.LastName : ""}
                onChange={handleChangeLastName}
                className={
                  error.LastNameInput ? styles.input_error : styles.input
                }
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
                className={
                  error.photoUrlInput ? styles.input_error : styles.input
                }
              />
            </div>

            <div className={styles.buttons}>
              <Link to="/blog">
                <div className={styles.close}>Close</div>
              </Link>

              <button
                disabled={sendButton}
                className={sendButton ? styles.submited : styles.submit}
                type="submit">
                Update Profile
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
