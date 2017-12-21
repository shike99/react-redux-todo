import * as actionTypes from '../actions/action_types';
import { handleActions } from 'redux-actions';

const initialState = [];

const todos = handleActions(
  {
    [actionTypes.ADD_TODO]: (state, action) => {
      const stateCount = state.length;
      return [
        ...state,
        {
          id: stateCount === 0 ? 1 : state[stateCount - 1].id + 1,
          text: action.payload
        }
      ];
    }
  },
  initialState
);

export default todos;
