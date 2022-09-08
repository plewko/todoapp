import { ChangeEvent } from "react";
import {
  CheckboxIcoWrapper,
  StyledCheckbox,
  StyledCheckboxWrapper,
} from "./Checkox.styled";
import { MdCheck } from "react-icons/md";

export interface CheckboxProps {
  checked: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  name?: string;
}

export const Checkbox = (props: CheckboxProps): JSX.Element => {
  return (
    <StyledCheckboxWrapper>
      <StyledCheckbox
        name={props.name}
        onChange={props.onChange}
        type="checkbox"
        checked={props.checked}
      />
      <CheckboxIcoWrapper checked={props.checked}>
        {props.checked && <MdCheck size={24} />}
      </CheckboxIcoWrapper>
    </StyledCheckboxWrapper>
  );
};
