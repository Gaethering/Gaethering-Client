import styled from 'styled-components';

const StyledNavProfile = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;

  img.pet-profile-img {
    width: 4rem;
    margin-right: 1rem;

    border-radius: 100%;
  }

  .user-info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    margin-right: 3rem;

    .pet-name {
      display: flex;
      align-items: center;
      height: 2rem;

      font-size: 1.8rem;
      font-weight: 700;
      color: ${({ theme: { color } }) => color.black};
    }

    .user-name {
      display: flex;
      align-items: center;
      height: 2rem;
      font-size: 1.4rem;
      font-weight: 500;
      color: ${({ theme: { color } }) => color.gray2};
    }
  }
`;

export default StyledNavProfile;
