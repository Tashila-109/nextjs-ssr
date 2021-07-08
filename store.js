import { createWrapper } from 'next-redux-wrapper';
import { createStore } from 'redux';

import data from './pages/Api/data.json';

// Create Store
const store = (initialState = startState) => {
  return createStore(reducer, initialState);
};

export const initStore = createWrapper(store);
