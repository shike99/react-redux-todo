import React from 'react';

const Todo = ({ text, isCompleted, onClick }) => (
  <li>
    <div style={{ textDecoration: isCompleted ? 'line-through' : 'none' }}>
      {text}
    </div>
    <button onClick={onClick}>{isCompleted ? '未完了' : '完了'}</button>
  </li>
);

export default Todo;
