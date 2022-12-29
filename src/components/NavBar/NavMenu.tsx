import styled from 'styled-components';
import Button from '../Form/Button.style';

type Props = { logOut: () => void };

function NavMenu({ logOut }: Props) {
  return (
    <StyledNavMenu>
      <ul>
        <li>
          <Button btnTheme="main" onClick={logOut}>
            Log Out
          </Button>
        </li>
      </ul>
    </StyledNavMenu>
  );
}

export default NavMenu;

const StyledNavMenu = styled.div`
  position: fixed;
  display: flex;
  align-items: flex-start;
  justify-content: center;

  width: 10rem;
  padding: 2rem;

  top: ${({ theme: { size } }) => size.navHeight};
  right: 0rem;

  background-color: ${({ theme: { color } }) => color.white};
  border-radius: 0 0 1rem 1rem;
  box-shadow: 0 1rem 2rem 0 rgba(0, 0, 0, 0.06);

  z-index: 1000;

  li {
    margin-bottom: 1rem;
  }

  button {
    padding: 0.4rem 1rem;
    border-radius: 1rem;
    font-size: 1.4rem;
    font-weight: 700;
  }
`;
