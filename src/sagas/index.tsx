import { fork } from 'redux-saga/effects';
import { watchUserAuthentication, watchContacts } from './watcher';

export default function* startForman() {
  yield fork(watchUserAuthentication);
  yield fork(watchContacts);
}