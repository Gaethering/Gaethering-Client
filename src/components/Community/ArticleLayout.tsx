import { useTheme } from 'styled-components';
import { BoardArticleList } from '../../api/boardAPI.type';
import CommentLogo from '../../assets/CommentLogo';
import Logo from '../../assets/Logo';
import useRelativeTime from '../../Hooks/useRelativeTime';
import Button from '../Form/Button';
import { StyledArticleLayout } from './Article.style';

function ArticleLayout({
  title,
  commentCnt,
  content,
  createdAt,
  hasHeart,
  heartCnt,
  imageUrl,
}: BoardArticleList) {
  const gray = useTheme().color.gray2;
  const time = Date.parse(createdAt).toString();
  const relTime = useRelativeTime(time);

  return (
    <StyledArticleLayout>
      <div className="title">
        <div className="title_logo">
          <Button btnTheme="main" type="button">
            동네정보
          </Button>
        </div>
        <p className="title_content">{title}</p>
      </div>
      <p className="body">{content}</p>
      <div className="time">{relTime}</div>
      <div className="footer">
        <div className="like_container container">
          {hasHeart ? <Logo /> : <Logo color={gray} />}
          <p>추천해요 {heartCnt}</p>
        </div>
        <div className="comment-container container">
          <CommentLogo />
          <p>댓글 {commentCnt}</p>
        </div>
      </div>
    </StyledArticleLayout>
  );
}

export default ArticleLayout;
