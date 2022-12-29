import { createBrowserRouter, RouterProvider, useParams } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import ChatRoom from './components/ChatRoom/ChatRoom';
import AddPet from './components/Profile/AddPet';
import EditProfile from './components/Profile/EditProfile';
import ArticleDetail from './components/Community/ArticleDetail';
import PostEditer from './components/Community/PostEditer';
import Chat from './pages/Chat';
import Community from './pages/Community';
import Profile, { EditPet, Pet } from './pages/Profile';
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
      { path: 'chat/:roomKey', element: <ChatRoom /> },
      {
        path: 'community',
        element: <Community />,
        children: [
          { path: 'editer', element: <PostEditer /> },
          { path: ':postId', element: <ArticleDetail /> },
        ],
      },
      { path: 'profile', element: <Profile /> },
      { path: 'sns', element: <SNS /> },
      {
        path: '/profile',
        element: <Profile />,
        children: [
        ],
      },
      { path: 'profile/edit', element: <EditProfile /> },
      { path: 'profile/pet/:petID', element: <Pet /> },
      { path: 'profile/addPet', element: <AddPet /> },
      { path: 'profile/pet/:petID/editpet', element: <EditPet /> },
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
