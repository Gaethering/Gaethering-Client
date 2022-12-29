export const enum SignUpApiUrl {
  /** POST: 이메일 인증 */
  EMAIL_AUTH = '/members/email-auth',
  /** POST: 이메일 인증코드 확인 */
  EMAIL_AUTH_CONFIRM = '/members/email-confirm',
  /** POST: 회원가입 */
  SIGN_UP = '/members/sign-up',
}

export interface SignUpResponse {
  petName: string;
  imageUrl: string;
}

export interface EmailAuthConfirmRequest {
  code: string;
}

export interface EmailAuthConfirmResponse {
  isEmailAuth: boolean;
}

export interface EmailAuthRequest {
  email: string;
}
