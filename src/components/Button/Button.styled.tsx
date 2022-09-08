import styled, { css } from "styled-components";
import { ButtonProps } from "./Button";

export const StyledButton = styled.button<Pick<ButtonProps, "variant">>(
  ({
    variant,
    theme: {
      fonts,
      fontSizes,
      colors,
      margins,
      bordersRadius,
      paddings,
      shadows,
    },
  }) => css`
    font: ${fonts};
    padding: ${paddings.small} ${paddings.medium};
    // margin: 0;
    border: 1px solid ${colors.primaryButtonLightColor};
    border-radius: ${bordersRadius.large};
    color: ${colors.white};
    background-color: ${colors.primaryButtonLightColor};
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
      border: 1px solid ${colors.primaryButtonDarkColor};
      background-color: ${colors.primaryButtonDarkColor};
      box-shadow: rgb(0 0 0 / 20%) 0px 2px 4px -1px,
        rgb(0 0 0 / 14%) 0px 4px 5px 0px, rgb(0 0 0 / 12%) 0px 1px 10px 0px;
    }
  `,
  ({
    variant,
    theme: { fonts, colors, borders, margins, bordersRadius, paddings },
  }) =>
    variant === "secondary" &&
    css`
      background-color: ${colors.white};
      color: ${colors.primaryButtonLightColor};
      border: 1px solid ${colors.primaryButtonLightColor};
      :hover {
        background-color: ${colors.white};
        border: ${borders.small} solid ${colors.primaryButtonDarkColor};
        color: ${colors.primaryButtonDarkColor};
      }
    `
);
