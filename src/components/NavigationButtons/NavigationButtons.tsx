import React, { useContext } from "react";
import { AppDataContext } from "../../contexts/AppData.context";
import { ButtonContainer, NavigationButton } from "./NavigationButtonts.styled";

export const NavigationButtons: React.FC<{
  disabled?: boolean;
}> = ({ disabled = false }) => {
  const { characterId, setCharacterId, maxCharacterId } =
    useContext(AppDataContext);

  const handlePrevious = () => {
    if (characterId > 1) {
      setCharacterId(characterId - 1);
    }
  };

  const handleNext = () => {
    if (characterId < maxCharacterId) {
      setCharacterId(characterId + 1);
    }
  };

  return (
    <ButtonContainer>
      <NavigationButton
        onClick={handlePrevious}
        disabled={disabled || characterId <= 1}
      >
        Previous
      </NavigationButton>
      <NavigationButton
        onClick={handleNext}
        disabled={disabled || characterId >= maxCharacterId}
      >
        Next
      </NavigationButton>
    </ButtonContainer>
  );
};
