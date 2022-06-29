import { put, call } from 'redux-saga/effects';
import { addContact, deleteContact, getContacts } from '../../services/contacts/contacts.service';
import * as contactTypes from '../../actions/contacts/types';
import { ADD_CONTACT_FAIL, ADD_CONTACT_SUCCESS, DELETE_CONTACT_FAIL, DELETE_CONTACT_SUCCESS, GET_CONTACT_FAIL, GET_CONTACT_SUCCESS } from '../../actions/contacts/actionTypes';

export interface ResponseGenerator{
  config?:any,
  data?:any,
  headers?:any,
  request?:any,
  status?:number,
  statusText?:string
}

export function* addContactSaga(payload: any) {
  try {
    const response: ResponseGenerator = yield call(addContact, payload.contact);
    yield put({ type: ADD_CONTACT_SUCCESS, payload: response.data});
  } catch(error: any) {
    yield put({ type: ADD_CONTACT_FAIL, payload : error?.response?.data?.message });
  }
}

export function* deleteContactSaga(payload: any) {
  try {
    yield call(deleteContact, payload.contactId);
    yield put({ type: DELETE_CONTACT_SUCCESS, payload: payload.contactId });
  } catch(error: any) {
    yield put({ type: DELETE_CONTACT_FAIL, payload: error?.response?.data?.message })
  }
}

export function* getContactsSaga() {
  try {
    const response: ResponseGenerator = yield call(getContacts);
    yield put({ type: GET_CONTACT_SUCCESS, payload: response.data });
  } catch(error) {
    yield put({ type: GET_CONTACT_FAIL, payload: "Invalid email and password" })
  }
}