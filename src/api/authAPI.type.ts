export const enum AuthApiUrl {
  /** 로그인 */
  LogIn = '/members/auth/login',
  /** 로그아웃 */
  LogOut = '/members/auth/logout',
  /** 새로운 엑세스 토큰 발급 */
  ReToken = '/members/auth/reissue-token',
}

export interface LogInRequest {
  id: string;
  pw: string;
}
