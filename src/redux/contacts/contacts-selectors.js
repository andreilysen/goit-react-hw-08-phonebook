// import { createSelector } from "reselect";

export const contactList = (state) => state.contacts.contactList.items;
export const contactLoad = (state) => state.contacts.contactList.loading;
export const contactError = (state) => state.contacts.contactList.error;
