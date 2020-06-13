import React from 'react';
import store from './store';
import AppLayout from './src/AppLayout';

// Themes //
import theme from './src/themes';
import {ThemeProvider} from 'styled-components/native';

// Redux //
import {Provider} from 'react-redux';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <AppLayout />
        </ThemeProvider>
      </Provider>
    );
  }
}

export default App;
