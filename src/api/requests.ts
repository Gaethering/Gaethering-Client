import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import showAxiosError from './showAxiosError';

const postRequest = async <T, D>(
  url: string,
  data?: D,
  config?: AxiosRequestConfig<D> | undefined
) => {
  try {
    const response = await axios.post<T, AxiosResponse<T, D>, D>(
      url,
      data,
      config
    );

    //! Test
    console.info('POST_REQ', response.request, response.headers);
    console.info('status: ' + response.status);
    console.info('성공! 응답:', response.data);

    return response.data;
    //
  } catch (error) {
    if (error instanceof AxiosError) {
      showAxiosError(error);
    } else {
      console.info(String(error));
    }
    return error;
  }
};

const getRequest = async <T>(
  url: string,
  config?: AxiosRequestConfig | undefined
) => {
  try {
    const response = await axios.get<T>(url, config);

    //! Test
    console.info('POST_REQ', response.request, response.headers);
    console.info('status: ' + response.status);
    console.info('성공! 응답:', response.data);

    return response.data;
    //
  } catch (error) {
    if (error instanceof AxiosError) {
      showAxiosError(error);
    } else {
      console.error(String(error));
    }
  }
};

const patchRequest = async <T, D>(
  url: string,
  data: D,
  config?: AxiosRequestConfig<D> | undefined
) => {
  try {
    const response = await axios.patch<T, AxiosResponse<T, D>, D>(
      url,
      data,
      config
    );

    //! Test
    console.info('POST_REQ', response.request, response.headers);
    console.info('status: ' + response.status);
    console.info('성공! 응답:', response.data);

    return response.data;
    //
  } catch (error) {
    if (error instanceof AxiosError) {
      showAxiosError(error);
    } else {
      console.error(String(error));
    }
    return error;
  }
};

export { postRequest, getRequest, patchRequest };
