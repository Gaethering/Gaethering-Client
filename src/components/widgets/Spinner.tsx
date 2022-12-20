import styled from 'styled-components';
import spinner from '/src/assets/spinner-1s-200px.svg';

function Spinner({ width = '40vw' }: { width?: string }) {
  return (
    <StyledSpinner className="spinner" width={width}>
      <img src={spinner} alt="로딩중" />
    </StyledSpinner>
  );
}

export default Spinner;

type StyleType = { width: string };

const StyledSpinner = styled.div<StyleType>`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: ${({ width }) => width};
  }
`;
