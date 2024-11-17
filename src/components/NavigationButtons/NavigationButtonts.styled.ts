import styled from "@emotion/styled";
import { theme } from "../../utils/theme";

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 28px;
`;

export const NavigationButton = styled.button`
  width: 90px;
  height: 30px;
  border: 1px solid ${theme.colors.border};
  border-radius: 4px;
  background-color: ${theme.colors.widgetBackground};
  cursor: pointer;
  font-size: ${theme.typography.button.fontSize};
  font-weight: ${theme.typography.button.fontWeight};
  color: ${theme.colors.text};

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    background-color: ${theme.colors.border};
  }
`;
