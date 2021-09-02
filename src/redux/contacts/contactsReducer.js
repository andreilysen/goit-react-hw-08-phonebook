import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import * as action from "./contactsAction";

const initialState = {
  items: [],
  loading: false,
  error: "",
};

const contactList = createReducer(initialState, {
  [action.addContacts]: (state, { payload }) => ({
    ...state,
    items: [payload, ...state.items],
  }),
  [action.setContacts]: (state, { payload }) => ({
    ...state,
    items: [...payload],
  }),
  [action.deleteContact]: (state, { payload }) => ({
    ...state,
    items: [...state.items.filter((contact) => contact.id !== payload)],
  }),
  [action.fetchRequest]: (state, { payload }) => ({
    ...state,
    loading: payload,
  }),

  [action.fetchError]: (state, { payload }) => ({
    ...state,
    error: payload,
  }),
});

const filter = createReducer("", {
  [action.addFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  contactList,
  filter,
});
