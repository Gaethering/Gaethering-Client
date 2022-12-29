import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { postMakeChatroom } from '../../api/chatroomAPI';
import { PostChatroomRequest } from '../../api/chatroomAPI.type';
import StyledButton from '../Form/Button.style';
import Input from '../Form/Input';
import StyledInput from '../Form/Input.style';

function ChatRoomEditer() {
  const { register, handleSubmit, setValue } = useForm<PostChatroomRequest>();
  const navigate = useNavigate();
  const [walkingTimes, setWalkingTimes] = useState<
    { dayOfWeek: string; time: string }[]
  >([]);
  const [day, setDay] = useState('');
  const [time, setTime] = useState('');

  const onSubmit: SubmitHandler<PostChatroomRequest> = async (data) => {
    console.log(data);
    const res = await postMakeChatroom(data);

    if (res.status === 201) {
      console.log(res);
      alert('채팅방 생성 완료!');

      navigate(`./../${res.data.roomKey}`);
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <BackButton onClick={() => navigate('./../')}>{'<'}</BackButton>
      <Input<PostChatroomRequest>
        register={register}
        name="name"
        required={true}
        plHolder="20자 이하"
        label="채팅방 이름"
      />
      <Input<PostChatroomRequest>
        register={register}
        name="description"
        required={true}
        plHolder="채팅방 설명"
        label="채팅방 설명"
      />
      <Input<PostChatroomRequest>
        register={register}
        name="maxParticipant"
        required={true}
        type="number"
        options={{ valueAsNumber: true }}
        label="최대 참여 인원"
      />
      <StyledInput className="input-container walking">
        <label className="day">
          <div className="label">산책 요일</div>
          <input
            autoComplete="off"
            value={day}
            onChange={({ currentTarget }) => setDay(currentTarget.value)}
          />
        </label>
        <label className="time">
          <div className="label">산책 시간</div>
          <input
            autoComplete="off"
            value={time}
            onChange={({ currentTarget }) => setTime(currentTarget.value)}
          />
        </label>
        <Submit
          btnTheme="main"
          type="button"
          onClick={() => {
            setWalkingTimes((prev) => [
              ...prev,
              { dayOfWeek: day, time: time },
            ]);
            setDay('');
            // setTime('');
            console.log(walkingTimes);
            setValue('walkingTimes', walkingTimes);
          }}
        >
          산책 시간 추가
        </Submit>
      </StyledInput>
      {walkingTimes.map((elem) => (
        <WalkingTime
          key={elem.dayOfWeek + elem.time}
        >{`${elem.dayOfWeek}요일: ${elem.time}`}</WalkingTime>
      ))}
      <Submit btnTheme="main" type="submit">
        채팅방 만들기
      </Submit>
    </Form>
  );
}

export default ChatRoomEditer;

const Form = styled.form`
  width: 40rem;
  margin: 10rem auto;
  padding: 2rem 3rem;

  background-color: #fff;
  box-shadow: 0 0 1rem 0 rgba(100, 100, 100, 0.2);
  border-radius: 1.6rem;

  .input-container {
    margin: 4rem 0;

    input {
      margin-top: 1rem;
      height: 3.4rem;
    }

    &.walking {
      display: flex;
      align-items: center;
      gap: 2rem;

      button {
        font-size: 1.2rem;
        padding: 0;
        width: 10rem;
        margin: 0;
        margin-top: 2rem;
      }

      .day {
        flex: 1;
      }
      .time {
        flex: 3;
      }

      .label {
        margin-top: 2rem;
      }
    }
  }
`;

const WalkingTime = styled.p`
  font-size: 1.6rem;
  margin: 1rem 0;
`;

const Submit = styled(StyledButton)`
  font-size: 1.6rem;
  padding: 0.8rem 2rem;

  box-sizing: border-box;
  width: 100%;
  height: 4rem;
  margin-top: 9rem;
`;

const BackButton = styled.button`
  padding: 0.4rem 0;
  padding-right: 1rem;
  margin-bottom: 3rem;
  font-size: 3rem;
  font-weight: 700;
  font-feature-settings: 'ss18';

  transition: all 0.3s ease-in-out;

  &:hover {
    translate: -0.6rem;
    font-weight: 800;
  }
`;
