import styled, { css } from "styled-components";

export const StyledCheckbox = styled.input(
  ({ theme: { colors } }) => css`
    color: ${colors.secoundaryLightGreen};
    display: none;
  `
);
export const StyledCheckboxWrapper = styled.label(
  ({ theme: { colors } }) => css`
    color: ${colors.black};
    display: flex;
    align-items: center;
    justify-content: center;
    /* box-shadow: rgb(0 0 0 / 20%) 0px 3px 1px -2px,
      rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px; */
  `
);
export const CheckboxIcoWrapper = styled.div<{ checked: boolean }>(
  ({ theme: { colors, bordersRadius }, checked }) => css`
    color: ${colors.secoundaryLightGreen};
    border: 2px solid ${colors.secoundaryLightGreen};
    border-radius: ${bordersRadius.large};
    width: 26px;
    height: 26px;
    display: flex;
    align-items: center;
    justify-content: center;
    :hover {
      background-color: ${checked && `${colors.secoundaryLightGreen}`};
      color: white;
      transition: all 0.25s ease-out;
      cursor: pointer;
    }
  `
);
