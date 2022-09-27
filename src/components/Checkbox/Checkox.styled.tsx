import styled, { css } from "styled-components";

export const StyledCheckbox = styled.input(
  ({ theme: { colors } }) => css`
    color: ${colors.secondaryLightGreen};
    display: none;
  `
);
export const StyledCheckboxWrapper = styled.label(
  () => css`
    display: flex;
    align-items: center;
    justify-content: center;
  `
);
export const CheckboxIcoWrapper = styled.div<{ checked: boolean }>(
  ({ theme: { colors, bordersRadius }, checked }) => css`
    color: ${colors.secondaryLightGreen};
    border: 2px solid ${colors.secondaryLightGreen};
    border-radius: ${bordersRadius.large};
    width: 26px;
    height: 26px;
    display: flex;
    align-items: center;
    justify-content: center;
    :hover {
      background-color: ${checked && `${colors.secondaryLightGreen}`};
      color: white;
      transition: all 0.25s ease-out;
      cursor: pointer;
    }
  `
);
