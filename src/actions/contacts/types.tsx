import {
    ADD_CONTACT,
    DELETE_CONTACT,
    GET_CONTACT
} from "../contacts/actionTypes";

export interface IContact {
    id?: string
    fullName: string,
    email: string,
    phoneNumber: string
}

export interface addContactRequest {
    email: string,
    password: string,
    phoneNumber: string
}

export interface addContactPayload {
    contact: IContact
}

export interface addContact {
    type: typeof ADD_CONTACT;
    contact: IContact;
}

export interface deleteContactRequest {
    contactId: string
}

export interface deleteContactPayload {
    contactId: string
}

export interface deleteContact {
    type: typeof DELETE_CONTACT;
    contactId: string
}

export interface deleteContactRequest {
    email: string,
    password: string
}

export interface addContactPayload {
    contact: IContact
}

export interface getContact {
    type: typeof GET_CONTACT;
    contact: IContact;
}

export type UserActions = addContact | getContact | deleteContact;