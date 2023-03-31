import React, { useState } from "react";
import Input from "../Input/Index";
import Label from "../Label/Index";
import Button from "../Button/Index";
import styles from "./Form.module.scss";

export default function Form() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginMessage, setLoginMessage] = useState("");

  const enviaForm = (event) => {
    event.preventDefault();

    fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username,
        password,
      })
    })
    .then(res => res.json())
    .then(data => {
      if (data.message === 'Invalid credentials') {
        setLoginMessage("Nome de usuário ou senha incorretos. Tente novamente.");
      } else {
        setLoginMessage("Login realizado com sucesso!");
        setUsername('');
        setPassword('');
      }
      setTimeout(() => {
        setLoginMessage('')
      }, 3000)
    });
  };

  return (
    <form className={styles.form} onSubmit={enviaForm}>
      {loginMessage && 
        <div className={`${styles.message} 
          ${loginMessage
            === 'Login realizado com sucesso!' 
            ? styles['login-sucesso'] 
            : styles['login-incorreto']}`
          }>{loginMessage}
        </div>
      }
      <Label label="username:" />
      <Input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      <Label label="password:" />
      <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <div className={styles.form__button}>
        <Button button="login" />
      </div>
    </form>
  );
}
