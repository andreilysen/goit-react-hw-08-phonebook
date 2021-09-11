import React from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../redux/contacts/contactsAction";
import { Input } from "@material-ui/core";
import styles from "../Form/Form.module.css";

const Filter = () => {
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  return (
    <>
      <p>Find contacts by name</p>
      <Input
        className={styles.input}
        type="text"
        name="filter"
        value={filter}
        onChange={(query) => dispatch(actions.addFilter(query.target.value))}
      />
    </>
  );
};

export default Filter;
