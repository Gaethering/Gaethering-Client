import React, { Dispatch, useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { NavURL, SetServiceType } from './NavBar.type';
import { StyledModalBlur, StyledNavSelector } from './NavSelector.style';

interface Props {
  setServiceName: SetServiceType;
  setIsPending: Dispatch<boolean>;
  showNav: boolean;
  setShowNav: Dispatch<React.SetStateAction<boolean>>;
}

function NavSelector({
  setServiceName: set,
  setIsPending,
  showNav,
  setShowNav,
}: Props) {
  return (
    <>
      <StyledNavSelector className={showNav ? 'view-nav' : 'hidden'}>
        <ul>
          <li>
            <NavLink to={NavURL.개모임} onClick={() => set('개모임')}>
              개모임
            </NavLink>
          </li>
          <li>
            <NavLink to={NavURL.동네소식} onClick={() => set('동네소식')}>
              동네소식
            </NavLink>
          </li>
          <li>
            <NavLink to={NavURL.멍그램} onClick={() => set('멍그램')}>
              멍그램
            </NavLink>
          </li>
          <li>
            <NavLink to={NavURL.프로필} onClick={() => set('프로필')}>
              프로필
            </NavLink>
          </li>
        </ul>
      </StyledNavSelector>
      <StyledModalBlur
        className={showNav ? 'view-nav' : 'hidden'}
        onClick={() => setShowNav((prev) => !prev)}
      />
    </>
  );
}

export default NavSelector;
