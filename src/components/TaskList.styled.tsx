import styled, { css } from "styled-components";

export const StyledTaskList = styled.ul(
  ({ theme }) => css`
    list-style: none;
    display: flex;
    flex-direction: column;
    align-content: stretch;
    justify-content: center;
    align-items: center;
  `
);

export const TaskText = styled.span<{ isDone: boolean }>(
  ({ isDone }) => css`
    text-decoration: ${isDone ? "line-through" : "none"};
  `
);

export const SingleTaskWrapper = styled.li(
  ({ theme: { colors, heights } }) => css`
    max-width: 100%;
    height: ${heights.large};
    background-color: ${colors.background};
    width: 100%;
    display: flex;
    align-items: center;
  `
);

export const CheckboxWrapper = styled.div(
  ({ theme: { margins } }) => css`
    margin: ${margins.medium};
  `
);

export const TextButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const ButtonWrapper = styled.div(
  ({ theme: { margins } }) => css`
    margin: ${margins.medium};
  `
);
