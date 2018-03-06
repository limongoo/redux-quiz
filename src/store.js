import { createStore, combineReducers } from 'redux';
import { text } from './components/reducers';

const reducer = combineReducers({
  text
});

const store = createStore(
  reducer,
);

export default store;