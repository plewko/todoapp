import React, { useState } from "react";
import {
  StyledAppWrapper,
  StyledHeader,
  StyledMain,
  StyledTittle,
} from "./App.styled";
import TaskAddForm from "./components/TaskAddForm";
import TaskList from "./components/TaskList";
import { Task } from "./types";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/Global";
import { theme } from "./styles/Theme";
import { MdFactCheck } from "react-icons/md";

function App(): JSX.Element {
  const dummyTasks = [
    { id: 1, isDone: true, taskText: "pierwszy dummy task" },
    { id: 2, isDone: false, taskText: "zrobic apke to do" },
    { id: 3, isDone: true, taskText: "umie w typescripty" },
  ];

  const [tasks, setTasks] = useState<Task[]>(dummyTasks);

  const handleOnAdd = (inputValue: string): void => {
    const newTask = { id: Math.random(), isDone: false, taskText: inputValue };
    setTasks((prevState) => [newTask, ...prevState]);
  };

  const handleOnChecked = (taskId: number) => {
    setTasks((prevState: Task[]) =>
      prevState.map((task: Task) => {
        return task.id === taskId
          ? { ...task, isDone: !task.isDone }
          : { ...task };
      })
    );
  };

  const handleOnRemove = (taskId: number) => {
    setTasks((prevState) =>
      prevState.filter((task: Task) => {
        return task.id !== taskId;
      })
    );
  };

  const handleOnEdit = (taskId: number, editValue: string) => {
    console.log(taskId, editValue);
    setTasks((prevState: Task[]) =>
      prevState.map((task: Task) => {
        return task.id === taskId
          ? { ...task, taskText: editValue }
          : { ...task };
      })
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <StyledAppWrapper>
        <StyledHeader>
          <StyledTittle>
            to do app&nbsp;
            <MdFactCheck />
          </StyledTittle>
        </StyledHeader>
        <StyledMain>
          <TaskAddForm onAdd={handleOnAdd} />
          <TaskList
            tasks={tasks}
            onChecked={handleOnChecked}
            onRemoved={handleOnRemove}
            onEdit={handleOnEdit}
          />
        </StyledMain>
        <footer></footer>
      </StyledAppWrapper>
    </ThemeProvider>
  );
}
export default App;
