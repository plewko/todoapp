import React, { useState } from "react";
import { Task } from "../types";
import Button from "./Button/Button";
import Input from "./Input/Input";
import "./TaskList.css";

export interface TaskListProps {
  tasks: Task[];
  onChecked: (taskId: number) => void;
  onRemoved: (taskId: number) => void;
  onEdit: (taskId: number, editValue: string) => void;
}

const TaskList = (props: TaskListProps): JSX.Element => {
  const [editId, setEditId] = useState<number | null>(null);
  const [editValue, setEditValue] = useState<string>("");

  return (
    <ul>
      {props.tasks.map((task: Task, index: number): JSX.Element => {
        return task.id === editId ? (
          <div key={task.id}>
            <Input
              name="edit"
              onChange={(event) => setEditValue(event.target.value)}
              value={editValue}
              inputType="text"
            />
            <Button
              text="Save"
              onClick={() => {
                props.onEdit(task.id, editValue);
                setEditId(null);
              }}
            ></Button>
          </div>
        ) : (
          <li key={task.id}>
            <>
              {" "}
              <input
                type="checkbox"
                onChange={() => props.onChecked(task.id)}
                checked={task.isDone}
              ></input>
              <span className={task.isDone ? "isDone" : ""}>
                {" "}
                {task.taskText}{" "}
              </span>
              <Button
                text="Remove"
                onClick={() => props.onRemoved(task.id)}
              ></Button>
              <Button
                text="Edit"
                onClick={() => {
                  setEditValue(task.taskText);
                  setEditId(task.id);
                }}
              ></Button>
            </>
          </li>
        );
      })}
    </ul>
  );
};

export default TaskList;
