import { createStore } from 'redux';
import themeReducer from './themeReducer';

const store = createStore(themeReducer,
  window.REDUX_DEVTOOLS_EXTENSION && window.REDUX_DEVTOOLS_EXTENSION());
export default store;
