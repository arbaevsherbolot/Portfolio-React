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
        <div className={styles.post}>
          <div className={styles.image_wrapper}>
            <img src={post[0].img} alt="Post-Image" className={styles.img} />
          </div>
          <div className={styles.post_content}>
            <Link className={styles.link} to="/blog">
              ◀ Back to Blog
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

            <div className={styles.text}>
              <span className={styles.date}>{post[0].date}</span>
              <div className={styles.title}>
                <h3>{post[0].title}</h3>

                {post.date === date ? (
                  <span className={styles.span}>Today</span>
                ) : (
                  <span className={styles.span}>{post[0].type}</span>
                )}
              </div>

              <p className={styles.desc}>{post[0].description}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
