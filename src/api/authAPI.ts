import { QueryKeys } from './QueryKeys';
import * as T from './authAPI.type';
import { setAxiosHeaderToken } from './axiosUtils';
import { postRequest } from './requests';
import axios, { AxiosError, AxiosResponse } from 'axios';
import showAxiosError from './showAxiosError';

export const postLogIn = async (data: T.LogInRequest) => {
  const axiosNoInter = axios.create();
  axiosNoInter.interceptors.request.clear();

  const response = await axiosNoInter.post<
    T.LogInResponse,
    AxiosResponse<T.LogInResponse, T.LogInRequest>,
    T.LogInRequest
  >(T.AuthApiUrl.LogIn, data);

  return response.data;
};

export const postLogOut = async (tokens: T.LogOutRequest) => {
  const response = await postRequest<void, T.LogOutRequest>(
    T.AuthApiUrl.LogOut,
    tokens
  );
  return response;
};

export const postReToken = async (accessToken?: T.JWTToken) => {
  const axiosNoInter = axios.create();
  axiosNoInter.interceptors.request.clear();

  const refreshToken = localStorage.getItem(QueryKeys.refreshToken);

  if (!refreshToken) {
    return false;
  }

  try {
    const response = await axiosNoInter.post<
      T.ReTokenResponse,
      AxiosResponse<T.ReTokenResponse, T.ReTokenRequest>,
      T.ReTokenRequest
    >(T.AuthApiUrl.ReToken, { refreshToken, accessToken });

    if (response?.status === 200) {
      const { accessToken } = response.data;
      //! TEST
      console.log('retoken:', accessToken);
      console.log(response);

      setAxiosHeaderToken(accessToken);

      return true;
    } else {
      return false;
    }
    ////
  } catch (error) {
    if (error instanceof AxiosError) {
      showAxiosError(error);
    }
    localStorage.removeItem(QueryKeys.refreshToken);
    alert('로그인 토큰이 만료되었습니다');

    return false;
  }
};
