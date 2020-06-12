import React from 'react';
import store from './store';
import AppLayout from './src/AppLayout';

// Redux //
import {Provider} from 'react-redux';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppLayout />
      </Provider>
    );
  }
}

export default App;
