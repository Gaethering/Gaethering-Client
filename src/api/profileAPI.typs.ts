export const enum ProfileApiUrl {
  PROFILE_MYPAGE = '/mypage',

  PROFILE_EDIT = '/mypage/nickname',

  PET = '/pets',

  ADD_PET = `/pets/register`
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
        imageUrl: string;
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

export interface ProfileEditResponse {
  nickname: string;
}