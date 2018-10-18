import {ACTIONS, API_ACTIONS} from '../../actionTypes';

const initialState = {
  isFetching: false,
  sampleValue: null,
};

export const home = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.SIMPLE_ACTION:
      return {
        ...state,
        sampleValue: action.payload,
      };
    case API_ACTIONS.API_ACTION.startRequest:
      return {
        ...state,
        isFetching: true,
      };
    case API_ACTIONS.API_ACTION.successRequest:
      return {
        ...state,
        sampleValue: action.res.title,
        isFetching: false,
      };
    case API_ACTIONS.API_ACTION.failureRequest:
      return {
        ...state,
        isFetching: false,
      };
    default:
      return state;
  }
};
