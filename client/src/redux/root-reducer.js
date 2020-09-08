import { combineReducers } from 'redux';

import pageReducer from './page/page.reducer';

const rootReducer = combineReducers({
  page: pageReducer,
});

export default rootReducer;
