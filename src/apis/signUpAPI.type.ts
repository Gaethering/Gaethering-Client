export const enum SignUpApiUrl {
  /** 사용자 회원가입 */
  SignUp = '/members/sign-up',
  /** 회원가입 인증 코드 보내기 */
  EmailAuth = '/members/email-auth',
  /** 새로운 엑세스 토큰 발급 */
  EmailConfirm = '/members/email-confirm',
}
