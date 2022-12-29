import axios, { AxiosError, AxiosResponse } from 'axios';
import { API_BASE_URL } from '../data/API_ENV';
import { postRequest } from './requests';
import showAxiosError from './showAxiosError';
import {
  EmailAuthConfirmRequest,
  EmailAuthConfirmResponse,
  EmailAuthRequest,
  SignUpApiUrl,
  SignUpResponse,
} from './signUpAPI.type';

axios.defaults.baseURL = API_BASE_URL;

export const postSignUp = async (data: FormData) => {
  try {
    const response = await axios.post<
      SignUpResponse,
      AxiosResponse<SignUpResponse, FormData>,
      FormData
    >(SignUpApiUrl.SIGN_UP, data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      baseURL: API_BASE_URL,
    });

    return response;
  } catch (error) {
    if (error instanceof AxiosError) {
      showAxiosError(error);
    } else {
      console.error(error);
    }
  }
};

export async function postEmailAuthConfirm(code: string) {
  const response = await postRequest<
    EmailAuthConfirmResponse,
    EmailAuthConfirmRequest
  >(SignUpApiUrl.EMAIL_AUTH_CONFIRM, { code });

  return response;
}

export async function postEmailAuth(email: string) {
  const response = await postRequest<void, EmailAuthRequest>(
    SignUpApiUrl.EMAIL_AUTH,
    { email }
  );

  return response;
}
