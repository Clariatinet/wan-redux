import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';

const Detail = () => {
  const paramId = useParams().id;
  const navigate = useNavigate();
  const todos = useSelector((state) => state.todos);
  const filterTodo = todos.filter((item) => {
    return item.id === paramId[0];
  });
  console.log(filterTodo);
  return (
    <StyledDetailDiv>
      <h3>입력받은 ID와 일치하는 상세보기를 출력</h3>
      제목: {filterTodo}
      <br />
      내용: ""
      <br />
      완료여부: ""
      <br />
      <button
        onClick={() => {
          navigate('/');
        }}
      >
        이전 페이지로
      </button>
    </StyledDetailDiv>
  );
};

export default Detail;

const StyledDetailDiv = styled.div`
  background-color: pink;
  padding: 20px;
`;
