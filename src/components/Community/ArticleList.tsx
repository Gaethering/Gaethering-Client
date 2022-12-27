import ArticleLayout from './ArticleLayout';
import { Button, StyledArticleList } from './Article.style';
import { CategoryID, CommunityCategory } from '../../api/boardAPI.type';
import { useInfiniteQuery, useQuery } from 'react-query';
import { QueryKeys } from '../../api/QueryKeys';
import { getArticles } from '../../api/boardAPI';

interface Props {
  category: CommunityCategory;
}

function ArticleList({ category }: Props) {
  const fetch = ({
    pageParam = '9223372036854775807' as unknown as number,
  }: {
    pageParam?: number;
  }) => getArticles(category, 2, pageParam);

  const { data, fetchNextPage, hasNextPage } = useInfiniteQuery(
    [QueryKeys.ArticleList, category],
    fetch,
    {
      getNextPageParam: (lastPage, pages) => lastPage.nextCursor,
    }
  );

  return (
    <StyledArticleList>
      {data?.pages.map((articles) =>
        articles?.posts.map((article) => (
          <ArticleLayout key={article.postId} {...article} />
        ))
      )}
      <h3>{hasNextPage && 'HAS NEXT PAGE'}</h3>
      <Button type="button" onClick={() => fetchNextPage()}>
        <h2>MORE!!!</h2>
      </Button>
    </StyledArticleList>
  );
}

export default ArticleList;
