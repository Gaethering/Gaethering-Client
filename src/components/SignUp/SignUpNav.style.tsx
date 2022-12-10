import styled from 'styled-components';

const StyledNav = styled.nav`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 3rem;
  margin-bottom: 8rem;
  height: 5rem;
  width: 80vw;
  min-width: 390px;
`;

const NavIndicator = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  box-sizing: content-box;
  margin: 1.6rem;
  padding: 0rem;
  width: 1rem;
  height: 1rem;

  font-size: 0;

  background-color: ${({ theme: { color } }) => color.gray2};
  color: ${({ theme: { color } }) => color.gray2};
  border-radius: 100%;

  transition: all 0.3s ease-in-out, font-size 0s;

  z-index: 1000;

  &.active {
    margin: 0;
    padding: 1.6rem;
    background-color: ${({ theme: { color } }) => color.black};
    color: ${({ theme: { color } }) => color.white};
    font-size: 2rem;
  }
`;

const StepLine = styled.div`
  position: absolute;
  width: calc(80vw - 3.2rem);
  height: 0.1rem;
  margin: 0 1.6rem;
  background-color: ${({ theme: { color } }) => color.gray3};
`;

export { NavIndicator, StepLine, StyledNav };
