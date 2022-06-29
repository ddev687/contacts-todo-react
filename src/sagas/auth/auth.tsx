import { put, call } from 'redux-saga/effects';
import { register, login } from '../../services/auth/auth.service';

import { LOGIN_SUCCESS, LOGIN_FAIL, REGISTER_SUCCESS, REGISTER_FAIL } from '../../actions/auth/actionTypes';
import { loginUser, registerUser } from '../../actions/auth/types';

export interface ResponseGenerator {
  config?: any,
  data?: any,
  headers?: any,
  request?: any,
  status?: number,
  statusText?: string,
  error?: string
}

export function* registerSaga(payload: registerUser) {
  try {
    yield call(register, payload.user);
    yield put({ type: REGISTER_SUCCESS })
  } catch (error: any) {
    yield put({ type: REGISTER_FAIL, payload: error?.response?.data?.message });
  }
}

export function* loginSaga(payload: loginUser) {
  try {
    const response: ResponseGenerator = yield call(login, payload.user);
    if (response.data.accessToken)
      localStorage.setItem("user", JSON.stringify(response.data));
    yield put({ type: LOGIN_SUCCESS, payload: response.data });
  } catch (error: any) {
    yield put({ type: LOGIN_FAIL,  payload: error?.response?.data?.message || error?.response?.data?.error})
  }
}