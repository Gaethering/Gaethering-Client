import axios, { Axios, AxiosError, AxiosResponse } from 'axios';
import { postRequest } from './requests';
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
    });

    return response;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error('name:' + error.name, 'status:' + error.status);
      console.error('cause:' + error.cause);
      console.error('code:' + error.code);
      console.error('response:' + error.response);
      console.error('message:' + error.message);
      console.error('JSON:', Object(error.toJSON()));
      console.error(error);
    }
  }
};
