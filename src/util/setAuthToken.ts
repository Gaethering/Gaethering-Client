import { LogInResponse } from '../api/authAPI.type';
import { setAxiosHeaderToken } from '../api/axiosConfig';
import { QueryKeys } from '../api/QueryKeys';

function setAuthToken({ accessToken, refreshToken }: LogInResponse) {
  //! TEST
  console.log('token:', accessToken, refreshToken);
  ////TEST
  
  setAxiosHeaderToken(accessToken);
  localStorage.setItem(QueryKeys.refreshToken, refreshToken);
}

export { setAuthToken };
