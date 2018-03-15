import { createStore, combineReducers } from 'redux';
import { greeting, name } from './components/reducers';

const reducer = combineReducers({
  greeting,
  name
});

const store = createStore(
  reducer,
);

export default store;