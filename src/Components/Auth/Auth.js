import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./Auth.module.css";

const Auth = () => {
  return (
    <div className={styles.authLink}>
      <NavLink className={styles.itemLink} to="/login" exact>
        Login
      </NavLink>
      <p>or</p>
      <NavLink className={styles.itemLink} to="/register">
        Register
      </NavLink>
    </div>
  );
};

export default Auth;
