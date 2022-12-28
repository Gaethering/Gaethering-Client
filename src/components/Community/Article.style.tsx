import styled from 'styled-components';
import StyledButton from '../Form/Button.style';

export const StyledArticleList = styled.div`
  margin: 0 auto;

  width: 80vw;
  height: calc(100vh - 20rem);
  min-width: calc(390px);

  overflow-y: scroll;
`;

export const ArticleLayout = styled.article`
  display: flex;
  flex-direction: column;

  margin: 2rem auto;
  width: 90%;

  box-shadow: 0 0 1.4rem 0 rgba(100, 100, 100, 0.1);
  border-radius: 1.6rem;

  * {
    text-decoration: none;
  }
`;

export const CategoryTag = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0 0.8rem;

  color: ${(prop) => prop.theme.color.white};
  background-color: ${(prop) => prop.theme.color.main};
  border-radius: 1rem;

  font-size: 1rem;
  font-weight: 600;
`;

export const Title = styled.div`
  margin: 2rem 3.5rem 0;
  display: flex;
  align-items: center;
  gap: 1rem;

  h3 {
    font-size: 2rem;
    font-weight: 600;
  }
`;

export const Contents = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 2.5rem;

  p.contents-body {
    margin-left: 1rem;
  }

  .time {
    margin: 0 2rem;
    text-align: right;
    color: ${(prop) => prop.theme.color.gray2};
  }
`;

export const Image = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 1rem 0;

  img {
    height: 20rem;
    border-radius: 1.6rem;
  }
`;

export const More = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 1rem 0;

  font-weight: 600;
  color: ${({ theme: { color } }) => color.gray1};
  background-color: ${({ theme: { color } }) => color.gray4};
  border-radius: 0.8rem;

  cursor: pointer;

  box-shadow: 0 -1.6rem 2rem 0.4rem rgba(255, 255, 255, 0.8);
`;

export const Bottom = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
  padding: 0.3rem 2.5rem;
  height: 4rem;
  border-top: 1px solid ${(prop) => prop.theme.color.gray3};

  .btn-container {
    width: 15rem;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  font-weight: 600;
  font-size: 1.5rem;
  color: ${(prop) => prop.theme.color.main};

  margin-right: 1rem;

  cursor: pointer;

  svg {
    width: 2rem;
    height: 2rem;
  }
`;

export const MoreArticle = styled(StyledButton)`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 3rem;
  padding: 0;

  border-radius: 0.8rem;

  font-size: 1.4rem;
`;
