import styled from 'styled-components';

export const StyledArticleList = styled.div`
  margin: 0 auto;
  width: 80vw;
  min-width: calc(390px * 0.8);
`;

export const StyledArticle = styled.div`
  position: relative;
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
  height: 200px;
  border: 1px solid ${(prop) => prop.theme.color.gray3};
  box-shadow: 0px 2px 10px 2px ${(prop) => prop.theme.color.gray3};
  border-radius: 1.4rem;

  .logo, svg {
    width: 2rem;
    height: 2rem;
    font-size: 2rem;
    font-weight: 700;
    color: ${(prop) => prop.theme.color.main};
  }

  button {
    padding: 0;
    width: 5rem;
    font-size: 1rem;
    font-weight: 600;
  }

  .title {
    margin: 1.5rem 2.5rem 0;
    display: flex;
    align-items: center;
    gap: 1rem;
    p {
      font-weight: 600;
    }
  }

  .body {
    margin: 1rem 2.5rem 0;
  }

  .time {
    margin: 0 2.5rem;
    position: absolute;
    bottom: 5.3rem;
    right: 0;
    text-align: right;
    color: ${(prop) => prop.theme.color.gray2};
  }

  .footer {
    padding: 0.3rem 2.5rem;
    display: flex;
    align-items: center;
    position: absolute;
    bottom: 0rem;
    height: 4rem;
    width: calc(100% - 5rem);
    border-top: 1px solid ${(prop) => prop.theme.color.gray3};
    p {
      font-weight: 600;
      font-size: 1.5rem;
      color: ${(prop) => prop.theme.color.main};
    }

    .container {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      width: 14rem;
    }
  }

`;
