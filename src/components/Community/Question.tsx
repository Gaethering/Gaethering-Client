import Logo from '../../assets/Logo';

function Question() {
  return (
    <div>
      <div className="wrapper">
        <div className="title">
          <div className="title_logo logo">Q.</div>
          <p className="title_content">
            ㅇㅇ동 갈만한 애견 동반 식당 추천드려요~!
          </p>
        </div>
        <div className="body">
          <p className="body_content">
            부모님이랑 저희 강아지 데리고 식사할만한 식당 찾아서 추천드려요~!
          </p>
          <div className="time">4시간 전</div>
        </div>
        <div className="footer">
          <div className="like_container container">
            <div className="like_logo logo">
              <Logo />
            </div>
            <p>공감해요 3</p>
          </div>
          <div className="comment-container container">
            <img
              src="/src/assets/comment.svg"
              alt="comment-logo"
              className="comment_logo logo"
            />
            <p>댓글 2</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Question;
