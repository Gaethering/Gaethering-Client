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
}

export const enum CategoryID {
  'qna' = 1,
  'info' = 2,
}

export type CommunityCategory = keyof typeof CategoryID;

export interface BoardArticleList {
  title: string;
  content: string;
  imageUrl: string;
  categoryName: CommunityCategory;
  viewCnt: number;
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
