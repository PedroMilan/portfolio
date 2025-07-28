import styled from "styled-components";

export const Section = styled.section`
  padding: 2rem 1rem;
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
`;

export const Tabs = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

export const TabButton = styled.button<{ active: boolean }>`
  background: ${({ active, theme }) =>
    active ? theme.colors.primary : "transparent"};
  color: ${({ active, theme }) =>
    active ? theme.colors.background : theme.colors.text};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 20px;
  padding: 0.5rem 1.2rem;
  cursor: pointer;
  font-weight: 600;
  transition: background 0.3s ease;

  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 2px;
  }
`;

export const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 1rem;
`;

export const SkillCard = styled.div`
  background: ${({ theme }) => theme.colors.cardBackground};
  border-radius: 8px;
  padding: 1.2rem 1rem;
  text-align: center;
  cursor: default;
  user-select: none;
  position: relative;
  transition: transform 0.2s ease;

  &:hover,
  &:focus {
    transform: translateY(-4px);
    box-shadow: 0 6px 12px rgb(0 0 0 / 0.15);
  }

  &:hover > span,
  &:focus > span {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
`;

export const Tooltip = styled.span`
  position: absolute;
  bottom: 110%;
  left: 50%;
  transform: translateX(-50%) translateY(10px);
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.background};
  padding: 0.3rem 0.6rem;
  border-radius: 4px;
  font-size: 0.75rem;
  white-space: nowrap;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.2s ease, transform 0.2s ease;
  pointer-events: none;
  z-index: 10;
`;

export const SkillIcon = styled.div`
  font-size: 2.2rem;
  margin-bottom: 0.4rem;
  color: ${({ theme }) => theme.colors.primary};
`;

export const SkillName = styled.div`
  font-size: 1rem;
  font-weight: 600;
`;
