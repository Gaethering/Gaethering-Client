import { postRequest } from './requests';
import { SignUpApiUrl, SignUpResponse } from './signUpAPI.type';

export const postSignUp = async (data: FormData) => {
  const response = await postRequest<SignUpResponse, FormData>(
    SignUpApiUrl.SIGN_UP,
    data,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }
  );

  return response;
};
