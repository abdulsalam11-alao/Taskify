import React, { useState } from "react";
import InputField from "./components/InputField";
import GlobalStyle from "./styles/GlobalStyles";
import styled from "styled-components";
import { Todo } from "./model";
import TodoList from "./components/TodoList";

const StyleApp = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #2f74c0;
  font-family: cursive;
`;

const StyleSpan = styled.span`
  text-transform: uppercase;
  font-size: 40px;
  margin: 30px 0;
  color: white;
  z-index: 1;
  text-align: center;
}

@media (max-width: 800px) {
  .heading {
    margin: 15px 0;
    font-size: 35px;
  }
`;

const App: React.FC = () => {
  const [Todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (Todo) {
      setTodos([...todos, { id: Date.now(), todo: Todo, isDone: false }]);
      setTodo("");
    }
  };

  return (
    <>
      <GlobalStyle />
      <StyleApp className="app">
        <StyleSpan className="heading">Taskify</StyleSpan>
        <InputField todo={Todo} setTodo={setTodo} handleAdd={handleAdd} />
        <TodoList todos={todos} setTodos={setTodos} />
      </StyleApp>
    </>
  );
};
export default App;
