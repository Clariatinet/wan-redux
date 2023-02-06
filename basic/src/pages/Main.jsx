import React from 'react';
import Input from '../components/Input';
import TodoList from '../components/TodoList';

const Main = () => {
  return (
    <div>
      <Input />
      <TodoList isActive={true} />
      <TodoList isActive={false} />
    </div>
  );
};

export default Main;
