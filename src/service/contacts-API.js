import axios from "axios";

export const getContacts = async () => {
  const { data } = await axios.get("/contacts");
  return data;
};

export const postContacts = async (query) => {
  const { data } = await axios.post("/contacts", query);
  return data;
};

export const deleteContact = async (id) => {
  const { data } = await axios.delete(`/contacts/${id}`);
  return data;
};
