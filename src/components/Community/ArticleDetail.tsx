import { useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { getArticleDetail } from '../../api/boardAPI';
import { CategoryID } from '../../api/boardAPI.type';
import { QueryKeys } from '../../api/QueryKeys';
import Logo from '../../assets/Logo';
import useRelativeTime from '../../Hooks/useRelativeTime';
import { useCategory } from '../../pages/Community';
import ArticleComments from './ArticleComments';
import * as S from './ArticleDetail.style';

function ArticleDetail() {
  const navigate = useNavigate();
  const { postId } = useParams<'postId'>();
  const { category } = useCategory();
  const categoryId = CategoryID[category];

  const { data: article, isLoading } = useQuery(
    [QueryKeys.ArticleDetail, postId],
    () => {
      if (!postId) {
        return;
      }
      return getArticleDetail(categoryId, postId);
    }
  );

  const createdAt = Date.parse(article?.createdAt ?? '2020-01-01').toString();
  const relTime = useRelativeTime(createdAt);

  return (
    <>
      {isLoading || (
        <S.ArticleOverlay
          onClick={({ target }) => {
            const t = target as HTMLDivElement;
            t?.className.includes('post-editer-overlay') && navigate('../');
          }}
          className="post-editer-overlay"
        >
          <S.StyledWrapper>
            <S.Title>
              <S.CategoryTag>동네정보</S.CategoryTag>
              {article?.title}
            </S.Title>

            <S.Contents>
              {article?.images[0] && (
                <S.Images>
                  {article?.images.map(({ imageUrl, imageId }) => (
                    <img
                      src={imageUrl}
                      alt={'이미지' + imageId}
                      key={imageId}
                    />
                  ))}
                </S.Images>
              )}
              <pre className="contents-body">{article?.content}</pre>
              <div className="time">{relTime}</div>
            </S.Contents>

            <S.Bottom>
              <div className="btn-container">
                <S.Button type="button">
                  {/* {hasHeart ? <Logo /> : <Logo color={gray} />}
            추천해요 {heartCnt} */}
                  <Logo />
                  추천해요 {article?.heartCnt}
                </S.Button>
              </div>
            </S.Bottom>
            <ArticleComments />
          </S.StyledWrapper>
        </S.ArticleOverlay>
      )}
    </>
  );
}

export default ArticleDetail;
