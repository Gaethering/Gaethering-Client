import axios from 'axios';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import {
  Outlet,
  useOutletContext,
  useNavigate,
  useLocation,
} from 'react-router-dom';
import { postLogOut, postReToken } from '../api/authAPI';
import { getAccessToken, setAxiosDefaultsConfig } from '../api/axiosUtils';
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

  const logOut = () => {
    const accessToken = getAccessToken();
    const refreshToken = localStorage.getItem(QueryKeys.refreshToken);

    localStorage.removeItem(QueryKeys.refreshToken);
    setInit(false);
    setAuth(false);

    if (!accessToken || !refreshToken) {
      alert('잘못된 로그아웃 요청입니다');
      return;
    }

    postLogOut({
      accessToken: accessToken,
      refreshToken: refreshToken,
    });
  };

  const navigate = useNavigate();
  const location = useLocation().pathname;

  useEffect(() => {
    setAxiosDefaultsConfig();
    postReToken()
      .then((res) => setAuth(res))
      .then(() => setInit(true));
  }, [init]);

  useEffect(() => {
    if (auth && init && location === '/') {
      navigate('/chat');
    } else if (!auth && init) {
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
