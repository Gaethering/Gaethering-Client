import styled from 'styled-components';
import SpeechBubleTale from '../../assets/SpeechBubleTale';

interface Props {
  children: string;
  color: 'white' | 'myBubble';
}

function SpeechBubble({ children, color }: Props) {
  return (
    <SyledSpeechBox color={color}>
      {color === 'white' && (
        <SpeechBubleTale color={color} className="speech-tale" />
      )}
      <Speech>{children}</Speech>
      {color === 'myBubble' && (
        <SpeechBubleTale color={color} className="speech-tale my" />
      )}
    </SyledSpeechBox>
  );
}

export default SpeechBubble;

interface StyleProps {
  color: 'white' | 'myBubble';
}

const Speech = styled.span`
  display: block;
  padding: 0.6rem 2rem;

  border-radius: 0.8rem;
`;

const SyledSpeechBox = styled.p<StyleProps>`
  display: flex;

  ${Speech} {
    background-color: ${({ color, theme }) =>
      color === 'white' ? theme.color.white : theme.color.yellow};
  }

  .speech-tale {
    height: 1.4rem;
    padding-top: 0.4rem;

    translate: 0.3rem;

    &.my {
      translate: -0.3rem;
    }
  }
`;
