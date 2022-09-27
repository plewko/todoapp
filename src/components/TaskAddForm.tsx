import React, { useState, ChangeEvent } from "react";
import { Button } from "./Button/Button";
import { Input } from "./Input/Input";
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

  const inputValueOnChange = (event: ChangeEvent<HTMLInputElement>) => {
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
        placeholder="Type task"
        value={inputValue}
        onChange={inputValueOnChange}
      />
      <ButtonWrapper>
        <Button
          variant="secondary"
          text="Clear"
          buttonType="reset"
          onClick={OnClickClear}
        />
        <Button variant="primary" text="Add" buttonType="submit" />
      </ButtonWrapper>
    </StyledTaskAddForm>
  );
};

export default TaskAddForm;
