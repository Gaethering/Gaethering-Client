import ArticleLayout from './ArticleLayout';
import { StyledArticleList } from './Article.style';
import { CategoryID, CommunityCategory } from '../../api/boardAPI.type';
import { useQuery } from 'react-query';
import { QueryKeys } from '../../api/QueryKeys';
import { getArticles } from '../../api/boardAPI';

interface Props {
  category: CommunityCategory;
}

function ArticleList({ category }: Props) {
  const { data: articles } = useQuery([QueryKeys.ArticleList, category], () =>
    getArticles(category, 10, '9223372036854775807' as unknown as number)
  );

  console.log('게시글!', articles);

  return (
    <StyledArticleList>
      {articles?.posts.map((article, index) => (
        <ArticleLayout
          key={index}
          title={article.title}
          contents={article.contents}
          viewCnt={article.viewCnt}
          likeCnt={article.likeCnt}
        />
      ))}
    </StyledArticleList>
  );
}

export default ArticleList;
