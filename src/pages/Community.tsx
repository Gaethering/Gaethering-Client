import { useState } from 'react';
import ArticleList from '../components/Community/ArticleList';
import CommunityNav from '../components/Community/CommunityNav';
import SearchBar from '../components/widgets/SearchBar';

function Community() {
  const [searchWord, setSearchWord] = useState('');
  return (
    <div>
      <CommunityNav />
      <SearchBar searchWord={searchWord} setSearchWord={setSearchWord} />
      <ArticleList />
    </div>
  );
}

export default Community;
export { ArticleList };
