import React, { useState } from "react";
import axios from "axios";
import styles from "./Contact.module.scss";

export const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

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

    try {
      await axios.post(
        "https://blush-dhole-shoe.cyclic.app/api/sendToDataBase",
        {
          name,
          email,
          subject,
          message,
        }
      );
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
          <div>
            <div className={styles.box_img}>Contact me</div>
          </div>
          <form onSubmit={sendData} className={styles.form}>
            <div className={styles.label}>Name*</div>
            <input
              required
              className={styles.input}
              type="text"
              value={name}
              placeholder="Type your Full Name"
              onChange={handleChangeName}
            />
            <span id="errName"></span>

            <div className={styles.label}>E-mail*</div>
            <input
              required
              className={styles.input}
              type="text"
              value={email}
              placeholder="Type your E-mail adress"
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

            <button className={styles.form_btn} type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
