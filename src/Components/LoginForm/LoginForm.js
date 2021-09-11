import React, { useState } from "react";
import { useDispatch } from "react-redux";
import * as userOperation from "../../redux/user/userOperation";
import { Input, Button } from "@material-ui/core";
import styles from "./LoginForm.module.css";

const LoginForm = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        return;
    }
  };

  const resetState = () => {
    setEmail("");
    setPassword("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(userOperation.loginUser({ email, password }));
    resetState();
  };
  return (
    <form onSubmit={handleSubmit}>
      <label className={styles.form}>
        <p>Email</p>
        <Input
          className={styles.input}
          type="text"
          name="email"
          value={email}
          onChange={handleChangeInput}
        />
        <p>Password</p>
        <Input
          className={styles.input}
          type="password"
          minLength="5"
          name="password"
          value={password}
          required
          onChange={handleChangeInput}
        />
        <Button type="submit" variant="contained" color="primary">
          Log In
        </Button>
      </label>
    </form>
  );
};

export default LoginForm;
