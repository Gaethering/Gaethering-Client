import React from 'react';
import styled from 'styled-components';
import searchIcon from '../../assets/searchIcon.svg';

// type Props = {};

const Icon = () => <img src={searchIcon} alt="검색" />;

function ChatSearchBar() {
  return (
    <StyledSearchBar>
      <input className="search-input" />
      <button type="button" className="search-icon">
        <Icon />
      </button>
    </StyledSearchBar>
  );
}

export default ChatSearchBar;

const StyledSearchBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 6rem;
  margin-top: 2rem;

  background-color: ${({ theme: { color } }) => color.gray3};
  border-radius: 1.6rem;

  .search-input {
    flex: 1 0;

    margin: 1rem 2rem;
    padding: 0 0 0.4rem 0.6rem;

    font-size: 2rem;
    background-color: ${({ theme: { color } }) => color.gray3};

    outline: none;

    &:focus {
      border-bottom: 0.2rem solid #000;
      padding-bottom: 0.2rem;
    }
  }

  .search-icon {
    display: flex;
    align-items: center;
    margin: 1rem;
    margin-right: 1.4rem;
    background: none;

    cursor: pointer;

    img {
      width: 3rem;
    }
  }
`;
