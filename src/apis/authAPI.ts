import { AuthApiUrl as Auth, LogInRequest } from './authAPI.type';
import { postRequest } from './requests';

export const postLogIn = async (data: LogInRequest) => {
  const response = await postRequest(Auth.LogIn, data);
  return response;
};

export const postLogOut = async (data: string) => {
  const response = await postRequest(Auth.LogOut, data);
};

