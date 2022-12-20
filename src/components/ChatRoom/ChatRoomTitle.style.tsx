import styled from 'styled-components';

const Title = styled.header`
  position: sticky;
  top: 0rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  padding: 0.6rem 0;

  box-shadow: 0 0 1rem 0.4rem rgba(100, 100, 100, 0.1);
  background-color: ${({ theme: { color } }) => color.skyblue};

  z-index: 100;

  .chatroom-back {
    padding-left: 3vw;

    font-size: 2.4rem;
    font-weight: 700;
    text-decoration: none;
  }

  h2 {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.2rem;

    font-size: 1.8rem;

    div {
      font-size: 1.4rem;
    }
  }
`;

const InfoMark = styled.button`
  padding: 0;
  background: none;

  padding-right: 3vw;
  height: 2.4rem;

  cursor: pointer;

  img {
    width: 2.4rem;
  }
`;

export { InfoMark, Title };
