import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Chat from './pages/Chat';
import Community from './pages/Community';
import Profile from './pages/Profile';
import Root from './pages/Root/Root';
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
