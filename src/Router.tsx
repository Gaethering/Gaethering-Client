import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Chat from './pages/Chat';
import Community from './pages/Community';
import Profile from './pages/Profile';
import Root from './pages/Root';
import SignUp, { End, Pet, SignProfile, Start } from './pages/SignUp';
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
    ],
  },
  {
    path: '/signUp',
    element: <SignUp />,
    children: [
      { path: '1', element: <Start /> },
      { path: '2', element: <SignProfile /> },
      { path: '3', element: <Pet /> },
      { path: '4', element: <End /> },
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
