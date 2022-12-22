export type CommunityType = 'qna' | 'info';

export const enum BoardApiUrl {
  /** POST: 게시글 작성 */
  PostArticle = '/api/boards',
}

export interface BoardArticle {
  title: string;
  contents: string;
  category: CommunityType;
  viewCnt: number;
  memberId: number;
  nickname: string;
  likeCnt: number;
  createdAt: string;
  images: {
    imageId: number;
    imageUrl: string;
  }[];
}

export interface PostArticleRequest {
  title: string;
  contents: string;
  category: string;
}

export type PostArticleResponse = BoardArticle;