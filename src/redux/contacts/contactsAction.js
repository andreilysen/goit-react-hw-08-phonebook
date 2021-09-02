import { createAction } from "@reduxjs/toolkit";

export const addContacts = createAction("addContacts");
export const setContacts = createAction("setContacts");
export const fetchRequest = createAction("fetchStartRequest");
export const fetchSuccess = createAction("fetchSuccess");
export const fetchError = createAction("fetchError");
export const addFilter = createAction("addFilter");
export const deleteContact = createAction("deleteContact");
