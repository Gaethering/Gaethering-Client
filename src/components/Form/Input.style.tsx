import styled from 'styled-components';

const StyledInput = styled.div`
  input {
    width: 100%;
    box-sizing: border-box;
    padding-left: 1rem;
    font-size: 1.6rem;
    border: 0;
    border-bottom: 1px solid ${({ theme }) => theme.color.gray2};

    ::placeholder {
      color: ${({ theme }) => theme.color.gray2};
    }
  }
`;

export default StyledInput;
