import UserPetList from './UserPetList';
import UserProfile from './UserProfile';
import { StyledUser } from './User.style';
import { useState } from 'react';
import PetImageDefault from '../../assets/PetImageDefault.svg';
import { ProfileResponse } from '../../api/profileAPI.typs';


function User({ data: user }:ProfileResponse) {
  //temporary state

  const [petList, setPetList] = useState([
    {
      name: '예삐',
      isRepresentative: true,
      imageUrl: PetImageDefault,
    },
    {
      name: '뽀삐',
      isRepresentative: false,
      imageUrl:
        'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAHoAWAMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAABAAIDBAUGB//EAC8QAAEDAgUDAwMDBQAAAAAAAAEAAgMEEQUSITFBBlFhEyJxFBaRIzKBNEJDgsH/xAAXAQEBAQEAAAAAAAAAAAAAAAAAAQID/8QAGxEBAQEAAwEBAAAAAAAAAAAAABEBAhJRMSL/2gAMAwEAAhEDEQA/AOMa5lLWQyvcA0O1PZaMs+Eyyl81ZFc+VRqY4X2in2foAoRgNBv6AK1Nzbhs3JrXjqsDZa9VEpRieAxm/wBSy/gLKjwShG0DVYZhdENPQZ+E/XqdePjUZ1HgbNPqBbwE77owMG7XvcR2YVnsw6mbtC38KZlHENo2/hTq1Vk9W4UP2U9Q/wCIyl940xFosLqHfLbLOhpAa10jXEBotlI0KvCMA7BTqUXdYTEfp4NL4u4BAdX4jbTBmf7PSc0DZRkX4U3iUJOpcal0jw6kj+XX/wCIIujSTphVQxte9pc29tlYDdFJGB2UzADuF0RmVEzxKyKns99/c2+wV+OMncaoto4BU+uGWeRa6vxsHAQVWxuspGwuK6PCOn563K94yRkXBI3W23o9g3mNvhErhG07uRunCm1Xc/Z4P+c/FlmV/TdXTAuYA9o7IrmTSW5QFIOU/EXPipnhrgyTYXPKrYIyrbTE1hJeSoJXUreAkrhCSRGNHoArEbcyq0kZihawuzW5KuRgqqe1hut/pnCDXVWeRp9Fm5toSsamY+WVsbRq42C9QwmibQ4fFE39xF3HygswMZE0MY0NaBsArGZQgpeoBupROXWCQLZmEW08qESXUsbbHRZo4vq3AYT+sWN0NySdSVzoaGiw2XqldQtroDE42J5tdYf2PTW/rJb/AAFaOEksASUl3o6HorEPqZyT8JJR5MyVkTM0hACtwx11Q1rqWhleHbXFrrocB6Ygika6QGqnvbM4aN+AvQcNwiClaDka6U63tsukn1i7vxynSPS9Y1za/Fg2HKLshBuf5K6CpqHBxy6+FuzMa2nffTRc2AXOPa65ctbxzuMdaNwfE6Ojno6l/wBXJka+MAhpuBr+Vb6m6phwPC31z4ZZgz+2Ma389lpVULXNNme4i1xuFjdJ4DJhcNVDW4jNiLZZS4GoGrQeFitJ+k+qYeo6IVdLFM1mbKc7bC/g8rqoJSVRhp6enYGQtYxg2a0WAViJ+tgmJrTjdcKy3ZUIHai60GgW1WkJBHKL6JKChTQR07bRsaweApxK0GwCWTTTZCwHBW90CaeN0bm5rG3K5iSoZHO5oPK6OSAS/HlZNfgRqTmik9N3FhdY2riv6gcN0o8ofcaX3VV+F4lTixHqDuwKL6OpcLxh+fjwVmtNCeRrcpLgNbC5ViA6alZdLQ4lKQK2mAAN7hwP8rXjopQABoe6qaswSe8LVa8ZQqFNTiIDNqebqyBbRp0VqJyeUlCL7FJKHBzWqKR5J93tCjMl/wBunlADutVDy722AJTfdvexUgta3KVlBG1mmuqPpkbFSoHdFMy6a3Tmt015RATtlKQ0acJ17hNLkbhS4QbnwkmkpKUiuxOLuFEHaIjVbQ8J4NkxuicCopwclm7IBDlTVOzFLMmpJVOBQLj3QASUBzIJW7JIis0KQbpoTgtIeCnBMCcgISKBSO6ApcIJcKbjRXSJFkECshwJIQRagg//2Q==',
    },
    {
      name: '해삐',
      isRepresentative: false,
      imageUrl:
        'https://images.pexels.com/photos/13215915/pexels-photo-13215915.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
  ]);
  return (
    <StyledUser>
      <UserProfile
        userName={user?.nickname}
        userLocal="ㅂㅂ동"
        userTemp={user?.mannerDegree}
        petImg={petList[0].imageUrl}
      />
      <UserPetList petList={petList} />
    </StyledUser>
  );
}

export default User;
