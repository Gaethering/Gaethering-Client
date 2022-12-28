import React from 'react';
import searchIcon from '../../assets/searchIcon.svg';
import { StyledSearchBar } from './SearchBar.style';

const Icon = () => <img src={searchIcon} alt="검색" />;

interface Props {
  searchWord: string;
  setSearchWord: React.Dispatch<React.SetStateAction<string>>;
}

function SearchBar({ searchWord, setSearchWord }: Props) {
  return (
    <StyledSearchBar>
      <input
        className="search-input"
        value={searchWord}
        onChange={({ currentTarget }) => setSearchWord(currentTarget.value)}
      />
      <button type="button" className="search-icon">
        <Icon />
      </button>
    </StyledSearchBar>
  );
}

export default SearchBar;
