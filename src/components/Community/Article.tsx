import CommentLogo from '../../assets/CommentLogo';
import Logo from '../../assets/Logo';
import Button from '../Form/Button';
import { StyledArticle } from './Article.style';

function Article() {
  return (
    <StyledArticle>
      <div className="title">
        <div className="title_logo">
          <Button btnTheme="main" type="button">
            동네정보
          </Button>
        </div>
        <p className="title_content">
          ㅇㅇ동 갈만한 애견 동반 식당 추천드려요~!
        </p>
      </div>
      <div className="body">
        부모님이랑 저희 강아지 데리고 식사할만한 식당 찾아서 추천드려요~!
      </div>
      <div className="time">4시간 전</div>
      <div className="footer">
        <div className="like_container container">
          <Logo />
          <p>추천해요 3</p>
        </div>
        <div className="comment-container container">
          <CommentLogo />
          <p>댓글 2</p>
        </div>
      </div>
    </StyledArticle>
  );
}

export default Article;
