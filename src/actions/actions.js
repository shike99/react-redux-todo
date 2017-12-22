import * as actionTypes from './action_types';

export const addTodo = payload => {
  return {
    type: actionTypes.ADD_TODO,
    payload
  };
};

export const toggleTodo = payload => {
  return {
    type: actionTypes.TOGGLE_TODO,
    payload
  };
};
