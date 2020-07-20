import React from 'react';
import store from '../store';

import Providers from './navigator';

// Themes //
import theme from './themes';
import {ThemeProvider} from 'styled-components/native';

// Redux //
import {Provider} from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Providers />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
