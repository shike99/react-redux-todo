import { handleActions } from 'redux-actions';
import * as actionTypes from '../actions/action_types';

const initialState = [];

const todos = handleActions(
  {
    [actionTypes.ADD_TODO]: (state, action) => {
      const stateCount = state.length;
      return [
        ...state,
        {
          id: stateCount === 0 ? 1 : state[stateCount - 1].id + 1,
          text: action.payload.text,
          isCompleted: false
        }
      ];
    },
    [actionTypes.TOGGLE_TODO]: (state, action) => {
      return state.map(
        todo =>
          todo.id === action.payload.id
            ? {
                ...todo,
                isCompleted: !todo.isCompleted
              }
            : todo
      );
    }
  },
  initialState
);

export default todos;
