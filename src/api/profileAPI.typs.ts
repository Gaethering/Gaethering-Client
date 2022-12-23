export const enum ProfileApiUrl {
  PROFILE_MYPAGE = '/mypage',
}

export interface ProfileResponse {
  data: {
    email: string;
    nickname: string;
    phoneNumber: string;
    gender: string;
    mannerDegree: number;
    followerCount?: number;
    followingCount?: number;
    petCount?: number;
    pets?: [
      {
        id?: number;
        name?: string;
        representative?: boolean;
      }
    ];
  };
}
