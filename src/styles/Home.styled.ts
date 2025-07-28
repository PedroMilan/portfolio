import styled from "styled-components";

export const Container = styled.main`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const Header = styled.header`
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
`;

export const Subtitle = styled.p`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.secondary};
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const SectionTitle = styled.h2`
  font-size: 1.8rem;
  color: ${({ theme }) => theme.colors.text};
`;

export const Project = styled.article`
  background: ${({ theme }) => theme.colors.cardBackground};
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  a {
    color: ${({ theme }) => theme.colors.text};
    font-weight: bold;
  }
`;

export const Footer = styled.footer`
  text-align: center;
  padding: 1rem 0;
`;

export const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;

  a {
    font-size: 1.5rem;
    transition: color 0.3s ease;

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

export const Tabs = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1rem;
`;

export const TabButton = styled.button<{ active: boolean }>`
  background: ${({ active, theme }) =>
    active ? theme.colors.primary : "transparent"};
  color: ${({ active, theme }) =>
    active ? theme.colors.background : theme.colors.text};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 20px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: background 0.3s;
`;

export const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 1rem;
`;

export const SkillCard = styled.div`
  background: ${({ theme }) => theme.colors.cardBackground};
  border-radius: 8px;
  padding: 1rem;
  text-align: center;
  position: relative;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-3px);
  }
`;

export const SkillIcon = styled.div`
  font-size: 2rem;
  margin-bottom: 0.5rem;
`;

export const SkillName = styled.div`
  font-size: 0.9rem;
`;

export const ToggleButton = styled.button`
  margin-top: 1rem;
  padding: 0.6rem 1.2rem;
  border-radius: 25px;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.background};
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease, box-shadow 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 8px ${({ theme }) => theme.colors.primary}88;
  }

  &:focus {
    outline: 3px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 3px;
  }
`;
