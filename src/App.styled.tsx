import { hover } from "@testing-library/user-event/dist/hover";
import styled, { css } from "styled-components";

export const StyledHeader = styled.header`
  text-align: center;
`;

export const StyledTittle = styled.h1(
  ({ theme: { colors, margins } }) => css`
    color: ${colors.onyx};
    margin-top: ${margins.medium};
    :hover,
    :focus {
      text-decoration: line-through;
    }
  `
);

export const StyledMain = styled.main``;

export const StyledAppWrapper = styled.div(
  ({ theme: { colors } }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${colors.background};
    height: 100vh;
  `
);
