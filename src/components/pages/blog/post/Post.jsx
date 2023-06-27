import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { useAuthUser } from "react-auth-kit";
import back_icon from "../../../../assets/svg/back.svg";
import icon from "../../../../assets/svg/IOS.svg";
import unliked_icon from "../../../../assets/svg/like1.svg";
import liked_icon from "../../../../assets/svg/like2.svg";
import styles from "./Post.module.scss";

export const Post = () => {
  const { id } = useParams();
  const [post, setPost] = useState([{}]);

  const auth = useAuthUser();

  if (!auth()) {
    return null;
  }

  document.title = `Sherbolot Arbaev | ${
    post[0].title ? post[0].title : `Blog`
  }`;

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

  const server_url = `https://auth-node.up.railway.app/auth/post/${id}`;

  useEffect(() => {
    axios.get(`${server_url}`).then((res) => {
      setPost(res.data.post);
    });
  }, []);
  return (
    <>
      <div className={styles.post_page}>
        {post ? (
          <div className={styles.post}>
            <div className={styles.post_author}>
              <div className={styles.left}>
                <Link to="/blog">
                  <img
                    className={styles.back_icon}
                    src={back_icon}
                    alt="Back-Icon"
                  />
                </Link>

                <div className={styles.userdata}>
                  <div className={styles.user_logo}>
                    <img src={icon} alt="User-Logo" />
                  </div>

                  <div className={styles.user_info}>
                    <h3 className={styles.username}>Sherbolot Arbaev</h3>

                    <p className={styles.date}>{post[0].date}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.post_content}>
              <div className={styles.image_wrapper}>
                <img
                  src={post[0].img}
                  alt={`${post[0].title}`}
                  className={styles.img}
                />
              </div>

              <div className={styles.header}>
                <h3 className={styles.title}>{post[0].title}</h3>

                {post[0].date === date ? (
                  <span className={`${styles.span} ${styles.today}`}>
                    #Today
                  </span>
                ) : (
                  <span className={styles.span}>#{post[0].type}</span>
                )}
              </div>

              <p className={styles.desc}>{post[0].description}</p>

              <h3 className={styles.subtitle}>1.{post[0].subtitle}</h3>
              <p className={styles.desc}>{post[0].description2}</p>

              <div className={styles.image_wrapper}>
                <img
                  src={post[0].img2}
                  alt={`${post[0].title}`}
                  className={styles.img}
                />
              </div>

              <h3 className={styles.subtitle}>2.{post[0].subtitle2}</h3>
              <p className={styles.desc}>{post[0].description3}</p>

              <h3 className={styles.subtitle}>3.{post[0].subtitle3}</h3>
              <p className={styles.desc}>{post[0].description4}</p>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
};
