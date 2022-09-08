import styled, { css } from "styled-components";

export const StyledTaskList = styled.ul(
  ({ theme }) => css`
    list-style: none;
    display: flex;
    flex-direction: column;
    align-content: stretch;
    justify-content: center;
    align-items: center;
    row-gap: 1rem;
  `
);

export const TaskText = styled.span<{ isDone: boolean }>(
  ({ isDone }) => css`
    text-decoration: ${isDone ? "line-through" : "none"};
    overflow-wrap: break-word;
  `
);

export const SingleTaskWrapper = styled.li(
  ({ theme: { colors, heights } }) => css`
    max-width: 100%;
    background-color: ${colors.background};
    color: ${colors.secoundaryLightGreen};
    width: 100%;
    display: flex;
    align-items: center;
  `
);

export const CheckboxWrapper = styled.div(
  ({ theme: { paddings } }) => css`
    padding-right: ${paddings.medium};
  `
);

export const TextButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const ButtonWrapper = styled.div(
  ({ theme: { gap } }) => css`
    display: flex;
    align-items: center;
    gap: ${gap.xsmall};
  `
);
export const EditButtonWrapper = styled.div(
  ({ theme: { gap } }) => css`
    display: flex;
    align-items: center;
    gap: ${gap.xsmall};
    width: 100%;
  `
);
