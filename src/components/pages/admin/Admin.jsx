import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./Admin.module.scss";

export const Admin = () => {
  const [data, setData] = useState(null);

  const API_URL = "http://localhost:3898/api/getData";

  const fetchUsers = async () => {
    const response = await axios.get(API_URL);
    const data = response.data;
    setData(data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
      <div className="page_wrapper">
        <div className={styles.table_container}>
          <table className={styles.table}>
            <tbody>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Subject</th>
                <th>Message</th>
              </tr>
              {!data ? (
                <tr>
                  <td>Loading...</td>
                  <td>Loading...</td>
                  <td>Loading...</td>
                  <td>Loading...</td>
                </tr>
              ) : (
                data.map((item) => (
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>
                      <a href={`mailto:${item.email}`}>{item.email}</a>
                    </td>
                    <td>{item.subject}</td>
                    <td>{item.message}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
