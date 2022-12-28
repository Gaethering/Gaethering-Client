export const enum BoardApiUrl {
  /** GET: 게시글 목록 조회 /boards/{categoryId}/list?size={5}&lastPostId={9223372036854775807} */
  GetArticles = '/boards/',
  /** GET: 게시글 상세 조회 /boards/{categoryId}/{postId} */
  GetArticleDetail = '/boards/',
  /** POST: 게시글 작성 */
  PostArticle = '/boards?categoryId=',
  /** PATCH: 게시글 수정 /boards/{postId} */
  PatchArticle = '/boards/',
  /** POST: 게시글 이미지 추가 /boards/{postId}/images */
  PostImage = '/boards/',
  /** DELETE: 게시글 이미지 삭제 /boards/{postId}/images/{imageId} */
  DeleteImage = '/boards/',
  /** DELETE: 게시글 삭제 /boards/{postId} */
  DeleteArticle = '/boards/',
  /** POST: 좋아요  /boards/{postId}/hearts */
  PostHeart = '/boards/',
  /** GET: 댓글 조회 /boards/{postId}/comments?size={5}&lastPostId={9223372036854775807} */
  GetComments = '/boards/',
  /** POST: 댓글 작성 /boards/{postId}/comments */
  PostComment = '/boards/',
  /** PATCH: 댓글 수정 /boards/{postId}/comments/{commentId} */
  PatchComment = '/boards/',
  /** DELETE: 댓글 수정 /boards/{postId}/comments/{commentId} */
  DeleteComment = '/boards/',
}

export const CategoryID = {
  qna: 1,
  info: 2,
} as const;

export type CommunityCategory = keyof typeof CategoryID;

export interface BoardArticleList {
  postId: number;
  title: string;
  content: string;
  imageUrl: string;
  heartCnt: number;
  commentCnt: number;
  hasHeart: boolean;
  createdAt: string;
}

export interface BoardArticle {
  title: string;
  content: string;
  imagesUrls: {
    imageUrl: string;
    isRepresentative: boolean;
  }[];
  categoryName: CommunityCategory;
  viewCnt: number;
  heartCnt: number;
  nickname: string;
  createdAt: string;
}

export interface GetArticlesResponse {
  posts: BoardArticleList[];
  totalPostsCnt: number;
  nextCursor: number | undefined;
}

export interface GetArticleDetailResponse {
  postId: number;
  title: string;
  content: string;
  nickname: string;
  heartCnt: number;
  viewCnt: number;
  createdAt: string;
  images: {
    imageId: number;
    imageUrl: string;
  }[];
  isOwner: boolean;
}

export interface PatchArticleResponse extends BoardArticle {
  updatedAt: string;
  imagesUrls: {
    imageId: number;
    imageUrl: string;
    createdAt: string;
    updatedAt: string;
    isRepresentative: boolean;
  }[];
}

export interface PostImageResponse {
  imageId: number;
  imageUrl: string;
  createdAt: string;
  isRepresentative: boolean;
}

export interface PostArticleResponse extends BoardArticle {
  postId: string;
}

export interface PostArticleRequest {
  title: string;
  content: string;
}

export type PatchArticleRequest = PostArticleRequest;

export interface PostHeartResponse {
  memberId: number;
  postId: number;
  heartCnt: number;
}

export interface Comment {
  commentId: number;
  memberId: number;
  content: string;
  nickname: string;
  createdAt: string;
}

export interface ListComment extends Comment {
  isOwner: boolean;
}

export interface GetCommentsResponse {
  comments: ListComment[];
  totalCommentsCnt: number;
  nextCursor: number | undefined;
}

export interface PostCommentRequest {
  content: string;
}
export type PostCommentResponse = Comment;

export interface PatchCommentRequest {
  content: string;
}
export type PatchCommentResponse = Comment;
