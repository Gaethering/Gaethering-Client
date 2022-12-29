import { PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from 'styled-components';
import { BoardArticleList, CommunityCategory } from '../../api/boardAPI.type';
import CommentLogo from '../../assets/CommentLogo';
import Logo from '../../assets/Logo';
import useRelativeTime from '../../Hooks/useRelativeTime';
import * as S from './Article.style';

interface Props extends BoardArticleList {
  category: CommunityCategory;
}

function ArticleLayout({
  postId,
  title,
  commentCnt,
  content,
  createdAt,
  hasHeart,
  heartCnt,
  imageUrl,
  category,
}: Props) {
  const gray = useTheme().color.gray2;
  const time = Date.parse(createdAt).toString();
  const relTime = useRelativeTime(time);

  if (content.length > 120) {
    content = content.slice(0, 120);
    content += ' ...';
  }
  const contentsArr = content.split('\n');

  const DetailLink = ({ children }: PropsWithChildren) => (
    <Link to={postId.toString()}>{children}</Link>
  );

  return (
    <S.ArticleLayout>
      <DetailLink>
        <S.Title>
          <div className="title_logo">
            <S.CategoryTag>
              {category === 'info' ? '동네정보' : '질문있어요'}
            </S.CategoryTag>
          </div>
          <h3>{title}</h3>
        </S.Title>
      </DetailLink>

      <S.Contents>
        <DetailLink>
          <S.Image>
            {imageUrl && <img src={imageUrl} alt={'게시글 이미지'} />}
          </S.Image>
        </DetailLink>
        <pre className="contents-body">{content}</pre>
        {(contentsArr.length > 3 || content.length > 120) && (
          <DetailLink>
            <S.More>더보기</S.More>
          </DetailLink>
        )}
        <div className="time">{relTime}</div>
      </S.Contents>

      <S.Bottom>
        <div className="btn-container">
          <S.Button type="button">
            {hasHeart ? <Logo /> : <Logo color={gray} />}
            {category === 'info' ? '추천해요' : '궁금해요'} {heartCnt}
          </S.Button>
        </div>
        <div className="btn-container">
          <DetailLink>
            <S.Button type="button">
              <CommentLogo />
              댓글 {commentCnt}
            </S.Button>
          </DetailLink>
        </div>
      </S.Bottom>
    </S.ArticleLayout>
  );
}

export default ArticleLayout;
