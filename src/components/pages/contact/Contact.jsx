import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./Contact.module.scss";

export const Contact = () => {
  document.title = "Sherbolot Arbaev | Contact";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [isSend, setIsSend] = useState(false);

  const [sendButton, setSendButton] = useState(false);

  const TOKEN = "6251110774:AAENSV5zQS3Avog_97IvhgyvU-9go3AdfXs";
  const CHAT_ID = "-1001957930860";
  const API_URL = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

  const messageModel = () => {
    let messageTG = `Name: <b>${name}</b>\n`;
    messageTG += `Email: <b>${email}</b>\n`;
    messageTG += `Subject: <b>${subject}</b>\n`;
    messageTG += `Message: <b>${message}</b>\n`;

    return messageTG;
  };

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangeSubject = (e) => {
    setSubject(e.target.value);
  };

  const handleChangeMessage = (e) => {
    setMessage(e.target.value);
  };

  const notify = () => {
    toast.success("Your form has been submitted successfully!", {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  async function sendData(e) {
    e.preventDefault();

    if (!validateName(name)) {
      errName.innerText = "Please enter a valid name!";
      return;
    } else if (!validateEmail(email)) {
      errEmail.innerText = "Please enter a valid e-mail adress!";
      errName.innerText = "";
      return;
    } else {
      errName.innerText = "";
      errEmail.innerText = "";
    }

    setName("");
    setEmail("");
    setSubject("");
    setMessage("");

    errName.innerText = "";
    errEmail.innerText = "";

    notify();

    setSendButton(!sendButton);

    try {
      await axios.post(API_URL, {
        chat_id: CHAT_ID,
        parse_mode: "html",
        text: messageModel(),
      });

      setIsSend(!isSend);

      setInterval(() => {
        setIsSend(isSend);
      }, 6000);

      setSendButton(sendButton);
    } catch (err) {
      console.log(err);
    }
  }

  const validateName = (nameS) => {
    const regex = /^[\w\s]{2,30}$/;
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
            <div className={styles.label}>Name*</div>
            <input
              required
              className={styles.input}
              type="text"
              value={name}
              onChange={handleChangeName}
            />
            <span id="errName"></span>

            <div className={styles.label}>E-mail*</div>
            <input
              required
              className={styles.input}
              type="text"
              value={email}
              onChange={handleChangeEmail}
            />
            <span id="errEmail"></span>

            <div className={styles.label}>Subject*</div>
            <input
              required
              className={styles.input}
              type="text"
              value={subject}
              onChange={handleChangeSubject}
            />

            <div className={styles.label}>Message</div>
            <textarea
              rows={8}
              className={styles.textarea}
              value={message}
              onChange={handleChangeMessage}></textarea>

            <button
              className={sendButton ? styles.form_btn_send : styles.form_btn}
              type="submit">
              {sendButton ? "Sending..." : "Submit"}
            </button>
          </form>
          <ToastContainer
            position="bottom-center"
            autoClose={6000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          />
        </div>
      </div>
    </>
  );
};
