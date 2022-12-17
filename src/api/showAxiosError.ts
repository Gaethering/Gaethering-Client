import { AxiosError } from 'axios';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function showAxiosError(error: AxiosError<any, any>) {
  console.error('REQ:', error.request);
  console.error('code: ' + error.response?.data?.code, error.code);
  console.error('message:', error.response?.data?.message, error.message);
  console.error(error);
}

export default showAxiosError;
