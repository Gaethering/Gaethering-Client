import { postEmailAuthConfirm } from '../../api/signUpAPI';

export async function emailAuthCheck(code: string) {
  const res = await postEmailAuthConfirm(code);

  if (res?.isEmailAuth) {
    return true;
  }

  return false;
}
