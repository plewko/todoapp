import { useState } from "react";
import { Task } from "../types";
import Button from "./Button/Button";
import Checkbox from "./Checkbox/Checkbox";
import Input from "./Input/Input";
import { StyledInput } from "./Input/Input.styled";
import {
  TextButtonWrapper,
  CheckboxWrapper,
  SingleTaskWrapper,
  StyledTaskList,
  TaskText,
  ButtonWrapper,
} from "./TaskList.styled";

export interface TaskListProps {
  tasks: Task[];
  onChecked: (taskId: number) => void;
  onRemoved: (taskId: number) => void;
  onEdit: (taskId: number, editValue: string) => void;
}

const TaskList = ({
  tasks,
  onChecked,
  onRemoved,
  onEdit,
}: TaskListProps): JSX.Element => {
  const [editId, setEditId] = useState<number | null>(null);
  const [editValue, setEditValue] = useState<string>("");

  return (
    <StyledTaskList>
      {tasks.map((task: Task, index: number): JSX.Element => {
        return task.id === editId ? (
          <SingleTaskWrapper key={task.id}>
            <Input
              name="edit"
              onChange={(event) => setEditValue(event.target.value)}
              value={editValue}
              inputType="text"
            />
            <Button
              text="Save"
              onClick={() => {
                onEdit(task.id, editValue);
                setEditId(null);
              }}
            ></Button>
          </SingleTaskWrapper>
        ) : (
          <SingleTaskWrapper key={task.id}>
            <>
              <CheckboxWrapper>
                <Checkbox
                  onChange={() => onChecked(task.id)}
                  checked={task.isDone}
                />
              </CheckboxWrapper>
              <TextButtonWrapper>
                <TaskText isDone={task.isDone}> {task.taskText} </TaskText>
                <ButtonWrapper>
                  <Button
                    text="Remove"
                    onClick={() => onRemoved(task.id)}
                  ></Button>
                  <Button
                    text="Edit"
                    onClick={() => {
                      setEditValue(task.taskText);
                      setEditId(task.id);
                    }}
                  ></Button>
                </ButtonWrapper>
              </TextButtonWrapper>
            </>
          </SingleTaskWrapper>
        );
      })}
    </StyledTaskList>
  );
};

export default TaskList;
