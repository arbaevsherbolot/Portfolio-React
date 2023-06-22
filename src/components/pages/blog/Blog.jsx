import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useAuthUser, useSignOut } from "react-auth-kit";
import { ToastContainer, toast } from "react-toastify";
import icon from "../../../assets/svg/IOS.svg";
import setting_icon from "../../../assets/svg/setting.svg";
import styles from "./Blog.module.scss";

export const Blog = () => {
  const auth = useAuthUser();
  const signOut = useSignOut();
  const [userinfo, setUserinfo] = useState({
    username: "",
    email: "",
    photo: "",
    FirstName: "",
    LastName: "",
  });
  const [posts, setPosts] = useState([{}]);
  const [sendButton, setSendButton] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const user_icon = auth().username[0];

  const server_url = "https://auth-node.up.railway.app";

  document.title = "Sherbolot Arbaev | Blog";

  const newDate = new Date();
  const date = `${
    newDate.getDate() < 10 ? `0${newDate.getDate()}` : newDate.getDate()
  }-${
    newDate.getMonth() + 1 < 10
      ? `0${newDate.getMonth() + 1}`
      : newDate.getMonth() + 1
  }-${newDate.getFullYear()}`;

  const HandleSignOut = () => {
    signOut();
  };

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

  const notifySuccess = () => {
    toast.success("Your profile updated successfully!", {
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

  const handleModal = () => {
    setIsOpen(!isOpen);
  };

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

  useEffect(() => {
    try {
      axios.get(`${server_url}/auth/posts`).then((res) => {
        setPosts(res.data.posts);
      });

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

  return (
    <>
      <div className="page_wrapper">
        <h3 className={styles.title_page}>Home › Blog</h3>

        <div className={styles.profile}>
          <div className={styles.profile_top}>
            <h3 className={styles.title}>Profile</h3>

            <div onClick={handleModal} className={styles.setting_icon}>
              <img src={setting_icon} alt="Profile Setting" />
            </div>
          </div>

          <div className={styles.profile_content}>
            <div className={styles.user_img}>
              {userinfo.photo ? (
                <img src={userinfo.photo} alt="Icon" />
              ) : (
                <span>{user_icon}</span>
              )}
            </div>

            <div className={styles.user_data}>
              <h1 className={styles.username}>{auth().username}</h1>
              <a href={`mailto:${auth().email}`}>
                <p className={styles.email}>{auth().email}</p>
              </a>
            </div>

            <button className={styles.btn} onClick={HandleSignOut}>
              Sign Out
            </button>
          </div>
        </div>

        <div className={styles.content}>
          {posts
            ? posts.map((post, i) => (
                <div key={i} className={styles.post}>
                  <Link to={`/blog/post/${post.id}`}>
                    <div className={styles.image_wrapper}>
                      <img
                        src={post.img}
                        alt="Post-Image"
                        className={styles.img}
                      />

                      <span className={styles.link}>Read More</span>
                    </div>
                  </Link>

                  <div className={styles.post_content}>
                    {post.date === date ? (
                      <span className={styles.span}>Today</span>
                    ) : (
                      <span className={styles.span}>{post.type}</span>
                    )}

                    <div className={styles.user}>
                      <div className={styles.logo}>
                        <img src={icon} alt="User-Logo" />
                      </div>

                      <div className={styles.user_info}>
                        <h3 className={styles.username}>Sherbolot Arbaev</h3>

                        {/* <a href={`mailto:${auth().email}`}>
                          <p className={styles.user_email}>{auth().email}</p>
                        </a> */}
                      </div>
                    </div>

                    <Link to={`/blog/post/${post.id}`}>
                      <div className={styles.text}>
                        <span className={styles.date}>{post.date}</span>
                        <h3 className={styles.title}>{post.title}</h3>
                        <p className={styles.desc}>{post.short_desc}</p>
                      </div>
                    </Link>
                  </div>
                </div>
              ))
            : null}
        </div>
      </div>

      <div
        className={isOpen ? styles.modal_wrapper_open : styles.modal_wrapper}>
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
              <div onClick={handleModal} className={styles.close}>
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
