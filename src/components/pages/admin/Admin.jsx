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
        "Sherbolot, a talented developer, received an offer from Meta, the renowned technology company. Impressed by his skills, Meta invited him for an interview. After showcasing his expertise and sharing his vision, Sherbolot was thrilled to receive an email congratulating him on being hired as a senior software engineer. He eagerly accepted the offer, ready to contribute to Meta's groundbreaking projects and shape the future of technology.",
      date: "25-05-2023",
    },
    {
      img: "https://digitalmagazine.pt/wp-content/uploads/2023/01/STUDIO23-Blog-DesignTrend.png",
      title: "Design Trends",
      description:
        "In the ever-evolving world of design, 2023 promises to be an exciting year marked by fresh ideas, innovative approaches, and a blend of traditional and futuristic elements. This year's design trends showcase a harmonious balance between simplicity and complexity, sustainability and technological advancements, as well as a celebration of diverse cultural influences. ",
      date: "30-05-2023",
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
