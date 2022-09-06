import { useState } from "react";
import { Task } from "../types";
import Button from "./Button/Button";
import Checkbox from "./Checkbox/Checkbox";
import Input from "./Input/Input";
import {
  TextButtonWrapper,
  CheckboxWrapper,
  SingleTaskWrapper,
  StyledTaskList,
  TaskText,
  ButtonWrapper,
} from "./TaskList.styled";
import { MdModeEditOutline, MdOutlineSave, MdDelete } from "react-icons/md";

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
              variant="primary"
              onClick={() => {
                onEdit(task.id, editValue);
                setEditId(null);
              }}
            >
              <MdOutlineSave />
            </Button>
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
                  <Button variant="primary" onClick={() => onRemoved(task.id)}>
                    <MdDelete size={18} />
                  </Button>
                  <Button
                    variant="primary"
                    onClick={() => {
                      setEditValue(task.taskText);
                      setEditId(task.id);
                    }}
                  >
                    <MdModeEditOutline size={18} />
                  </Button>
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
