import styled, { useTheme } from 'styled-components';
import SpeechBubleTale from '../../assets/SpeechBubleTale';

interface Props {
  children: string;
  color: 'white' | 'myBubble';
}

function SpeechBubble({ children, color }: Props) {
  const theme = useTheme();

  return (
    <SyledSpeechBox color={color}>
      {color === 'white' && <SpeechBubleTale className="speech-tale" />}
      <Speech>{children}</Speech>
      {color === 'myBubble' && (
        <SpeechBubleTale
          color={theme.color.yellow}
          className="speech-tale my"
        />
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
  padding: 0.6rem 1.2rem;

  border-radius: 0.8rem;

  font-size: 1.6rem;
  font-weight: 500;
`;

const SyledSpeechBox = styled.p<StyleProps>`
  display: flex;

  ${Speech} {
    box-shadow: 0 0 0.6rem 0 rgba(100, 100, 100, 0.1);

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
