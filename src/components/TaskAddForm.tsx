import React, { useState, ChangeEvent } from "react";
import Button from "./Button/Button";
import Input from "./Input/Input";
import { ButtonWrapper, StyledTaskAddForm } from "./TaskAddForm.styled";

export interface TaskAddFormProps {
  onAdd: (value: string) => void;
}

const TaskAddForm = ({ onAdd }: TaskAddFormProps): JSX.Element => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleFormSubmit = (event: React.FormEvent): void => {
    event.preventDefault();
    inputValue && onAdd(inputValue);
    setInputValue("");
  };
  const InputValueOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const OnClickClear = () => {
    setInputValue("");
  };

  return (
    <StyledTaskAddForm onSubmit={handleFormSubmit}>
      <Input
        name="task"
        inputType="text"
        placeholder="Type the task"
        value={inputValue}
        onChange={InputValueOnChange}
      />
      <ButtonWrapper>
        <Button
          variant="secondary"
          text="Clear"
          buttontype="reset"
          onClick={OnClickClear}
        />
        <Button variant="primary" text="Add" buttontype="submit" isPink />
      </ButtonWrapper>
    </StyledTaskAddForm>
  );
};

export default TaskAddForm;
