import styled from 'styled-components';

const StyledSearchBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 5rem;
  margin-top: 2rem;

  background-color: ${({ theme: { color } }) => color.gray3};
  border-radius: 1.6rem;

  z-index: index 1000;

  .search-input {
    flex: 1 0;

    margin: 0.6rem 2rem;
    padding: 0.2rem 0 0.4rem 0.6rem;

    font-size: 1.6rem;
    background-color: ${({ theme: { color } }) => color.gray3};

    outline: none;

    &:focus {
      border-bottom: 0.1rem solid #000;
      padding-bottom: 0.3rem;
    }
  }

  .search-icon {
    display: flex;
    align-items: center;
    margin: 1rem;
    margin-right: 1.6rem;
    background: none;

    cursor: pointer;

    img {
      width: 2.6rem;
    }
  }
`;

export { StyledSearchBar };
