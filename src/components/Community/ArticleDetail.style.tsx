import styled from 'styled-components';

export const ArticleOverlay = styled.div`
  position: fixed;
  top: ${({ theme: { size } }) => size.navHeight};
  left: 0;

  width: 100vw;
  height: calc(100% - ${({ theme: { size } }) => size.navHeight});
  background-color: ${({ theme: { color } }) => color.white};

  overflow-y: scroll;

  z-index: 100;
`;

const StyledWrapper = styled.article`
  display: flex;
  flex-direction: column;
  width: calc(80vw - 6rem);

  margin: 4rem auto;
  padding: 2rem;

  border-radius: 1.6rem;
  background-color: ${({ theme: { color } }) => color.white};
  box-shadow: 0 0 1rem 0 rgba(100, 100, 100, 0.16);
`;

export const CategoryTag = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 5rem;

  color: ${(prop) => prop.theme.color.white};
  background-color: ${(prop) => prop.theme.color.main};
  border-radius: 1rem;

  font-size: 1rem;
  font-weight: 600;
`;

const Title = styled.h2`
  margin: 2rem 1rem 0;
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
  margin: 1rem 1rem;

  .contents-body {
    margin: 0 1rem;

    word-break: break-all;
    overflow-wrap: break-word;
    white-space: pre-wrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .time {
    margin: 0 1rem;
    text-align: right;
    color: ${(prop) => prop.theme.color.gray2};
  }
`;

export const Images = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  align-items: center;
  justify-content: center;

  width: calc(100% - 4rem);
  margin: 4rem 2rem;

  img {
    max-width: calc(100% - 4rem);
    max-height: 25rem;
    border-radius: 1.6rem;
    box-shadow: 0 0 1rem 0 rgba(100, 100, 100, 0.2);
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
  padding: 0.3rem 0.6rem;
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

export { StyledWrapper, Title };
