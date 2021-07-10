import { createWrapper } from 'next-redux-wrapper';
import { createStore } from 'redux';

import data from './pages/Api/data.json';

// Intial State
const startState = {
  cards: [],
};

// Actions
export const initialCards = () => {
  return {
    type: 'INITIALCARDS',
    cards: data,
  };
};

export const addItem = item => {
  return {
    type: 'ADD_ITEM',
    item,
  };
};

// Reducers
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INITIALCARDS':
      return {
        cards: action.cards,
      };
    case 'ADDITEM':
      return {
        ...state,
        cards: [...state,cards, action.item],
      };
  }
};

// Create Store
const store = (initialState = startState) => {
  return createStore(reducer, initialState);
};

export const initStore = createWrapper(store);
