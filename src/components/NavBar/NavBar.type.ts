import { Dispatch } from 'react';

export const NavURL = {
  개모임: '/chat',
  동네소식: '/community',
  멍그램: '/sns',
  프로필: '/profile',
} as const;

export type ServiceType = keyof typeof NavURL;
export type SetServiceType = Dispatch<ServiceType>;

for (const key in NavURL) {
  if (Object.prototype.hasOwnProperty.call(NavURL, key)) {
    const k = key as unknown as typeof NavURL;
    const elem = NavURL[k];
    
  }
}