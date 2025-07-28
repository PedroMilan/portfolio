import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 12px;
  margin: 16px 0;
  justify-content: end;
`;

export const Button = styled.button<{ active: boolean }>`
  padding: 8px 20px;
  border-radius: 25px;
  border: 2px solid
    ${({ active, theme }) => (active ? theme.colors.primary : "#ccc")};
  background-color: ${({ active, theme }) =>
    active ? theme.colors.primary : "transparent"};
  color: ${({ active, theme }) => (active ? "#fff" : theme.colors.text)};
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ active, theme }) =>
      active ? theme.colors.primary : "#eee"};
    border-color: ${({ active, theme }) =>
      active ? theme.colors.primary : "#bbb"};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 6px ${({ theme }) => theme.colors.primary};
  }
`;
