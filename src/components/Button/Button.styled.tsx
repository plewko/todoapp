import styled, { css } from "styled-components";

export const StyledButton = styled.button<{ isPink?: boolean }>(
  ({
    isPink,
    theme: { fonts, colors, margins, bordersRadius, paddings },
  }) => css`
    font: ${fonts};
    padding: ${paddings.small} ${paddings.medium};
    margin: ${margins.xsmall};
    border: none;
    border-radius: ${bordersRadius.large};
    color: ${colors.onyx};
    background: ${isPink ? "magenta" : "blue"};
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.4);
    cursor: pointer;
    :hover {
      color: ${colors.powderWhite};
    }
  `
);
