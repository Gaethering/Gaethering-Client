import { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { CommunityType } from '../api/boardAPI.type';
import ArticleList from '../components/Community/ArticleList';
import CommunityNav from '../components/Community/CommunityNav';
import PostButton from '../components/Community/PostButton';
import SearchBar from '../components/widgets/SearchBar';

function Community() {
  const [isEditting, setIsEditting] = useState(false);
  const [searchWord, setSearchWord] = useState('');
  const [category, setCategory] = useState<CommunityType>('qna');

  return (
    <>
      <div>
        <Outlet />
        <CommunityNav
          communityState={category}
          setCommunityState={setCategory}
        />
        <SearchBar searchWord={searchWord} setSearchWord={setSearchWord} />
        <ArticleList />
        <PostButton to={'editer'} onClick={() => setIsEditting(true)}>
          글 쓰기
        </PostButton>
      </div>
    </>
  );
}

export default Community;
