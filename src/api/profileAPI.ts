import axios, { AxiosError, AxiosResponse, AxiosRequestConfig } from 'axios';
import { API_BASE_URL } from '../data/API_ENV';
import { ProfileApiUrl, ProfileResponse, PetResponse } from './profileAPI.typs';
import { getRequest } from './requests';

export const getUserProfile = async () => {
  const response = await getRequest<ProfileResponse>(
    ProfileApiUrl.PROFILE_MYPAGE
  );
  return response;
};

export const getPetProfile = async (petID: number) => {
  const response = await getRequest<PetResponse>(
    `pets/${petID}/profile`);
  return response;
};
