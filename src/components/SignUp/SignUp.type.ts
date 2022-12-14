export type SignUpStep = 1 | 2 | 3 | 4;
export const SIGNUP_STEPS = 4;

export interface SignUpForm {
  /** User */
  id: string;
  pw: string;
  pwCheck: string;
  userName: string;
  /** Profile */
  nickname: string;
  birth: number;
  gender: 'male' | 'female';
  /** Pet */
  petName: string;
  petAge: number;
  breed: string;
  petWeight: number;
  petDescription: string;
  petGender: string;
  neutralization: boolean;
}
