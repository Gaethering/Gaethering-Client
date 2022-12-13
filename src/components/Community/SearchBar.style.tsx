import styled from 'styled-components';

export const StyledSearchBar = styled.div`
  margin: 1rem auto;
  width: 80vw;

  .search_bar {
    width: 100%;
    border-radius: 1.6rem;
    background-color: ${({ theme: { color } }) => color.gray3};

    outline: none;

    &:focus {
      border-bottom: 0.2rem solid #000;
      padding-bottom: 0.2rem;
    }
  }
`;