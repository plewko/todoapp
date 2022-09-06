import React, { ReactElement } from "react";
import { StyledButton } from "./Button.styled";
import "./Button.styled.tsx";

export interface ButtonProps {
  text?: string;
  ico?: JSX.Element; // icony???
  buttontype?: "submit" | "reset";
  isPink?: boolean;
  onClick?: () => void;
  children?: ReactElement;
  variant: "primary" | "secondary";
}

const Button = ({
  text,
  ico,
  buttontype,
  variant,
  onClick,
  children,
}: ButtonProps): JSX.Element => {
  return (
    <StyledButton type={buttontype} onClick={onClick} variant={variant}>
      {children}

      {text && text}
    </StyledButton>
  );
};

export default Button;
