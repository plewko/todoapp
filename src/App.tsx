import React, { useState } from "react";
import TaskAddForm from "./components/TaskAddForm";
import TaskList from "./components/TaskList";
import { Task } from "./types";

function App(): JSX.Element {
  const dummyTasks = [
    { id: 1, isDone: true, taskText: "pierwszy dummy task" },
    { id: 2, isDone: false, taskText: "zrobic apke to do" },
    { id: 3, isDone: true, taskText: "umie w typescripty" },
  ];

  const [tasks, setTasks] = useState<Task[]>(dummyTasks);

  const handleOnAdd = (inputValue: string): void => {
    const newTask = { id: Math.random(), isDone: false, taskText: inputValue };
    setTasks((prevState) => [...prevState, newTask]);
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

  return (
    <div>
      <header>
        <h1>To Doo App</h1>
      </header>
      <TaskList
        tasks={tasks}
        onChecked={handleOnChecked}
        onRemoved={handleOnRemove}
      />
      <TaskAddForm onAdd={handleOnAdd} />
    </div>
  );
}
export default App;
