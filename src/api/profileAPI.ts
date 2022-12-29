import axios, { AxiosError, AxiosResponse, AxiosRequestConfig } from 'axios';
import { API_BASE_URL } from '../data/API_ENV';
import {
  ProfileApiUrl,
  ProfileResponse,
  PetResponse, 
  ProfileEditResponse,
} from './profileAPI.typs';
import { getRequest, patchRequest, postRequest } from './requests';

export const getUserProfile = async () => {
  const response = await getRequest<ProfileResponse>(
    ProfileApiUrl.PROFILE_MYPAGE
  );
  return response;
};

export const getPetProfile = async (petID: number) => {
  const response = await getRequest<PetResponse>(`pets/${petID}/profile`);
  return response;
};

export const patchProfile = async (data: ProfileEditResponse) => {
  const response = await patchRequest<ProfileEditResponse, ProfileEditResponse>(
    ProfileApiUrl.PROFILE_EDIT,
    data
  );
  return response;
};

export const patchPetProfile = async (petID: number, data: PetResponse) => {
  const response = await patchRequest<PetResponse, PetResponse>(
    `mypage/pets/${petID}`,
    data,
  );
  return response;
};

export const postPet = async (data: FormData) => {
  const response = await axios.post<PetResponse, AxiosResponse<PetResponse, FormData> ,FormData>(
    ProfileApiUrl.ADD_PET,
    data,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      baseURL: API_BASE_URL,
    }
  );
  return response.data;
};