import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyles from './theme/GlobalStyles';
import { ThemeProvider } from 'emotion-theming';
import theme from './theme';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <App />
  </ThemeProvider>,

  document.getElementById('root'),
);
