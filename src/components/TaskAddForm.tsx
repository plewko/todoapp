import React, { useState, ChangeEvent } from "react";
import Button from "./Button/Button";
import Input from "./Input/Input";

const TaskAddForm = (): JSX.Element => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleFormSubmit = (event: React.FormEvent): void => {
    event.preventDefault();
    console.log(event);
  };
  const InputValueOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(inputValue);
    setInputValue(event.target.value);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <Input
        inputType="text"
        placeholder="Enter"
        value={inputValue}
        onChange={InputValueOnChange}
      />
      <Button text="Clear" buttontype="reset" />
      <Button text="Add" buttontype="submit" />
    </form>
  );
};

export default TaskAddForm;
