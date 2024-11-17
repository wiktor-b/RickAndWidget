import styled from "@emotion/styled";
import { theme } from "../../utils/theme";
import { Character } from "../../types/RickAndMorty.types";

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export const CharacterWidgetContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  min-width: 320px;
  border-radius: 8px;
  border: 1px solid ${theme.colors.border};
  color: ${theme.colors.text};
  background-color: ${theme.colors.widgetBackground};
`;

export const StatusBanner = styled.div<{ status: Character["status"] }>`
  background-color: ${({ status }) => theme.colors.status[status]};
  padding: 8px 10px;
  font-size: ${theme.typography.characterName.fontSize};
  font-weight: ${theme.typography.characterName.fontWeight};
`;

export const ContentContainer = styled.div`
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const InfoContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;
  flex: 1;
`;

export const InfoLabel = styled.div`
  display: flex;
  align-items: center;
  font-size: ${theme.typography.label.fontSize};
  gap: 4px;

  span.label {
    background-color: ${theme.colors.labelBackground};
    padding: 0 4px 2px;
    border-radius: 4px;
    font-weight: ${theme.typography.label.fontWeight};
  }

  span.value {
    font-weight: ${theme.typography.label.fontWeight};
  }
`;

export const CharacterAvatar = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 4px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
`;

export const StateContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 320px;
  height: 120px;
  border-radius: 8px;
  font-size: ${theme.typography.label.fontSize};
  border: 1px solid ${theme.colors.border};
  background-color: ${theme.colors.widgetBackground};
  color: ${theme.colors.text};
`;
