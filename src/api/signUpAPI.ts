import axios, { AxiosError, AxiosResponse } from 'axios';
import { API_BASE_URL } from '../data/API_ENV';
import showAxiosError from './showAxiosError';
import { SignUpApiUrl, SignUpResponse } from './signUpAPI.type';

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
