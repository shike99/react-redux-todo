import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/actions';

const AddTodoForm = ({ dispatch }) => {
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(this.text.value));
    this.text.value = '';
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" ref={input => (this.text = input)} />
      <input type="submit" value="Add Todo" />
    </form>
  );
};

const AddTodo = connect()(AddTodoForm);

export default AddTodo;
