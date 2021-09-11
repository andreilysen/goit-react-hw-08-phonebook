import React, { useState } from "react";
import { useDispatch } from "react-redux";
import * as userOperation from "../../redux/user/userOperation";
import { Input, Button } from "@material-ui/core";
import styles from "./RegisterForm.module.css";

const RegisterForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "name":
        setName(value);
        break;
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
    setName("");
    setEmail("");
    setPassword("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(userOperation.register({ name, email, password }));
    resetState();
  };
  return (
    <form onSubmit={handleSubmit}>
      <label className={styles.form}>
        <p>Name</p>
        <Input
          className={styles.input}
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          onChange={handleChangeInput}
        />
        <p>Email</p>
        <Input
          className={styles.input}
          type="email"
          name="email"
          value={email}
          required
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
          Register
        </Button>
      </label>
    </form>
  );
};

export default RegisterForm;
