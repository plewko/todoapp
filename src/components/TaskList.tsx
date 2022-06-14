import React from "react";
import { Task } from "../types";
import Button from "./Button/Button";
import "./TaskList.css";

export interface TaskListProps {
  tasks: Task[];
  onChecked: (taskId: number) => void;
  onRemoved: (taskId: number) => void;
}

const TaskList = (props: TaskListProps): JSX.Element => {
  return (
    <ul>
      {props.tasks.map((task: Task, index: number): JSX.Element => {
        return (
          <li key={task.id} className={task.isDone ? "isDone" : ""}>
            <input
              type="checkbox"
              onChange={() => props.onChecked(task.id)}
              checked={task.isDone}
            ></input>
            {task.taskText}
            <Button
              text="Remove"
              onClick={() => props.onRemoved(task.id)}
            ></Button>
            <Button text="Edit"></Button>
          </li>
        );
      })}
    </ul>
  );
};

export default TaskList;
