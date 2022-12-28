import { CommunityCategory } from '../../api/boardAPI.type';
import SectionNav from '../widgets/SectionNav';

interface Props {
  communityState: CommunityCategory;
  setCommunityState: React.Dispatch<React.SetStateAction<CommunityCategory>>;
}

function CommunityNav({ communityState, setCommunityState }: Props) {
  return (
    <SectionNav<CommunityCategory>
      currentState={communityState}
      setState={setCommunityState}
      sectionStates={[
        { name: '질문있어요', state: 'qna' },
        { name: '동네정보', state: 'info' },
      ]}
    />
  );
}

export default CommunityNav;
