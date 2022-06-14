import React from "react";
import { Task } from "../types";

export interface TaskListProps {
  tasks: Task[];
}

const TaskList = (props: TaskListProps): JSX.Element => {
  return (
    <ul>
      {props.tasks.map((task: Task, index: number): JSX.Element => {
        return (
          <li key={task.id}>
            <input type="checkbox"></input>
            {task.taskText}
          </li>
        );
      })}
    </ul>
  );
};

export default TaskList;
