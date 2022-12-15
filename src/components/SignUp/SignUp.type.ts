export type SignUpStep = 1 | 2 | 3 | 4;
export const SIGNUP_STEPS = 4;

export interface SignUpForm {
  /** User */
  email: string;
  password: string;
  passwordCheck: string;
  name: string;
  /** Profile */
  phone: string;
  birth: number;
  gender: 'MALE' | 'FEMALE';
  nickname: string;
  isEmailAuth: boolean;
  /** Pet */
  petName: string;
  petBirth: number;
  weight: number;
  breed: string;
  petGender: 'MALE' | 'FEMALE';
  description: string;
  isNeutered: boolean;
}
