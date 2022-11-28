import { DefaultTheme } from 'styled-components';

const main: DefaultTheme = {
  color: {
    main: '#FA8A3A',
    black: '#000000',
    white: '#ffffff',
    yellow: '#FDE404',
    redPint: '#FF4926',
    gray1: '#595959',
    gray2: '#B6B6B6',
    gray3: '#E6E6E6',
    gray4: '#F6F6F6',
  },
};

declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      main: string;
      black: string;
      white: string;
      yellow: string;
      redPint: string;
      gray1: string;
      gray2: string;
      gray3: string;
      gray4: string;
    };
  }
}

export default main;
