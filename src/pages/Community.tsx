import { useState } from 'react';
import ArticleList from '../components/Community/ArticleList';
import CommunityNav from '../components/Community/CommunityNav';
import SearchBar from '../components/widgets/SearchBar';

export type CommunityType = 'qna' | 'localInfo';

function Community() {
  const [searchWord, setSearchWord] = useState('');
  const [category, setCategory] = useState<CommunityType>('qna');
  return (
    <div>
      <CommunityNav communityState={category} setCommunityState={setCategory} />
      <SearchBar searchWord={searchWord} setSearchWord={setSearchWord} />
      <ArticleList />
    </div>
  );
}

export default Community;
export { ArticleList };
