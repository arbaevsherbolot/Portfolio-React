import React from "react";
import { Link } from "react-router-dom";
import { useAuthUser } from "react-auth-kit";
import { useSignOut } from "react-auth-kit";
import { Post } from "./post/Post";
import icon from "../../../assets/sherbolot.png";
import post_img from "../../../assets/full-stack.jpg";
import styles from "./Blog.module.scss";

export const Blog = () => {
  const auth = useAuthUser();
  const signOut = useSignOut();

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

  const posts = [
    {
      username: "@thearbaev",
      user_logo: icon,
      user_email: "sherbolot@wedevx.co",
      img: post_img,
      title: "New offer from Meta",
      description:
        "Sherbolot, a talented developer, received an offer from Meta.",
      date: "11-06-2023",
      type: "Development",
    },
    {
      username: "@thearbaev",
      user_logo: icon,
      user_email: "sherbolot@wedevx.co",
      img: "https://mubert.com/blog/wp-content/uploads/2022/01/How-To-Use-Copyrighted-Music-On-nstagram_cover-1080x1080.png",
      title: "Instagram Copy",
      description:
        "Replica of Instagram that offers a familiar interface, enhanced features, and a seamless user experience.",
      date: "25-05-2023",
      type: "Development",
    },
    {
      username: "@apple",
      user_logo: "https://img.freepik.com/free-icon/mac-os_318-10374.jpg",
      user_email: "apple@info.com",
      img: "https://www.apple.com/v/apple-vision-pro/a/images/overview/hero/portrait_base__bwsgtdddcl7m_large.jpg",
      title: "Apple Vision Pro",
      description:
        "Apple Vision Pro seamlessly blends digital content with your physical space.",
      date: "09-06-2023",
      type: "News",
    },
  ];

  return (
    <>
      {auth() ? (
        <div className="page_wrapper">
          <h3 className={styles.title_page}>Home › Blog</h3>

          <div className={styles.profile}>
            <h3 className={styles.title}>Profile</h3>

            <div className={styles.profile_content}>
              <img src={icon} alt="Icon" className={styles.user_img} />

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
            {posts.map((post, i) => (
              <div key={i} className={styles.post}>
                <div className={styles.image_wrapper}>
                  <img src={post.img} alt="Post-Image" className={styles.img} />

                  <Link to="/blog/post">
                    <span className={styles.link}>Read More</span>
                  </Link>
                </div>

                <div className={styles.post_content}>
                  {post.date === date ? (
                    <span className={styles.span}>Today</span>
                  ) : (
                    <span className={styles.span}>{post.type}</span>
                  )}

                  <div className={styles.user}>
                    <div className={styles.logo}>
                      <img src={post.user_logo} alt="User-Logo" />
                    </div>

                    <div className={styles.user_info}>
                      <h3 className={styles.username}>{post.username}</h3>

                      <a href={`mailto:${auth().email}`}>
                        <p className={styles.user_email}>{post.user_email}</p>
                      </a>
                    </div>
                  </div>

                  <div className={styles.text}>
                    <span className={styles.date}>{post.date}</span>
                    <h3 className={styles.title}>{post.title}</h3>
                    <p className={styles.desc}>{post.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </>
  );
};
