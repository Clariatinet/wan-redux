import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { addTodo } from '../redux/modules/todos';
import { v4 as uuidv4 } from 'uuid';

const Input = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [contents, setContents] = useState('');
  const handleSubmitButtonClick = (event) => {
    event.preventDefault();
    const newTodo = {
      id: uuidv4(),
      title,
      contents,
      isDone: false,
    };
    dispatch(addTodo(newTodo));
  };

  const handleTitleInputChange = (event) => {
    setTitle(event.target.value);
  };
  const handleContentsInputChange = (event) => {
    setContents(event.target.value);
  };
  return (
    <StyledInputDiv>
      <form>
        <input type='text' value={title} onChange={handleTitleInputChange} />
        <input
          type='text'
          value={contents}
          onChange={handleContentsInputChange}
        />
        <button type='submit' onClick={handleSubmitButtonClick}>
          추가
        </button>
      </form>
    </StyledInputDiv>
  );
};

export default Input;

const StyledInputDiv = styled.div`
  background-color: pink;
  padding: 20px;
`;
