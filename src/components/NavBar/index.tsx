import { useState } from 'react';
import NavProfile from '../../pages/Root/NavProfile';
import { NavSpace, StyledArrow, StyledNavBar } from './index.style';
import { ServiceType } from './NavBar.type';
import NavSelector from './NavSelector';

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
        {/* 스타일드 컴포넌트로 하는게 깔끔할듯 */}
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
