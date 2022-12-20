import { useEffect } from 'react';
import styled from 'styled-components';
import { useSetServiceName } from './Root';

function SNS() {
  const setNav = useSetServiceName();

  useEffect(() => {
    setNav('멍그램');
  }, [setNav]);

  return (
    <StyledSNS>
      <h1>멍그램</h1>
    </StyledSNS>
  );
}

export default SNS;

const StyledSNS = styled.div`
  margin: 10rem;
`;
