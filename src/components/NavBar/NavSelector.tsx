import React, { Dispatch } from 'react';
import { NavLink } from 'react-router-dom';
import { NavURL, ServiceType, SetServiceType } from './NavBar.type';
import { StyledModalOverlay, StyledNavSelector } from './NavSelector.style';

interface Props {
  setServiceName: SetServiceType;
  showNav: boolean;
  setShowNav: Dispatch<React.SetStateAction<boolean>>;
}

function NavSelector({ setServiceName, showNav, setShowNav }: Props) {
  const setNav = (service: ServiceType) => {
    setServiceName(service);
    setShowNav(false);
  };

  return (
    <>
      <StyledNavSelector className={showNav ? 'view-nav' : 'hidden'}>
        <ul>
          <li>
            <NavLink to={NavURL.개모임} onClick={() => setNav('개모임')}>
              개모임
            </NavLink>
          </li>
          <li>
            <NavLink to={NavURL.동네소식} onClick={() => setNav('동네소식')}>
              동네소식
            </NavLink>
          </li>
          <li>
            <NavLink to={NavURL.멍그램} onClick={() => setNav('멍그램')}>
              멍그램
            </NavLink>
          </li>
          <li>
            <NavLink to={NavURL.프로필} onClick={() => setNav('프로필')}>
              프로필
            </NavLink>
          </li>
        </ul>
      </StyledNavSelector>
      <StyledModalOverlay
        className={showNav ? 'view-nav' : 'hidden'}
        onClick={() => setShowNav(false)}
      />
    </>
  );
}

export default NavSelector;
