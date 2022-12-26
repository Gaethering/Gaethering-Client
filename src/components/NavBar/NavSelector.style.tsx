import styled from 'styled-components';

const StyledNavSelector = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;

  position: absolute;
  top: ${({ theme: { size } }) => size.navHeight};
  left: calc(50vw - 7rem);

  width: 14rem;
  padding: 1rem 0 1.6rem 0;
  background-color: ${({ theme: { color } }) => color.white};
  border-radius: 0 0 1.6rem 1.6rem;

  text-align: center;

  z-index: 2000;

  a {
    display: block;
    margin: 0.4rem 0;
    padding: 0.4rem 1rem;
    width: 10rem;
    border-radius: 1rem;

    background-color: ${({ theme: { color } }) => color.white};

    font-size: 1.6rem;
    font-weight: 600;
    text-decoration: none;

    transition: all 0.2s ease-in-out;

    &:hover {
      background-color: ${({ theme: { color } }) => color.gray3};
    }

    &.active {
      background-color: ${({ theme: { color } }) => color.main};
      color: ${({ theme: { color } }) => color.white};
    }
  }
`;

const StyledModalOverlay = styled.div`
  display: none;
  position: fixed;
  top: ${({ theme: { size } }) => size.navHeight};
  left: 0;
  width: 100vw;
  height: calc(100vh - ${({ theme: { size } }) => size.navHeight});

  background-color: rgba(0, 0, 0, 0.4);
  z-index: 500;

  &.view-nav {
    display: block;
  }
`;

export { StyledModalOverlay, StyledNavSelector };
