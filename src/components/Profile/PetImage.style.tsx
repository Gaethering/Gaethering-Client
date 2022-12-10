import styled, { css } from 'styled-components';
import main from '../../themes/theme';


const StyledPetImage = styled.div`
    position: relative;
    width: 10rem;
    height: 10rem;
    min-width: 3rem;
    min-height: 3rem;
    border-radius: 50%;
    position: relative;
    overflow: hidden;

    img {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
    }  
`;

export default StyledPetImage;
