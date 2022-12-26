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
  const articlesQuery = useQuery([QueryKeys.ArticleList, category], () =>
    getArticles(category, 10, '9223372036854775807')
  );

  console.log('게시글!', articlesQuery);

  //임시
  const articles = [
    {
      title: 'ㅇㅇ동 갈만한 애견 동반 식당 추천드려요~!',
      contents:
        '부모님이랑 저희 강아지 데리고 식사할만한 식당 찾아서 추천드려요~!',
      category: '동네정보',
      viewCnt: 14,
      memberId: 1,
      nickname: '닉네임',
      likeCnt: 3,
      createdAt: '2022-11-30 12:30:23',
    },
    {
      title: 'ㅁㅁ공원 지갑 잃어버리신 분 계신가요?',
      contents:
        'ㅁㅁ공원에서 산책하다가 지갑을 하나 주웠어요. 주인 분 계시면 댓글주세요~',
      category: '동네정보',
      viewCnt: 14,
      memberId: 1,
      nickname: '닉네임',
      likeCnt: 10,
      createdAt: '2022-11-30 12:30:23',
    },
    {
      title: '제목1',
      contents: '내용',
      category: '동네정보',
      viewCnt: 14,
      memberId: 1,
      nickname: '닉네임',
      likeCnt: 10,
      createdAt: '2022-11-30 12:30:23',
    },
  ];

  return (
    <StyledArticleList>
      {articles.map((article, index) => (
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
