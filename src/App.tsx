import React, { useState } from "react";
import TaskAddForm from "./components/TaskAddForm";
import TaskList from "./components/TaskList";
import { Task } from "./types";

function App(): JSX.Element {
  const dummyTasks = [
    { id: 1, isDone: false, taskText: "chuje muje dzikie weze" },
    { id: 2, isDone: true, taskText: "zrobic apke to do" },
    { id: 3, isDone: false, taskText: "umiem typescripty" },
  ];

  const [tasks, setTasks] = useState<Task[]>(dummyTasks);

  const handleOnAdd = () => {
    setTasks(prevState => [...prevState,])
  }

  return (
    <div>
      <header>
        <h1>To Doo App</h1>
      </header>
      <TaskList tasks={tasks} />
      <TaskAddForm />
    </div>
  );
}
export default App;
