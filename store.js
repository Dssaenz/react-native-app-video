import {createStore, applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from './src/redux/reducers';
// import {AsyncStorage} from 'react-native';
// import {persistStore, persistReducer} from 'redux-persist';

const store = createStore(
  reducers, // Reducers
  {}, // Estado inicial
  applyMiddleware(reduxThunk),
);

export default store;

// REDUX-PERSIST

// const persistConfig = {
//   key: 'root',
//   storage: AsyncStorage,
// };

// const persistedReducer = persistReducer(persistConfig, reducers);

// const store = createStore(persistedReducer, applyMiddleware(reduxThunk));
// const persistor = persistStore(store);

// export {store, persistor};
