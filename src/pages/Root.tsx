import axios from 'axios';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { Outlet, useOutletContext, useNavigate } from 'react-router-dom';
import { postLogOut, postReToken } from '../api/authAPI';
import { setAxiosDefaultsBaseURL } from '../api/axiosConfig';
import { QueryKeys } from '../api/QueryKeys';
import NavBar from '../components/NavBar';
import { ServiceType } from '../components/NavBar/NavBar.type';
import LogInForm from '../components/Root/LogInForm';
import StyledRoot from './Root.style';

export type SetAuthType = Dispatch<React.SetStateAction<boolean>>;

function Root() {
  const [auth, setAuth] = useState(false);
  const [init, setInit] = useState(false);

  const [serviceName, setServiceName] = useState<ServiceType>('개모임');

  const logOut = async () => {
    const accessToken = (
      axios.defaults.headers.common['Authorization'] as string
    ).split(' ')[1];
    const refreshToken = localStorage.getItem(QueryKeys.refreshToken);
    await postLogOut({
      accessToken: accessToken,
      refreshToken: refreshToken as string,
    });
    localStorage.removeItem(QueryKeys.refreshToken);
    setInit(false);
    setAuth(false);
  };

  const navigate = useNavigate();

  useEffect(() => {
    setAxiosDefaultsBaseURL();
    postReToken()
      .then((res) => setAuth(res))
      .then(() => setInit(true));
  }, [init]);

  useEffect(() => {
    if (auth && init) {
      navigate('/chat');
    } else if (!auth) {
      navigate('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth, init]);

  if (!init) {
    return <></>;
  }

  return (
    <StyledRoot>
      {auth ? (
        <>
          <NavBar
            serviceName={serviceName}
            setServiceName={setServiceName}
            logOut={logOut}
          />
          <Outlet context={setServiceName} />
        </>
      ) : (
        <LogInForm setAuth={setAuth} />
      )}
    </StyledRoot>
  );
}

export default Root;

export function useSetServiceName() {
  return useOutletContext<Dispatch<SetStateAction<ServiceType>>>();
}
