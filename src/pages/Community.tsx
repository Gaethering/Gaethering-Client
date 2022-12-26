import { useEffect, useState } from 'react';
import { NavLink, Outlet, useOutlet, useOutletContext } from 'react-router-dom';
import { CommunityCategory } from '../api/boardAPI.type';
import ArticleList from '../components/Community/ArticleList';
import CommunityNav from '../components/Community/CommunityNav';
import PostButton from '../components/Community/PostButton';
import SearchBar from '../components/widgets/SearchBar';
import { useSetServiceName } from './Root';

type CommunityOutlet = {
  category: CommunityCategory;
  // setCategory: React.Dispatch<React.SetStateAction<CommunityType>>;
};

function Community() {
  const [isEditting, setIsEditting] = useState(false);
  const [searchWord, setSearchWord] = useState('');
  const [category, setCategory] = useState<CommunityCategory>('qna');

  const setNav = useSetServiceName();

  useEffect(() => {
    setNav('동네소식');
  }, [setNav]);

  return (
    <>
      <div>
        <Outlet context={{ category }} />
        <CommunityNav
          communityState={category}
          setCommunityState={setCategory}
        />
        <SearchBar searchWord={searchWord} setSearchWord={setSearchWord} />
        <ArticleList category={category} />
        <PostButton to={'editer'} onClick={() => setIsEditting(true)}>
          글 쓰기
        </PostButton>
      </div>
    </>
  );
}

export default Community;

export const useCategory = () => useOutletContext<CommunityOutlet>();
