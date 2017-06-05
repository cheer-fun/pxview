import { ERROR } from '../constants/actionTypes';

export function addError(error) {
  console.log('add error ', error);
  return {
    type: ERROR.ADD,
    error: true,
    payload: typeof error === 'string' ? error : 'Something bad happened',
  };
}

export function clearError() {
  return {
    type: ERROR.CLEAR,
    error: false,
  };
}
