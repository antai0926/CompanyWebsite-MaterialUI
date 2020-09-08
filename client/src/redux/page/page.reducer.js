import PageActionTypes from './page.types';

const INITIAL_STATE = {
  value: 0,
  selectedIndex: 1,
};

const pageReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PageActionTypes.SET_VALUE:
      return {
        ...state,
        value: action.payload,
      };
    case PageActionTypes.SET_SELECTED_INDEX:
      return {
        ...state,
        selectedIndex: action.payload,
      };
    default:
      return state;
  }
};

export default pageReducer;
