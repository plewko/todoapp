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
}

export const Checkbox = ({ checked, onChange }: CheckboxProps): JSX.Element => {
  return (
    <StyledCheckboxWrapper>
      <StyledCheckbox onChange={onChange} type="checkbox" checked={checked} />
      <CheckboxIcoWrapper checked={checked}>
        {checked && <MdCheck size={24} />}
      </CheckboxIcoWrapper>
    </StyledCheckboxWrapper>
  );
};
