import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const PostButton = styled(NavLink)`
  position: fixed;
  right: 12vw;
  bottom: 10vh;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.8rem 1.6rem;

  color: ${({ theme: { color } }) => color.white};
  background-color: ${({ theme: { color } }) => color.main};
  border-radius: 1.2rem;

  box-shadow: 0 0 1rem 0 rgba(100, 100, 100, 0.2);

  text-decoration: none;
  font-size: 2rem;
  font-weight: 700;

  &:hover {
    scale: 102%;
  }
`;

export default PostButton;
