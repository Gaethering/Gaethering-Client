import { CommunityType } from '../../api/boardAPI.type';
import SectionNav from '../widgets/SectionNav';

interface Props {
  communityState: CommunityType;
  setCommunityState: React.Dispatch<React.SetStateAction<CommunityType>>;
}

function CommunityNav({ communityState, setCommunityState }: Props) {
  return (
    <SectionNav<CommunityType>
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
