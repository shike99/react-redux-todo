import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Todo from '../components/Todo';
import * as actions from '../actions/actions';

const mapStateToProps = state => {
  return { todos: state.todos };
};

const mapDispatchToProps = dispatch => {
  return { actions: bindActionCreators(actions, dispatch) };
};

let TodoList = ({ todos, actions }) => (
  <ul>
    {todos.map(todo => (
      <Todo
        key={todo.id}
        {...todo}
        onClick={() => actions.toggleTodo({ id: todo.id })}
      />
    ))}
  </ul>
);

TodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default TodoList;
