import { QueryKeys } from './QueryKeys';
import {
  AuthApiUrl as Auth,
  JWTToken,
  LogInRequest,
  LogInResponse,
  ReTokenRequest,
  ReTokenResponse,
} from './authAPI.type';
import { setAxiosHeaderToken } from './axiosConfig';
import { postRequest } from './requests';
import axios, { AxiosError, AxiosResponse } from 'axios';
import showAxiosError from './showAxiosError';

export const postLogIn = async (data: LogInRequest) => {
  const response = await axios.post<
    LogInResponse,
    AxiosResponse<LogInResponse, LogInRequest>,
    LogInRequest
  >(Auth.LogIn, data);

  return response;
};

export const postLogOut = async (data: string) => {
  const response = await postRequest(Auth.LogOut, data);
  return response;
};

export const postReToken = async (accessToken?: JWTToken) => {
  const refreshToken = localStorage.getItem(QueryKeys.refreshToken);

  if (!refreshToken) {
    return;
  }

  try {
    const response = await axios.post<
      ReTokenResponse,
      AxiosResponse<ReTokenResponse, ReTokenRequest>,
      ReTokenRequest
    >(Auth.ReToken, { refreshToken, accessToken });

    if (response?.status === 201) {
      const { accessToken } = response.data;
      //! TEST
      console.log('retoken:', accessToken);

      setAxiosHeaderToken(accessToken);
    }

    return response;
  } catch (error) {
    if (error instanceof AxiosError) {
      showAxiosError(error);
    }
  }
};
