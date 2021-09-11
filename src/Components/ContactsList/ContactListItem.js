import React from "react";
import { useDispatch } from "react-redux";
import * as actions from "../../redux/contacts/contactsOperations";
import PropTypes from "prop-types";
import { IconButton } from "@material-ui/core";
import styles from "./Contact.module.css";
import Delete from "@material-ui/icons/Delete";
const ContactListItem = ({ name, number, id }) => {
  const dispatch = useDispatch();

  const onClickRemove = (id) => {
    dispatch(actions.deleteContactOperation(id));
  };

  return (
    <li className={styles.items}>
      <p className={styles.item}>{name}:</p>
      <p className={styles.item}>{number}</p>
      <IconButton
        aria-label="delete"
        className={styles.button}
        onClick={() => onClickRemove(id)}
      >
        <Delete />
      </IconButton>
      {/* <button className={styles.button} onClick={() => onClickRemove(id)}>
        X
      </button> */}
    </li>
  );
};

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactListItem;
// onClick={() => onClickRemove(id)
