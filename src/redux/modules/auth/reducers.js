import {ACTIONS, API_ACTIONS} from '../../actionTypes';

const initialState = {
  isFetching: true,
};

export const auth = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.SIMPLE_ACTION:
      return {
        ...state,
        isFetching: false,
      };
    case API_ACTIONS.API_ACTION.successRequest:
      return {
        ...state,
      };
    default:
      return state;
  }
};
