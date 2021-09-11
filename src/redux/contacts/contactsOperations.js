import * as fetchAPI from "../../service/contacts-API";
import * as actions from "./contactsAction";

export const getContactOperation = () => async (dispatch) => {
  dispatch(actions.fetchRequest(true));
  try {
    const result = await fetchAPI.getContacts();
    dispatch(actions.setContacts(result));
  } catch (error) {
    dispatch(actions.fetchError(error));
  } finally {
    dispatch(actions.fetchRequest(false));
  }
};

export const postContactOperation = (contact) => async (dispatch) => {
  dispatch(actions.fetchRequest(true));
  try {
    const result = await fetchAPI.postContacts(contact);
    dispatch(actions.addContacts(result));
  } catch (error) {
    dispatch(actions.fetchError(error));
  } finally {
    dispatch(actions.fetchRequest(false));
  }
};

export const deleteContactOperation = (id) => async (dispatch) => {
  dispatch(actions.fetchRequest(true));
  try {
    await fetchAPI.deleteContact(id);
    dispatch(actions.deleteContact(id));
  } catch (error) {
    dispatch(actions.fetchError(error));
  } finally {
    dispatch(actions.fetchRequest(false));
  }
};
