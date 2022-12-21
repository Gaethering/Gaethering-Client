import ArticleList from '../components/Community/ArticleList';
import SearchBar from '../components/Community/SearchBar';
import CommunityNav from '../components/Community/CommunityNav';

function Community() {
  return (
    <div>
      <CommunityNav />
      <SearchBar />
      <ArticleList />
    </div>
  );
}

export default Community;
export { ArticleList };
