import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Container from "../Container";
import { Switch, Route, Redirect } from "react-router-dom";
import Heder from "../Heder";
import { ContactPage } from "../../pages/ContactPage";
import { LoginPage } from "../../pages/LoginPage";
import { RegisterPage } from "../../pages/RegisterPage";
import {
  getIsloggedIn,
  getToken,
  isLoading,
} from "../../redux/user/userSelector";
import { currentUser } from "../../redux/user/userOperation";
import Loader from "../Loader";

// import styles from "./App.module.css";

const App = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => getIsloggedIn(state));
  const token = useSelector((state) => getToken(state));
  const loading = useSelector((state) => isLoading(state));

  useEffect(() => {
    dispatch(currentUser(token));
  }, [dispatch, token]);

  return (
    <Container>
      <h2>Phonebook</h2>
      <Heder />
      {loading ? (
        <Loader />
      ) : (
        <Switch>
          <Route path="/contacts">
            {isLoggedIn ? <ContactPage /> : <Redirect to="/login" />}
          </Route>
          <Route path="/login">
            {!isLoggedIn ? <LoginPage /> : <Redirect to="/contacts" />}
          </Route>
          <Route path="/register">
            {!isLoggedIn ? <RegisterPage /> : <Redirect to="/contacts" />}
          </Route>
        </Switch>
      )}
    </Container>
  );
};

export default App;
