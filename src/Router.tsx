import { ThemeProvider } from 'styled-components';
import GlobalStyle from './themes/GlobalStyle.style';
import mainTheme from './themes/theme';

function Router() {
  return (
    <ThemeProvider theme={mainTheme}>
      <GlobalStyle />
      <div className="App">
        {/*
         */}
      </div>
    </ThemeProvider>
  );
}

export default Router;
