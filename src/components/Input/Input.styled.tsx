import styled, { css } from "styled-components";

export const StyledInputWrapper = styled.div<{ isPadding?: boolean }>(
  ({ theme: { paddings }, isPadding }) =>
    css`
      position: relative;
      width: 100%;
    `
);

export const StyledInput = styled.input(
  ({ theme: { margins, colors, bordersRadius, paddings } }) => css`
    /* all: unset; */
    /* margin: ${margins.medium} 0; */
    padding: ${paddings.customsmall};
    width: 100%;
    border: 1px solid ${colors.primaryButtonLightColor};
    border-radius: ${bordersRadius.large};
    background-color: ${colors.background};
    color: ${colors.secoundaryLightGreen};
    box-shadow: rgb(0 0 0 / 20%) 0px 3px 1px -2px,
      rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      /* box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, */ border-color
        250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      transform 500ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

    caret-color: ${colors.secoundaryLightGreen};
    :hover {
      border: 1px solid ${colors.primaryButtonDarkColor};
      /* box-shadow: rgb(0 0 0 / 20%) 0px 2px 4px -1px,
        rgb(0 0 0 / 14%) 0px 4px 5px 0px, rgb(0 0 0 / 12%) 0px 1px 10px 0px; */
    }

    :focus {
      border: 1px solid ${colors.primaryButtonDarkColor};
      color: ${colors.secoundaryLightGreen};
      outline: none;
    }
    :hover ~ span {
      color: ${colors.secoundaryLightGreen};
    }
    :valid ~ span,
    :focus ~ span {
      transform: translate(0.825rem) translateY(-1.125rem);
      background-color: ${colors.white};
      padding: 0 ${paddings.customsmall};
      color: ${colors.primaryButtonDarkColor};
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
    color: ${colors.primaryButtonLightColor};
    text-transform: uppercase;
    font-size: ${fontSizes.small};
    background-color: transparent;
    pointer-events: none;
  `
);
