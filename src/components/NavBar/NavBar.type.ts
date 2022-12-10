import { Dispatch } from 'react';

export const NavURL = {
  개모임: '/chat',
  동네소식: '/community',
  멍그램: '/sns',
  프로필: '/profile',
} as const;

export type ServiceType = keyof typeof NavURL;
export type SetServiceType = Dispatch<ServiceType>;
