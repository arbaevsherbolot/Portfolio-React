import React from 'react';
import { useAuthUser } from "react-auth-kit";
import { useSignOut } from "react-auth-kit";
import icon from "../../../assets/ios_programmer.png";
import post_img from "../../../assets/full-stack.jpg";
import styles from "./Admin.module.scss";

export const Admin = () => {
  const auth = useAuthUser();
  const signOut = useSignOut();

  document.title = "Sherbolot Arbaev | Admin";

  const HandleSignOut = () => {
    signOut();
  };

  const posts = [
    {
      img: post_img,
      title: "Sherbolot Arbaev",
      description:
        "Sherbolot, a talented developer, received an offer from Meta.",
      date: "25-05-2023",
    },
    {
      img: post_img,
      title: "Sherbolot Arbaev",
      description:
        "Sherbolot, a talented developer, received an offer from Meta.",
      date: "25-05-2023",
    },
    {
      img: post_img,
      title: "Sherbolot Arbaev",
      description:
        "Sherbolot, a talented developer, received an offer from Meta.",
      date: "25-05-2023",
    },
  ];

  return (
    <>
      {auth() ? (
        <div className="page_wrapper">
          <h3 className={styles.title_page}>Home › Admin</h3>

          <div className={styles.profile}>
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

          <div className={styles.content}>
            {posts.map((post, i) => (
              <div key={i} className={styles.post}>
                <div className={styles.image_wrapper}>
                  <img src={post.img} alt="Post-Image" className={styles.img} />
                </div>

                <div className={styles.post_content}>
                  <span className={styles.span}>New</span>

                  <div className={styles.text}>
                    <h3 className={styles.title}>{post.title}</h3>
                    <span className={styles.date}>{post.date}</span>
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
