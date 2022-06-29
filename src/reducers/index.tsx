import { combineReducers } from "redux";
import auth from "./auth/auth";
import contacts from "./contacts/contacts";

export default combineReducers({
  auth,
  contacts
});
