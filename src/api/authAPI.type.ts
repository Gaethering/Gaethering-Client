export type JWTToken = string;

export const enum AuthApiUrl {
  /** POST: 로그인 */
  LogIn = '/members/auth/login',
  /** POST: 로그아웃 */
  LogOut = '/members/auth/logout',
  /** GET: NavProfile 용 회원 정보 */
  NavInfo = '/members/info',
  /** POST: 새로운 엑세스 토큰 발급 */
  ReToken = '/members/auth/reissue-token',
}

export interface LogInRequest {
  email: string;
  password: string;
}

export interface LogInResponse {
  accessToken: JWTToken;
  refreshToken: JWTToken;
}

export type LogOutRequest = LogInResponse;

export interface NavInfoResponse {
  petName: string;
  imageUrl: string;
  nickname: string;
  memberId: number;
}

export interface ReTokenRequest {
  accessToken?: JWTToken;
  refreshToken: JWTToken;
}
export interface ReTokenResponse {
  accessToken: JWTToken;
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
