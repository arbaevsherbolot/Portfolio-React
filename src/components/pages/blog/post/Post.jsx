import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useAuthUser } from "react-auth-kit";
import icon from "../../../../assets/sherbolot.png";
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
            <div className={styles.post_content}>
              <div className={styles.post_content_top}>
                <Link className={styles.link} to="/blog">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round">
                    <line x1="19" y1="12" x2="5" y2="12"></line>
                    <polyline points="12 19 5 12 12 5"></polyline>
                  </svg>
                </Link>

                <div className={styles.user}>
                  <div className={styles.logo}>
                    <img src={icon} alt="User-Logo" />
                  </div>

                  <div className={styles.user_info}>
                    <h3 className={styles.username}>{auth().username}</h3>

                    <a href={`mailto:${auth().email}`}>
                      <p className={styles.user_email}>{auth().email}</p>
                    </a>
                  </div>
                </div>
              </div>

              <div className={styles.image_wrapper}>
                <img
                  src={post[0].img}
                  alt="Post-Image"
                  className={styles.img}
                />

                {post.date === date ? (
                  <span className={styles.span}>Today</span>
                ) : (
                  <span className={styles.span}>{post[0].type}</span>
                )}
              </div>

              <div className={styles.post_content_bottom}>
                <span className={styles.date}>{post[0].date}</span>

                <h3 className={styles.title}>{post[0].title}</h3>
                <p className={styles.desc}>{post[0].description}</p>

                <h3 className={styles.subtitle}>{post[0].subtitle}</h3>
                <p className={styles.desc}>{post[0].description2}</p>

                <div className={styles.image_wrapper2}>
                  <img
                    src={post[0].img2}
                    alt="Post-Image2"
                    className={styles.img}
                  />
                </div>

                <h3 className={styles.subtitle}>{post[0].subtitle2}</h3>
                <p className={styles.desc}>{post[0].description3}</p>

                <h3 className={styles.subtitle}>{post[0].subtitle3}</h3>
                <p className={styles.desc}>{post[0].description4}</p>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
};
