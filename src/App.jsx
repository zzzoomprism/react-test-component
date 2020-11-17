import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { Box, CssBaseline } from '@material-ui/core';
import './style.css';
import { theme } from './theme';

import AcceptCodeContainer from './containers/AcceptCodeContainer';

const App = () => {
  const _theme = createMuiTheme(theme);

  return (
    <ThemeProvider theme={_theme}>
      <CssBaseline />
      <div className="root">
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          css={{ height: '100vh' }}
        >
          <AcceptCodeContainer />
        </Box>
      </div>
    </ThemeProvider>
  );
};

export default App;
