import { Dispatch, useState } from 'react';
import { NavLogo, NavSpace, StyledArrow, StyledNavBar } from './index.style';
import { ServiceType } from './NavBar.type';
import NavSelector from './NavSelector';
import logoHorizontal from '../../assets/logo-horizontal.svg';
import NavMenu from './NavMenu';
import NavProfile from './NavProfile';

// Components
const Arrow = () => <StyledArrow>{'>'}</StyledArrow>;
const Logo = () => <img src={logoHorizontal} alt="개더링" />;

interface NavProps {
  serviceName: ServiceType;
  setServiceName: Dispatch<ServiceType>;
  logOut: () => void;
}

function NavBar({ serviceName, setServiceName, logOut }: NavProps) {
  const [showNav, setShowNav] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <StyledNavBar>
        <NavLogo>
          <Logo />
        </NavLogo>
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
          showNav={showNav}
          setShowNav={setShowNav}
        />
        <NavProfile onClick={() => setShowMenu((prev) => !prev)} />
        {showMenu && <NavMenu logOut={logOut} />}
      </StyledNavBar>
      <NavSpace />
    </>
  );
}

export default NavBar;
