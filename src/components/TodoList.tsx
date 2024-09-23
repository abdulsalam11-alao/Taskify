import React from "react";
import { Todo } from "../model";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 90%;
  flex-wrap: wrap;
`;

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList = ({ todos, setTodos }: Props) => {
  return (
    <StyledDiv>
      {todos.map((todo) => (
        <li>{todo.todo}</li>
      ))}
    </StyledDiv>
  );
};

export default TodoList;
