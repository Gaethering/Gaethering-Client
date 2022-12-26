import StyledNavProfile from './NavProfile.style';
import defaultImg from '../../assets/defaultProfilePicture.svg';
import { AuthApiUrl, NavInfoResponse } from '../../api/authAPI.type';
import { useQuery } from 'react-query';
import { QueryKeys } from '../../api/QueryKeys';
import { getRequest } from '../../api/requests';

type Props = { onClick: React.MouseEventHandler<HTMLDivElement> };

export default function NavProfile({ onClick }: Props) {
  const { data: userInfo, isLoading } = useQuery(QueryKeys.navInfo, () =>
    getRequest<NavInfoResponse>(AuthApiUrl.NavInfo)
  );
  const imageUrl = userInfo?.imageUrl;
  const nickname = userInfo?.nickname;
  const petName = userInfo?.petName;

  return (
    <StyledNavProfile className="nav-profile" onClick={onClick}>
      {isLoading ? (
        <></>
      ) : (
        <img
          src={imageUrl ?? defaultImg}
          className="pet-profile-img"
          alt="반려동물 프로필"
        />
      )}
      <div className="user-info">
        <span className="pet-name">{petName}</span>
        <span className="user-name">{nickname}</span>
      </div>
    </StyledNavProfile>
  );
}
