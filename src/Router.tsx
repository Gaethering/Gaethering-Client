import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Chat from './pages/Chat';
import Community from './pages/Community';
import Profile from './pages/Profile';
import Root from './pages/Root';
import SignUp from './pages/SignUp';
import { SignStart, SignProfile, SignPet, SignEnd } from './pages/SignUpPages';
import SNS from './pages/SNS';
import GlobalStyle from './themes/GlobalStyle.style';
import mainTheme from './themes/theme';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { path: 'chat', element: <Chat /> },
      { path: 'community', element: <Community /> },
      { path: 'profile', element: <Profile /> },
      { path: 'sns', element: <SNS /> },
    ],
  },
  {
    path: '/signUp',
    element: <SignUp />,
    children: [
      { path: '1', element: <SignStart /> },
      { path: '2', element: <SignProfile /> },
      { path: '3', element: <SignPet /> },
      { path: '4', element: <SignEnd /> },
    ],
  },
]);

function Router() {
  return (
    <ThemeProvider theme={mainTheme}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default Router;
