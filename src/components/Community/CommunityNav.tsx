import { StyledCommunityNav, NavButton } from './CommunityNav.style';

function CommunityNav() {
  return (
    <StyledCommunityNav>
      <NavButton type='button' className='active'>질문 있어요</NavButton>
      <NavButton type='button'>동네 정보</NavButton>
    </StyledCommunityNav>
  )
}

export default CommunityNav;