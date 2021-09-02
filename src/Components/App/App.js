import React from "react";
import Form from "../Form";
import Filter from "../Filter";
import ContactsList from "../ContactsList";
import styles from "./App.module.css";

const App = () => {
  return (
    <div className={styles.container}>
      <h2>Phonebook</h2>
      <Form />

      <h2>Contacts</h2>
      <Filter />
      <ContactsList />
    </div>
  );
};

export default App;
