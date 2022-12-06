import React, { Dispatch, useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { NavURL, ServiceType, SetServiceType } from '.';

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

const StyledModalBlur = styled.div`
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
