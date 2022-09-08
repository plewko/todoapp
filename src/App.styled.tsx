import styled, { css } from "styled-components";

export const StyledAppWrapper = styled.div(
  ({ theme: { colors, paddings } }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${colors.background};
    height: 100vh;
    width: 100%;
    max-width: 640px;
    margin: 0 auto;
    padding: ${paddings.medium};
  `
);

export const StyledHeader = styled.header(
  () => css`
    text-align: center;
    width: 100%;
  `
);

export const StyledTittle = styled.h1(
  ({ theme: { colors, paddings, fontSizes } }) => css`
    color: ${colors.secoundaryLightGreen};
    padding-bottom: ${paddings.medium};
    font-size: ${fontSizes.medium};
    display: flex;
    justify-content: center;
    align-items: center;

    /* :hover,
    :focus {
      text-decoration: line-through;
    } */
  `
);

export const StyledMain = styled.main`
  width: 100%;
`;
