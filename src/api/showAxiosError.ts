import { AxiosError } from 'axios';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function showAxiosError(error: AxiosError<any, any>) {
  console.error('REQ:', error.request);
  console.error('code: ' + error.response?.data?.code, error.code);
<<<<<<< HEAD
=======
  console.error('response:', error.response);
>>>>>>> cc4c46c6eaf9fd913a67f6099cdb7c5a88958904
  console.error('message: ', error.response?.data?.message, error.message);
  console.error(error);
}

export default showAxiosError;
