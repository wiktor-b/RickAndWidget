import React, { useContext } from "react";
import { AppDataContext } from "../../contexts/AppData.context";
import {
  CharacterWidgetContainer,
  StatusBanner,
  ContentContainer,
  InfoContainer,
  InfoLabel,
  CharacterAvatar,
  StateContainer,
  Layout,
} from "./CharacterWidget.styled";
import { NavigationButtons } from "../NavigationButtons/NavigationButtons";

const CharacterWidgetLayout = () => {
  const { isLoading } = useContext(AppDataContext);

  return (
    <Layout>
      <CharacterWidget />
      <NavigationButtons disabled={isLoading} />
    </Layout>
  );
};

const CharacterWidget: React.FC = () => {
  const { character, characterId, isLoading, error } =
    useContext(AppDataContext);

  if (isLoading) return <StateContainer>Loading...</StateContainer>;

  if (error || !character)
    return (
      <StateContainer>An error occured... try again later.</StateContainer>
    );

  return (
    <CharacterWidgetContainer>
      <StatusBanner status={character.status}>{character.name}</StatusBanner>
      <ContentContainer>
        <InfoContainer>
          <InfoLabel>
            <span className="label">id</span>
            <span className="value">#{characterId}</span>
          </InfoLabel>
          <InfoLabel>
            <span className="label">status</span>
            <span className="value">{character.status}</span>
          </InfoLabel>
          <InfoLabel>
            <span className="label">gender</span>
            <span className="value">{character.gender}</span>
          </InfoLabel>
          <InfoLabel>
            <span className="label">episodes</span>
            <span className="value">{character.episodeCount}</span>
          </InfoLabel>
        </InfoContainer>

        <CharacterAvatar alt="Character avatar" src={character.imageUrl} />
      </ContentContainer>
    </CharacterWidgetContainer>
  );
};

export default CharacterWidgetLayout;
