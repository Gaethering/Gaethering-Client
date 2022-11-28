import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    font-family: SUIT;
    font-weight: 400;
    line-height: 2.4rem;
    color: ${({ theme }) => theme.color.black};
    font-size: 1.6rem;
  }
  body {
    margin: 0;
    align-items: center;
    background-color: ${({ theme }) => theme.color.white};
  }
  button, input {
    background-color: ${({ theme }) => theme.color.white};
    border: 0;
  }
  h1 {
    font-size: 3rem;
    font-weight: 700;
  }

  h2 {
    font-size: 2.6rem;
    font-weight: 700;
  }

  h3 {
    font-size: 2rem;
    font-weight: 600;
  }
  .arrow-button {
    font-feature-settings: "ss18";
  }
`;

export default GlobalStyle;
