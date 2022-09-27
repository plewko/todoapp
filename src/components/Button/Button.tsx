import React, { ReactElement } from "react";
import { StyledButton } from "./Button.styled";
import "./Button.styled.tsx";

export interface ButtonProps {
  text?: string;
  buttonType?: "submit" | "reset";
  onClick?: () => void;
  children?: ReactElement;
  variant: "primary" | "secondary";
}

export const Button = ({
  text,
  buttonType,
  variant,
  onClick,
  children,
}: ButtonProps): JSX.Element => {
  return (
    <StyledButton type={buttonType} onClick={onClick} variant={variant}>
      {children}
      {text && text}
    </StyledButton>
  );
};
