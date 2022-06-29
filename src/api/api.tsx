import * as conig from '../configs' 
import axios from 'axios';
import { IUser, loginUserRequest } from '../actions/auth/types';
import { IContact } from '../actions/contacts/types';

export default function api(
  url: string,
  params: any,
  method: string,
  body: IUser | IContact | loginUserRequest | null,
) {
  let options: any;
  //@ts-ignore
  const user = JSON.parse(localStorage.getItem("user"));
  options = {
    url: conig.BASE_URL + url,
    method: method,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: user?.accessToken,
    },
  };
  if (body) options.data = body;
  if (params) options.params = params;
  return axios(options)
}