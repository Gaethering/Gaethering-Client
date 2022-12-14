import CommentLogo from '../../assets/CommentLogo';
import Logo from '../../assets/Logo';
import Button from '../Form/Button';
import { StyledArticleLayout } from './Article.style';

interface ArticleProp {
  title: string, 
  contents: string, 
  viewCnt?: number, 
  likeCnt: number,
}

function ArticleLayout({title, contents, viewCnt, likeCnt}: ArticleProp) {
  return (
    <StyledArticleLayout>
      <div className="title">
        <div className="title_logo">
          <Button btnTheme="main" type="button">
            동네정보
          </Button>
        </div>
        <p className="title_content">
          {title}
        </p>
      </div>
      <div className="body">
        {contents}
      </div>
      <div className="time">4시간 전</div>
      <div className="footer">
        <div className="like_container container">
          <Logo />
          <p>추천해요 {likeCnt}</p>
        </div>
        <div className="comment-container container">
          <CommentLogo />
          <p>댓글 2</p>
        </div>
        <div className="view-container container">
          <p>조회 {viewCnt}</p>
        </div>
      </div>
    </StyledArticleLayout>
  );
}

export default ArticleLayout;
