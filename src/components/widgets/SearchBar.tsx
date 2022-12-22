import searchIcon from '../../assets/searchIcon.svg';
import { StyledSearchBar } from './SearchBar.style';

// type Props = {};

const Icon = () => <img src={searchIcon} alt="검색" />;

function SearchBar() {
  return (
    <StyledSearchBar>
      <input className="search-input" />
      <button type="button" className="search-icon">
        <Icon />
      </button>
    </StyledSearchBar>
  );
}

export default SearchBar;
