import { useEffect, useState } from 'react';
import { NavLink, Outlet, useOutlet, useOutletContext } from 'react-router-dom';
import { CommunityCategory } from '../api/boardAPI.type';
import ArticleList from '../components/Community/ArticleList';
import CommunityNav from '../components/Community/CommunityNav';
import PostButton from '../components/Community/PostButton';
import SearchBar from '../components/widgets/SearchBar';
import { useSetServiceName } from './Root';
import { Container } from './Root.style';

type CommunityOutlet = {
  category: CommunityCategory;
};

function Community() {
  const [searchWord, setSearchWord] = useState('');
  const [category, setCategory] = useState<CommunityCategory>('qna');

  const setNav = useSetServiceName();

  useEffect(() => {
    setNav('동네소식');
  }, [setNav]);

  return (
    <>
      <Container>
        <Outlet context={{ category }} />
        <CommunityNav
          communityState={category}
          setCommunityState={setCategory}
        />
        <SearchBar searchWord={searchWord} setSearchWord={setSearchWord} />
        <ArticleList category={category} />
        <PostButton to={'editer'}>글 쓰기</PostButton>
      </Container>
    </>
  );
}

export default Community;

export const useCategory = () => useOutletContext<CommunityOutlet>();
