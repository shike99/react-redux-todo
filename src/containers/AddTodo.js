import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

const mapDispatchToProps = dispatch => {
  return { actions: bindActionCreators(actions, dispatch) };
};

let AddTodo = ({ actions }) => {
  const onSubmit = e => {
    e.preventDefault();
    actions.addTodo({ text: this.text.value });
    this.text.value = '';
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" ref={input => (this.text = input)} />
      <input type="submit" value="Add Todo" />
    </form>
  );
};

AddTodo = connect(null, mapDispatchToProps)(AddTodo);

export default AddTodo;
