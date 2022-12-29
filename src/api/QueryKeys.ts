export const QueryKeys = {
  /** 펫 프로필 이미지 URL*/
  petProfileImg: ['pet', 'profile', 'image'],
  /** 대표 반려동물 이름 */
  petProfileName: ['pet', 'profile', 'name'],
  /** 엑세스 토큰 */
  accessToken: 'accessToken',
  /** 리프레시 토큰 */
  refreshToken: 'refreshToken',
  /** 로그인 여부 */
  auth: 'auth',
  /** NavBar 유저 정보 */
  navInfo: ['user', 'navBar'],
  /** 사용자 프로필 정보 */
  userProfile: ['user', 'profile'],
  user: 'user',
  /** Board 게시글 */
  Article: 'article',
  /** Board 게시글 리스트 ['article', 'list', {category}]*/
  ArticleList: ['article', 'list'],
  /** Board 게시글 상세 정보 ['article', {id}]*/
  ArticleDetail: 'article',
  /** Board 댓글 리스트 ['article', 'comments', {postId}] */
  ArticleComments: ['article', 'comments'],
  /** 반려동물 프로필 */
  petProfile: ['pet', 'profile', 'petID', 'addPet'],
  pet: 'pet',
} as const;
