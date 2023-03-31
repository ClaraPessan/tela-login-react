import React from "react";
import Form from "../Form/Index";
import styles from "./Login.module.scss";

export default function Login() {

  return (
    <section className={styles.box}>
      <div>
        <h2 className={styles.box__titulo}>WELCOME</h2>
        <Form />
      </div>
    </section>
  );
}
