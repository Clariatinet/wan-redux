import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { removeTodo, switchTodo } from '../redux/modules/todos';

const TodoList = ({ isActive }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // store 안에 있는 todos를 가져옴
  const todos = useSelector((state) => {
    return state.todos;
  });
  const handleDeleteButtonClick = (id) => {
    dispatch(removeTodo(id));
  };
  const handleSwitchButtonClick = (id) => {
    dispatch(switchTodo(id));
  };
  return (
    <StyledTodoListDiv>
      <h4>{isActive ? '해야할 일' : '완료한 일'}</h4>
      {todos
        .filter((item) => item.isDone === !isActive)
        .map((item) => {
          return (
            <StyledTodoBox key={item.id}>
              <h4>{item.title}</h4>
              <p>{item.contents}</p>
              <button
                onClick={() => {
                  handleSwitchButtonClick(item.id);
                }}
              >
                {isActive ? '완료' : '취소'}
              </button>
              <button
                onClick={() => {
                  handleDeleteButtonClick(item.id);
                }}
              >
                삭제
              </button>
              <br />
              <br />
              <button
                onClick={() => {
                  navigate(`/${item.id}`);
                }}
              >
                상세 보기
              </button>
            </StyledTodoBox>
          );
        })}
    </StyledTodoListDiv>
  );
};

export default TodoList;

const StyledTodoListDiv = styled.div`
  background-color: yellow;
  padding: 20px;
`;

const StyledTodoBox = styled.div`
  background-color: blue;
  color: white;
  padding: 20px;
`;
