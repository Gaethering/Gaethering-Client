export const enum AuthApiUrl {
  /** POST: 로그인 */
  LogIn = '/members/auth/login',
  /** POST: 로그아웃 */
  LogOut = '/members/auth/logout',
  /** GET: NavProfile 용 회원 정보 */
  LogIn_Info = '/members/info',
  /** POST: 새로운 엑세스 토큰 발급 */
  ReToken = '/members/auth/reissue-token',
}

export const enum SignUpApiUrl {
  /** POST: 이메일 인증 */
  EMAIL_AUTH = '/members/email-auth',
  /** POST: 이메일 인증코드 확인 */
  EMAIL_AUTH_CONFIRM = '/members/email-confirm',
  /** POST: 회원가입 */
  SIGN_UP = '/members/sign-up',
}

export const enum UserApiUrl {
  /** GET: 사용자 프로필 조회 */
  USER_PROFILE = '/members/{memberId}/profile',
  /** POST: 회원 팔로우 */
  USER_FOLLOW = '/members/{memberId}/fllow',
  /** GET: 회원 팔로워 목록 */
  USER_FOLLOWER = '/members/{memberId}/fllower',
  /** GET: 회원 팔로잉 목록 */
  USER_FOLLOWING = '/members/{memberId}/fllowing',
  /** DELETE: 회원 팔로우 취소*/
  USER_FOLLOW_DEL = '/members/{memberId}/fllow',
}

export interface LogInRequest {
  id: string;
  pw: string;
}
