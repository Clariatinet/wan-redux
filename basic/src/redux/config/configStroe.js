import { combineReducers, createStore } from 'redux';
import todos from '../modules/todos';
// 1. rootReducer => reducer를 합칠 거야
// modules 밑에 있는 파일을 반환하는 값
const rootReducer = combineReducers({
  todos,
  // counter,
  // users,
});

// 2. Store
const store = createStore(rootReducer);

// 3. export
export default store;
