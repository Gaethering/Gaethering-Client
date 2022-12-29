import styled from 'styled-components';

const StyledSectionNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 5rem;
  margin-top: 2rem;
`;

const NavButton = styled.button`
  flex: 1 0;
  box-sizing: content-box;
  padding-top: 1rem;
  padding-bottom: 0.8rem;
  border-bottom: 0.1rem solid ${({ theme: { color } }) => color.gray2};

  transition: all 0.2s ease-in-out;

  &.active {
    border-bottom: 0.3rem solid ${({ theme: { color } }) => color.black};
    padding-bottom: 0.6rem;
  }

  &:hover {
    background-color: ${({ theme: { color } }) => color.gray4};
  }
`;

export { NavButton, StyledSectionNav };
