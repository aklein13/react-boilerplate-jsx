import config from '../config/index';

export const ROOT_URL = config.apiRootUrl;

export const API_ACTIONS = {
  API_ACTION: {
    action: 'api_action',
    url: `${ROOT_URL}auth/convert-token/`,
    startRequest: 'api_action/REQUEST_STARTED',
    successRequest: 'api_action/REQUEST_SUCCESS',
    failureRequest: 'api_action/REQUEST_FAILURE',
  },
};

export const ACTIONS = {
  SIMPLE_ACTION: 'simple_action',
};
