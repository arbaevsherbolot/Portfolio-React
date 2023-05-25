import { useEffect } from "react";
import { useAuthUser } from "react-auth-kit";
import { useSignOut } from "react-auth-kit";
import { useNavigate } from "react-router-dom";
import icon from "../../../assets/ios_programmer.png";
import post_img from "../../../assets/full-stack.jpg";
import styles from "./Admin.module.scss";

export const Admin = () => {
  const auth = useAuthUser();
  const signOut = useSignOut();

  const navigate = useNavigate();

  document.title = "Sherbolot Arbaev | Admin";

  const HandleSignOut = () => {
    signOut();
  };

  useEffect(() => {
    const HandleNavigate = () => {
      if (auth()) {
        navigate("/admin");
      } else {
        navigate("/login");
      }
    };

    HandleNavigate();
  });

  const posts = [
    {
      img: post_img,
      title: "Sherbolot Arbaev",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Aliquam eos inventore vel distinctio nesciunt asperiores dolore nemo eveniet iusto nihil laborum velit amet magni,nostrum totam cupiditate accusamus similique eius?",
      date: "25-05-2023",
    },
    {
      img: post_img,
      title: "Sherbolot Arbaev",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Aliquam eos inventore vel distinctio nesciunt asperiores dolore nemo eveniet iusto nihil laborum velit amet magni,nostrum totam cupiditate accusamus similique eius?",
      date: "25-05-2023",
    },
    {
      img: post_img,
      title: "Sherbolot Arbaev",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Aliquam eos inventore vel distinctio nesciunt asperiores dolore nemo eveniet iusto nihil laborum velit amet magni,nostrum totam cupiditate accusamus similique eius?",
      date: "25-05-2023",
    },
  ];

  return (
    <>
      {auth() ? (
        <div className="page_wrapper">
          <h3 className={styles.title_page}>Admin Page</h3>

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
                <img src={post.img} alt="Post-Image" className={styles.img} />

                <div className={styles.text}>
                  <span className={styles.date}>{post.date}</span>
                  <h3 className={styles.title}>{post.title}</h3>
                  <p className={styles.desc}>{post.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </>
  );
};
