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
    photo: "",
    FirstName: "",
    LastName: "",
  });
  const [posts, setPosts] = useState([{}]);
  const user_icon = auth().username[0];

  const server_url = "https://auth-node.up.railway.app";

  document.title = "Sherbolot Arbaev | Blog";

  const newDate = new Date();
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const day = newDate.getDate();
  const month = months[newDate.getMonth()];
  const year = newDate.getFullYear();

  const date = `${day} ${month}, ${year}`;

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

  useEffect(() => {
    try {
      axios.get(`${server_url}/auth/posts`).then((res) => {
        setPosts(
          res.data.posts.sort((a, b) => new Date(b.date) - new Date(a.date))
        );
      });

      const getUserInfo = async () => {
        await axios
          .post(`${server_url}/auth/profile`, {
            username: auth().username,
          })
          .then((data) => {
            setUserinfo((prev) => ({
              ...prev,
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
      <div className="page_wrapper">
        <h3 className={styles.title_page}>Home › Blog</h3>

        <div className={styles.profile}>
          <div className={styles.profile_top}>
            <h3 className={styles.title}>Profile</h3>

            <Link to="/blog/profile">
              <div className={styles.setting_icon}>
                <img src={setting_icon} alt="Profile Setting" />
              </div>
            </Link>
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
              <h1 className={styles.username}>
                {userinfo.FirstName
                  ? `${userinfo.FirstName} ${userinfo.LastName[0]}`
                  : auth().username}
              </h1>
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
                      <span className={styles.span_today}>Today</span>
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

      <ToastContainer />
    </>
  );
};
