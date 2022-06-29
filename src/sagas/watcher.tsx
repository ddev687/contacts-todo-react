import { takeLatest } from 'redux-saga/effects';
import { registerSaga, loginSaga } from './auth/auth';
import { addContactSaga, deleteContactSaga, getContactsSaga } from './contacts/contacts';

import * as authTypes from '../actions/auth/actionTypes';
import * as contactTypes from '../actions/contacts/actionTypes';

export function* watchUserAuthentication() {
  yield takeLatest(authTypes.REGISTER, registerSaga);
  yield takeLatest(authTypes.LOGIN, loginSaga);
}

export function* watchContacts() {
  yield takeLatest(contactTypes.ADD_CONTACT, addContactSaga);
  yield takeLatest(contactTypes.DELETE_CONTACT, deleteContactSaga);
  yield takeLatest(contactTypes.GET_CONTACT, getContactsSaga);

}