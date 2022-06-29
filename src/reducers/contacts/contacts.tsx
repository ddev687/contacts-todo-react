/* eslint-disable import/no-anonymous-default-export */
import { uniq } from 'lodash' 
import {
    ADD_CONTACT,
    ADD_CONTACT_SUCCESS,
    ADD_CONTACT_FAIL,
    DELETE_CONTACT,
    DELETE_CONTACT_SUCCESS,
    DELETE_CONTACT_FAIL,
    GET_CONTACT,
    GET_CONTACT_SUCCESS,
    GET_CONTACT_FAIL,
} from "../../actions/contacts/actionTypes";
import { IContact } from "../../actions/contacts/types";
const initialState = {
    contacts: [],
    isLoading: false
}
export default function (state = initialState, action: { type: string; payload: any; }) {
    const { type, payload } = action;
    switch (type) {
        case ADD_CONTACT:
            return {
                ...state,
                isLoading: true
            };
        case ADD_CONTACT_SUCCESS:
            return {
                ...state,
                //@ts-ignore
                contacts: [...state.contacts, payload],
                isLoading: false,
                error: null
            };
        case ADD_CONTACT_FAIL:
            return {
                ...state,
                isLoading: false,
                error: payload 
            };
        case DELETE_CONTACT:
            return {
                ...state,
            };
        case DELETE_CONTACT_SUCCESS:
            return {
                ...state,
                contacts: state.contacts.filter((contact: IContact) => contact.id !== payload)
            };
        case DELETE_CONTACT_FAIL:
            return {
                ...state,
            };
        case GET_CONTACT:
            return {
                ...state,
            };
        case GET_CONTACT_SUCCESS:
            return {
                ...state,
                contacts: uniq([...state.contacts, ...payload])
            };
        case GET_CONTACT_FAIL:
            return {
                ...state,
            };
        default:
            return state;
    }
}