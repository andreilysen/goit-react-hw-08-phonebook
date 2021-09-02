import axios from "axios";

export const getContacts = async () => {
  const { data } = await axios.get("http://localhost:7777/contacts");
  return data;
};

export const postContacts = async (query) => {
  const { data } = await axios.post("http://localhost:7777/contacts", query);
  return data;
};

export const deleteContact = async (id) => {
  const { data } = await axios.delete(`http://localhost:7777/contacts/${id}`);
  return data;
};
