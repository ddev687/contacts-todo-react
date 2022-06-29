import { IContact } from "../../actions/contacts/types";
import API from '../../api/api'

const addContact = (payload: IContact) => API('contact/create', null, 'POST', payload);

const deleteContact = (contactId: string) => API(`contact/delete/${contactId}`, null, 'DELETE', null);

const getContacts = () => API(`contact/getAll`, null, 'GET', null);

export {
    addContact,
    deleteContact,
    getContacts,
};