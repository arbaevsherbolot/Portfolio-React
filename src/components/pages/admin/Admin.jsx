import { useEffect } from "react";
import { useAuthUser } from "react-auth-kit";
import { useSignOut } from "react-auth-kit";
import { useNavigate } from "react-router-dom";
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

  return (
    <>
      {auth() ? (
        <div className="page_wrapper">
          <div className={styles.profile}>
            <img
              src="https://support.signal.org/hc/article_attachments/360083910451/animated-2.gif"
              alt="Icon"
              className={styles.user_img}
            />

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
      ) : null}
    </>
  );
};
