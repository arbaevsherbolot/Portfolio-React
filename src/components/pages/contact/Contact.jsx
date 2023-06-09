import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./Contact.module.scss";

export const Contact = () => {
  document.title = "Sherbolot Arbaev | Contact";

  const [data, setData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSend, setIsSend] = useState(false);
  const [sendButton, setSendButton] = useState(false);
  const [errors, setErrors] = useState({
    name: "",
    status: false,
    message: "",
  });

  const TOKEN = "6041880464:AAGK4k-f1Ym0eK1RK67wwE0AQ5Xh2VTBy2s";
  const CHAT_ID = "-1001509773637";
  const API_URL = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

  const messageModel = () => {
    let messageTG = `Name: <b>${data.name}</b>\n`;
    messageTG += `Email: <b>${data.email}</b>\n`;
    messageTG += `Subject: <b>${data.subject}</b>\n`;
    messageTG += `Message: <b>${data.message}</b>\n`;

    return messageTG;
  };

  const handleChangeName = (e) => {
    setData((prev) => ({
      ...prev,
      name: e.target.value,
    }));
  };

  const handleChangeEmail = (e) => {
    setData((prev) => ({
      ...prev,
      email: e.target.value,
    }));
  };

  const handleChangeSubject = (e) => {
    setData((prev) => ({
      ...prev,
      subject: e.target.value,
    }));
  };

  const handleChangeMessage = (e) => {
    setData((prev) => ({
      ...prev,
      message: e.target.value,
    }));
  };

  const notify = () => {
    toast.success("Your form has been submitted successfully!", {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  async function sendData(e) {
    e.preventDefault();

    if (!validateName(data.name)) {
      setErrors((prev) => ({
        ...prev,
        name: "Name",
        status: true,
        message: "Please enter a valid name! example: (Sherbolot Arbaev)",
      }));
      return;
    } else if (!validateEmail(data.email)) {
      setErrors((prev) => ({
        ...prev,
        name: "Email",
        status: true,
        message:
          "Please enter a valid email adress! example: (example@example.com)",
      }));
      return;
    } else {
      setErrors((prev) => ({
        ...prev,
        name: "",
        status: false,
        message: "",
      }));
    }

    setSendButton(!sendButton);

    try {
      await axios.post(API_URL, {
        chat_id: CHAT_ID,
        parse_mode: "html",
        text: messageModel(),
      });

      setData((prev) => ({
        ...prev,
        name: "",
        email: "",
        subject: "",
        message: "",
      }));

      notify();

      setIsSend(!isSend);

      setInterval(() => {
        setIsSend(isSend);
      }, 6000);

      setSendButton(sendButton);
    } catch (err) {
      alert(err.message);
    }
  }

  const validateName = (nameS) => {
    const regex = /^[a-zA-Z]+ [a-zA-Z]+$/;
    return regex.test(nameS);
  };

  const validateEmail = (emailS) => {
    const regex = /^\S+@\S+\.\S+$/;
    return regex.test(emailS);
  };

  return (
    <>
      <div className={styles.contact_page}>
        <div className={styles.form_wrapper}>
          <div className={styles.box}>
            <div className={isSend ? styles.box_img_send : styles.box_img}>
              Contact me
            </div>
          </div>
          <form onSubmit={sendData} className={styles.form}>
            <div className={styles.label}>Full Name*</div>
            <input
              required
              className={styles.input}
              type="text"
              placeholder="Name"
              value={data.name}
              onChange={handleChangeName}
            />

            {errors.name === "Name" && errors.status === true ? (
              <span className={styles.error}>{errors.message}</span>
            ) : null}

            <div className={styles.label}>Email*</div>
            <input
              required
              className={styles.input}
              type="text"
              placeholder="Email"
              value={data.email}
              onChange={handleChangeEmail}
            />
            {errors.name === "Email" && errors.status === true ? (
              <span className={styles.error}>{errors.message}</span>
            ) : null}

            <div className={styles.label}>Subject*</div>
            <input
              required
              className={styles.input}
              type="text"
              placeholder="Subject"
              value={data.subject}
              onChange={handleChangeSubject}
            />

            <div className={styles.label}>Message</div>
            <textarea
              rows={8}
              className={styles.textarea}
              value={data.message}
              onChange={handleChangeMessage}></textarea>

            <button
              disabled={sendButton}
              className={sendButton ? styles.form_btn_send : styles.form_btn}
              type="submit">
              {sendButton ? "Sending..." : "Submit"}
            </button>
          </form>
          <ToastContainer />
        </div>
      </div>
    </>
  );
};
