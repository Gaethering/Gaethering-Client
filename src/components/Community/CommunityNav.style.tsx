import styled from 'styled-components';

export const StyledCommunityNav = styled.div`
  margin: 1rem auto;
  width: 80vw;
  min-width: calc(390px * 0.8);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavButton = styled.div`
  width: 50%;
  text-align: center;
  padding: 1rem;
  border-bottom: 2px solid ${({ theme: { color } }) => color.gray3};;

  &.active {
    border-bottom: 1px solid ${({ theme: { color } }) => color.black}
  }
`;