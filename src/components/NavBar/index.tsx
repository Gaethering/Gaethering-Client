import { Dispatch, useState } from 'react';
import styled from 'styled-components';
import NavProfile from '../../pages/Root/NavProfile';
import NavSelector from './NavSelector';

export const NavURL = {
  개모임: '/chat',
  동네소식: '/community',
  멍그램: '/sns',
  프로필: '/profile',
} as const;

export type ServiceType = keyof typeof NavURL;
export type SetServiceType = Dispatch<ServiceType>;

// Components
const Arrow = () => <StyledArrow>{'>'}</StyledArrow>;
const Logo = () => <img src="/src/assets/logo-horizontal.svg" alt="개더링" />;

function NavBar() {
  const [serviceName, setServiceName] = useState<ServiceType>('개모임');
  const [isPending, setIsPending] = useState(false);
  const [showNav, setShowNav] = useState(false);

  return (
    <>
      <StyledNavBar>
        <div className="logo">
          <Logo />
        </div>
        <div className="service-name">
          <button
            className="nav-button"
            type="button"
            onClick={() => setShowNav((prev) => !prev)}
          >
            <Arrow />
            <span>{serviceName}</span>
          </button>
        </div>
        <NavSelector
          setServiceName={setServiceName}
          setIsPending={setIsPending}
          showNav={showNav}
          setShowNav={setShowNav}
        />
        <NavProfile />
      </StyledNavBar>
      <NavSpace />
    </>
  );
}

export default NavBar;

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
  box-shadow: 0 0 2rem 0 rgba(0, 0, 0, 0.1);

  z-index: 1000;

  .logo,
  .nav-profile {
    width: 18rem;
  }

  .logo {
    display: flex;
    justify-content: start;
    align-items: center;
    img {
      margin-left: 3rem;
      height: 3rem;
    }
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
