import React, { useState } from "react";
import TaskAddForm from "./components/TaskAddForm";
import TaskList from "./components/TaskList";
import { Task } from "./types";

function App(): JSX.Element {
  const dummyTasks = [
    { id: 1, isDone: false, taskText: "pierwszy dummy task" },
    { id: 2, isDone: true, taskText: "zrobic apke to do" },
    { id: 3, isDone: false, taskText: "umie w typescripty" },
  ];

  const [tasks, setTasks] = useState<Task[]>(dummyTasks);

  const handleOnAdd = (inputValue: string): void => {
    const newTask = { id: Math.random(), isDone: false, taskText: inputValue };
    setTasks((prevState) => [...prevState, newTask]);
  };

  return (
    <div>
      <header>
        <h1>To Doo App</h1>
      </header>
      <TaskList tasks={tasks} />
      <TaskAddForm onAdd={handleOnAdd} />
    </div>
  );
}
export default App;
