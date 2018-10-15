import {ACTIONS} from '../../actionTypes';

const initialState = {
  isFetching: false,
};

export const auth = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.API_ACTION:
      return {
        ...state,
      };
    default:
      return state;
  }
};
