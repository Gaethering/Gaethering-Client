import { NavButton, StyledSectionNav } from './SectionNav.style';

interface Props<TStateType extends string> {
  currentState: TStateType;
  setState: React.Dispatch<React.SetStateAction<TStateType>>;
  sectionStates: {
    name: string;
    state: TStateType;
  }[];
}
type PointerHandler = React.PointerEventHandler<HTMLButtonElement>;

function SectionNav<TStateType extends string>({
  currentState,
  setState,
  sectionStates,
}: Props<TStateType>) {
  const handleClick: PointerHandler = ({ currentTarget: target }) => {
    setState(target.name as TStateType);
  };

  return (
    <StyledSectionNav>
      {sectionStates.map((elem) => (
        <NavButton
          type="button"
          onClick={handleClick}
          key={elem.state}
          name={elem.state}
          className={currentState === elem.state ? 'active' : ''}
        >
          {elem.name}
        </NavButton>
      ))}
    </StyledSectionNav>
  );
}

export default SectionNav;
