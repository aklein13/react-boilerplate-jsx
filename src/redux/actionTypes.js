import config from '../config/index';

export const ROOT_URL = config.apiRootUrl;

export const ACTIONS = {
  API_ACTION: {
    action: 'api_action',
    url: `${ROOT_URL}auth/convert-token/`,
    startRequest: 'api_action/REQUEST_STARTED',
    successRequest: 'api_action/REQUEST_SUCCESS',
    failureRequest: 'api_action/REQUEST_FAILURE',
  },
  SIMPLE_ACTION: 'simple_action',
};
