import styled, { css } from "styled-components";

export const StyledInputWrapper = styled.div(
  () =>
    css`
      position: relative;
      width: 100%;
    `
);

export const StyledInput = styled.input(
  ({ theme: { margins, colors, bordersRadius, paddings } }) => css`
    padding: ${paddings.customsmall};
    width: 100%;
    border: 1px solid ${colors.primaryLightColor};
    border-radius: ${bordersRadius.large};
    background-color: ${colors.background};
    color: ${colors.secondaryLightGreen};
    box-shadow: rgb(0 0 0 / 20%) 0px 3px 1px -2px,
      rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      transform 500ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

    caret-color: ${colors.secondaryLightGreen};
    :hover {
      border: 1px solid ${colors.primaryDarkColor};
    }

    :focus {
      border: 1px solid ${colors.primaryDarkColor};
      color: ${colors.secondaryLightGreen};
      outline: none;
    }
    :hover ~ span {
      color: ${colors.secondaryLightGreen};
    }
    :valid ~ span,
    :focus ~ span {
      transform: translate(0.825rem) translateY(-1.125rem);
      background-color: ${colors.background};
      padding: 0 ${paddings.customsmall};
      color: ${colors.primaryDarkColor};
    }
  `
);

export const StyledSpan = styled.span(
  ({ theme: { colors, paddings, fontSizes } }) => css`
    transition: background-color 600ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      transform 500ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    position: absolute;
    top: 0.625rem;
    left: ${paddings.small};
    padding-left: ${paddings.customsmall};
    letter-spacing: 0.2rem;
    color: ${colors.primaryLightColor};
    text-transform: uppercase;
    font-size: ${fontSizes.small};
    background-color: transparent;
    pointer-events: none;
  `
);
