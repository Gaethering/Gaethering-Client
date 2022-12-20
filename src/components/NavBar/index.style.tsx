import styled from 'styled-components';

const StyledNavBar = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  justify-items: center;

  position: fixed;
  width: 100%;
  height: ${({ theme: { size } }) => size.navHeight};
  top: 0;
  left: 0;
  background-color: ${({ theme: { color } }) => color.white};
  box-shadow: 0 0 2rem 0 rgba(0, 0, 0, 0.06);

  z-index: 1000;

  .nav-profile {
    width: 18rem;
  }

  .service-name {
    flex-grow: 1;

    .nav-button {
      display: flex;
      align-items: center;
      justify-content: center;

      width: 12rem;
      margin: 0 auto;
      padding: 0;

      cursor: pointer;

      span {
        margin-left: 1.4rem;

        font-size: 1.8rem;
        font-weight: 600;
      }
    }
  }
`;

const StyledArrow = styled.div`
  font-size: 2.2rem;
  font-weight: 600;
  transform: rotate(90deg) translateX(0.05rem);
  color: ${({ theme }) => theme.color.black};

  transition: transform 0.2s ease-in-out;

  &.view-nav {
    transform: rotate(270deg);
  }
`;

const NavSpace = styled.div`
  height: ${({ theme: { size } }) => size.navHeight};
`;

const NavLogo = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;

  width: 18rem;
  img {
    margin-left: 3rem;
    height: 3rem;
  }
`;

export { NavSpace, StyledArrow, StyledNavBar, NavLogo };
