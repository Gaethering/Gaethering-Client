import User from '../components/Profile/User';
import Pet from '../components/Profile/Pet';
import EditPet from '../components/Profile/EditPet';
import { getUserProfile } from '../api/profileAPI';
import { useQuery } from 'react-query';
import { useEffect } from 'react';
import { useSetServiceName } from './Root';

function Profile() {
  const userData = useQuery('@getUserProfile', getUserProfile)
  console.log('tt', userData.data)
  
  const setNav = useSetServiceName();
  
  useEffect(() => {
    setNav('프로필');
  }, [setNav]);
  
  
  return (
    <div>
      <User data={userData.data}/>
      {/* petlist */}
    </div>
  );
}

export default Profile;
export { Pet, EditPet };
