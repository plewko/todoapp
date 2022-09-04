import styled, { css } from "styled-components";

export const StyledInput = styled.input(
  ({ theme: { margins, colors, bordersRadius, paddings } }) => css`
    margin: ${margins.medium} 0;
    padding: ${paddings.small};
    width: 100%;
    border-radius: ${bordersRadius.xlarge};
    background-color: ${colors.black};
    color: ${colors.powderWhite};
  `
);
