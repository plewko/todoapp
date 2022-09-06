import styled, { css } from "styled-components";

export const StyledTaskAddForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ButtonWrapper = styled.div(
  ({ theme: { gap, margins } }) => css`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    margin-bottom: ${margins.medium};
    gap: ${gap.xsmall};
  `
);
