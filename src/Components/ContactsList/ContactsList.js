import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "react-loader-spinner";

import ContactListItem from "./ContactListItem";
import { getContactOperation } from "../../redux/contacts/contactsOperations";
import {
  contactList,
  contactLoad,
  contactError,
} from "../../redux/contacts/contacts-selectors";
import styles from "./Contact.module.css";

const ContactsList = () => {
  const items = useSelector((state) => contactList(state));
  const loading = useSelector((state) => contactLoad(state));
  const error = useSelector((state) => contactError(state));
  const { filter } = useSelector((state) => state.contacts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getContactOperation());
  }, [dispatch]);

  if (loading) {
    return <Loader type="Puff" color="#00BFFF" height={100} width={100} />;
  }

  if (error) {
    return <h1>{contactList.error}</h1>;
  }

  const filterContact = items.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    items.length > 0 && (
      <ul className={styles.list}>
        {filterContact.map(({ id, name, number }) => (
          <ContactListItem key={id} id={id} name={name} number={number} />
        ))}
      </ul>
    )
  );
};

export default ContactsList;
