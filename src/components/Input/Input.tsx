import { ChangeEvent, useRef } from "react";
import { StyledInput, StyledInputWrapper, StyledSpan } from "./Input.styled";

export interface InputProps {
  inputType: string;
  value: string;
  placeholder?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  name: string;
}

export const Input = ({
  inputType,
  name,
  onChange,
  placeholder,
  value,
}: InputProps): JSX.Element => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleKeyPress = (event: React.KeyboardEvent<HTMLElement>) => {
    event.code === "Escape" && inputRef.current?.blur();
  };

  return (
    <StyledInputWrapper>
      <StyledInput
        name={name}
        onChange={onChange}
        onKeyPress={handleKeyPress}
        onKeyDown={handleKeyPress}
        type={inputType}
        value={value}
        required
        ref={inputRef}
      />
      <StyledSpan>{placeholder}</StyledSpan>
    </StyledInputWrapper>
  );
};
