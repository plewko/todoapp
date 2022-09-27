import styled, { css } from "styled-components";
import { ButtonProps } from "./Button";

export const StyledButton = styled.button<Pick<ButtonProps, "variant">>(
  ({ theme: { fonts, fontSizes, colors, bordersRadius, paddings } }) => css`
    font: ${fonts};
    padding: ${paddings.small} ${paddings.medium};
    border: 1px solid ${colors.primaryLightColor};
    border-radius: ${bordersRadius.large};
    color: ${colors.background};
    background-color: ${colors.primaryLightColor};
    box-shadow: rgb(0 0 0 / 20%) 0px 3px 1px -2px,
      rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px;
    cursor: pointer;
    font-size: ${fontSizes.small};
    text-transform: uppercase;
    font-weight: 500;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    :hover {
      border: 1px solid ${colors.primaryDarkColor};
      background-color: ${colors.primaryDarkColor};
      box-shadow: rgb(0 0 0 / 20%) 0px 2px 4px -1px,
        rgb(0 0 0 / 14%) 0px 4px 5px 0px, rgb(0 0 0 / 12%) 0px 1px 10px 0px;
    }
  `,
  ({ variant, theme: { colors, borders } }) =>
    variant === "secondary" &&
    css`
      background-color: ${colors.background};
      color: ${colors.primaryLightColor};
      border: 1px solid ${colors.primaryLightColor};
      :hover {
        background-color: ${colors.background};
        border: ${borders.small} solid ${colors.primaryDarkColor};
        color: ${colors.primaryDarkColor};
      }
    `
);
