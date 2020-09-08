import PageActionTypes from './page.types';

export const setValue = (value) => {
  return {
    type: PageActionTypes.SET_VALUE,
    payload: value,
  };
};

export const setSelectedIndex = (selectedIndex) => {
  return {
    type: PageActionTypes.SET_SELECTED_INDEX,
    payload: selectedIndex,
  };
};
