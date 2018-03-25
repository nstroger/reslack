import ActionTypes from './types';

export const setToken = (token) =>
  ({ type: ActionTypes.SET_TOKEN, token });

export const setUserInfo = (info) =>
  ({ type: ActionTypes.SET_USER, info });

export const apiAttempt = () =>
  ({ type: ActionTypes.API_ATTEMPT });

export const apiSuccess = () =>
  ({ type: ActionTypes.API_SUCCESS });

export const apiFailed = () =>
  ({ type: ActionTypes.API_FAILED });

export const registerUserAttempt = (data) => 
  ({ type: ActionTypes.REGISTER_USER_ATTEMPT, data });

export const loginUserAttempt = (data) =>
  ({ type: ActionTypes.LOGIN_USER_ATTEMPT, data });
