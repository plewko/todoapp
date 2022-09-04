import React from "react";
import { StyledButton } from "./Button.styled";
import "./Button.styled.tsx";

export interface TextInputProps {
  text: string;
  buttontype?: "submit" | "reset";
  isPink?: boolean;
  onClick?: () => void;
}

const Button = ({
  text,
  buttontype,
  isPink,
  onClick,
}: TextInputProps): JSX.Element => {
  return (
    <StyledButton type={buttontype} onClick={onClick} isPink={isPink}>
      {text}
    </StyledButton>
  );
};

export default Button;
