import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

const postRequest = async <T, D>(
  url: string,
  data: D,
  config?: AxiosRequestConfig<D> | undefined
) => {
  try {
    const response = await axios.post<T, AxiosResponse<T, D>, D>(
      url,
      data,
      config
    );

    //! Test
    console.log(
      'POST_REQ' + response.request + '성공!, 응답: ',
      response.data,
      'status: ',
      response.status,
      response.statusText
    );

    return response;
    //
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error('Axios Error: ' + error.response?.status, error.name);
      console.error('Message: ' + error.message);
    } else {
      console.error(String(error));
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
    console.log(
      'GET_REQ' + response.request + '성공!, 응답: ',
      response.data,
      'status: ',
      response.status,
      response.statusText
    );

    return response;
    //
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error(error.message);
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
    console.log(
      'PATCH_REQ' + response.request + '성공!, 응답: ',
      response.data,
      'status: ',
      response.status,
      response.statusText
    );

    return response;
    //
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error('Axios Error: ' + error.response?.status, error.name);
      console.error('Message: ' + error.message);
    } else {
      console.error(String(error));
    }
  }
};

export { postRequest, getRequest, patchRequest };
