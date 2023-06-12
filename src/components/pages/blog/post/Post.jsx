import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useAuthUser } from "react-auth-kit";
import icon from "../../../../assets/sherbolot.png";
import back_icon from "../../../../assets/svg/back.svg";
import styles from "./Post.module.scss";

export const Post = () => {
  const { id } = useParams();
  const [post, setPost] = useState([{}]);
  const auth = useAuthUser();
  const navigate = useNavigate();
  const newDate = new Date();
  const date = `${
    newDate.getDate() < 10 ? `0${newDate.getDate()}` : newDate.getDate()
  }-${
    newDate.getMonth() + 1 < 10
      ? `0${newDate.getMonth() + 1}`
      : newDate.getMonth() + 1
  }-${newDate.getFullYear()}`;

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
              <Link to="/blog">
                <img src={back_icon} alt="Back-Icon" />
              </Link>

              <div className={styles.userdata}>
                <div className={styles.user_logo}>
                  <img
                    src="https://www.getillustrations.com/photos/pack/3d-avatar-male_lg.png"
                    alt="User-Logo"
                  />
                </div>

                <div className={styles.user_info}>
                  <h3 className={styles.username}>Sherbolot Arbaev</h3>

                  <p className={styles.date}>{post[0].date}</p>
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

                {post.date === date ? (
                  <span className={styles.span}>Today</span>
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
