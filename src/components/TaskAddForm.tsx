import React, { useState, ChangeEvent } from "react";
import Button from "./Button/Button";
import Input from "./Input/Input";

export interface TaskAddFormProps {
  onAdd: (value: string) => void;
}

const TaskAddForm = (props: TaskAddFormProps): JSX.Element => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleFormSubmit = (event: React.FormEvent): void => {
    event.preventDefault();
    inputValue && props.onAdd(inputValue);
    setInputValue("");
  };
  const InputValueOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const OnClickClear = () => {
    setInputValue("");
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <Input
        name="task"
        inputType="text"
        placeholder="Enter"
        value={inputValue}
        onChange={InputValueOnChange}
      />
      <Button text="Clear" buttontype="reset" onClick={OnClickClear} />
      <Button text="Add" buttontype="submit" />
    </form>
  );
};

export default TaskAddForm;
