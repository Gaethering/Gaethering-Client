import { SignUpForm } from '../components/SignUp/SignUp.type';
import { postRequest } from './requests';
import { SignUpApiUrl } from './signUpAPI.type';

export const postSignUp = async (data: unknown) => {
  const response = await postRequest(SignUpApiUrl.SIGN_UP, data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response;
};
