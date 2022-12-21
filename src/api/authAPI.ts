import { QueryKeys } from './QueryKeys';
import {
  AuthApiUrl as Auth,
  JWTToken,
  LogInRequest,
  LogInResponse,
  LogOutRequest,
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

export const postLogOut = async (tokens: LogOutRequest) => {
  const response = await postRequest<void, LogOutRequest>(Auth.LogOut, tokens);
  return response?.data;
};

export const postReToken = async (accessToken?: JWTToken) => {
  const refreshToken = localStorage.getItem(QueryKeys.refreshToken);

  if (!refreshToken) {
    return false;
  }

  try {
    const response = await axios.post<
      ReTokenResponse,
      AxiosResponse<ReTokenResponse, ReTokenRequest>,
      ReTokenRequest
    >(Auth.ReToken, { refreshToken, accessToken });

    if (response?.status === 200) {
      const { accessToken } = response.data;
      //! TEST
      console.log('retoken:', accessToken);
      console.log(response);

      setAxiosHeaderToken(accessToken);

      return true;
    }

    alert('로그인 토큰이 만료되었습니다');

    return false;
    ////
  } catch (error) {
    if (error instanceof AxiosError) {
      showAxiosError(error);
    }

    return false;
  }
};
