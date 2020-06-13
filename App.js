import React from 'react';
import store from './store';
import AppLayout from './src/AppLayout';
import {ThemeProvider} from 'styled-components/native';
import theme from './src/themes';

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
