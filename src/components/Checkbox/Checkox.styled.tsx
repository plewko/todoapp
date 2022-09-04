import styled, { css } from "styled-components";

export const StyledCheckbox = styled.input(
  ({ theme: { colors } }) => css`
    color: ${colors.black};
  `
);
