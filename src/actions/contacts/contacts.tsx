import * as types from '../contacts/actionTypes';
import {
  IContact,
} from './types';

export const addContactsAction = (contact: IContact) => {
  return {
    type: types.ADD_CONTACT,
    contact
  }
};

export const getContactsAction = () => {
  return {
    type: types.GET_CONTACT,
  }
};

export const deleteContactsAction = (contactId: string) => {
  return {
    type: types.DELETE_CONTACT,
    contactId
  }
};