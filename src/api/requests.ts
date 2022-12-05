import axios, { AxiosResponse } from 'axios';

const postRequest = async <T, D>(url: string, data: D) => {
  try {
    const response = await axios.post<T, AxiosResponse<T, D>, D>(url, data);
    return response;
    //
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.error(String(error));
    }
  }
};

const getRequest = async <T>(url: string) => {
  try {
    const response = await axios.get<T>(url);
    return response;
    //
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.error(String(error));
    }
  }
};

const patchRequest = async <T, D>(url: string, data: D) => {
  try {
    const response = await axios.patch<T, AxiosResponse<T, D>, D>(url);
    return response;
    //
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.error(String(error));
    }
  }
};

export { postRequest, getRequest, patchRequest };
