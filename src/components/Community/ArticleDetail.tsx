import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { GetArticleDetailResponse } from '../../api/boardAPI.type';
import { QueryKeys } from '../../api/QueryKeys';
import * as S from './ArticleDetail.style';

function ArticleDetail() {
  const { postId } = useParams<'postId'>();
  const article = useQuery([QueryKeys.ArticleDetail]);

  return (
    <S.StyledWrapper>
      {postId}
      {/* <S.Title>
        <S.CategoryTag>동네정보</S.CategoryTag>
        {title}
      </S.Title>

      <S.Contents>
        <S.Image>
          {imageUrl && <img src={imageUrl} alt={'게시글 이미지'} />}
        </S.Image>
        <p className="contents-body">{splitContents}</p>
        {contentsArr.length > 4 && <S.More>더보기</S.More>}
        <div className="time">{relTime}</div>
      </S.Contents>

      <S.Bottom>
        <div className="btn-container">
          <S.Button type="button">
            {hasHeart ? <Logo /> : <Logo color={gray} />}
            추천해요 {heartCnt}
          </S.Button>
        </div>
        <div className="btn-container">
          <S.Button type="button">
            <CommentLogo />
            댓글 {commentCnt}
          </S.Button>
        </div>
      </S.Bottom> */}
    </S.StyledWrapper>
  );
}

export default ArticleDetail;
