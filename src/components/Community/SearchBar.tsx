import { ChangeEventHandler } from 'react';
import { StyledSearchBar } from './SearchBar.style';

interface SearchBarProp {
  onChange?: ChangeEventHandler;
}

function SearchBar({ onChange }: SearchBarProp) {
  return (
    <StyledSearchBar>
      <form className="search">
        <input type="text" className="search_bar" onChange={onChange} />
      </form>
    </StyledSearchBar>
  );
}

export default SearchBar;
