export const enum ProfileApiUrl {
  PROFILE_MYPAGE = '/mypage',

  PET = '/pets'
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
    pets: [
      {
        id: number;
        name: string;
        representative: boolean;
      }
    ];
  };
}

export interface PetResponse {
  name: string;
  birth: string;
  gender: string;
  breed: string;
  weight: number;
  isNeutered: boolean;
  description: string;
  imageUrl: string;
}
