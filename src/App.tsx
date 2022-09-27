import { useState } from "react";
import {
  StyledAppWrapper,
  StyledHeader,
  StyledMain,
  StyledTitle,
} from "./App.styled";
import TaskAddForm from "./components/TaskAddForm";
import TaskList from "./components/TaskList";
import { Task } from "./types";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/Global";
import { theme } from "./styles/Theme";
import { MdFactCheck } from "react-icons/md";

function App(): JSX.Element {
  const tasksData = [
    { id: 1, isDone: true, taskText: "do touch typing for 15 minutes" },
    { id: 2, isDone: false, taskText: "presentation for John" },
    { id: 3, isDone: true, taskText: "go to the gym" },
    { id: 4, isDone: false, taskText: "buy new headphones" },
  ];

  const [tasks, setTasks] = useState<Task[]>(tasksData);

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
          <StyledTitle>
            to do app&nbsp;
            <MdFactCheck />
          </StyledTitle>
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
      </StyledAppWrapper>
    </ThemeProvider>
  );
}
export default App;
