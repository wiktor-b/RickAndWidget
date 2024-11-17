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
import { useQuery } from "@tanstack/react-query";
import { API_URL } from "../../config";
import { Character } from "../../types/RickAndMorty.types";

const CharacterWidgetLayout = () => {
  return (
    <Layout>
      <CharacterWidget />
      <NavigationButtons />
    </Layout>
  );
};

const CharacterWidget: React.FC = () => {
  const { characterId } = useContext(AppDataContext);

  const { isPending, error, data } = useQuery<Character>({
    queryKey: ["character", { id: characterId }],
    queryFn: () =>
      fetch(`${API_URL}/character/${characterId}`).then((res) => res.json()),
  });

  if (isPending) return <StateContainer>Loading...</StateContainer>;

  if (error || !data)
    return (
      <StateContainer>An error occured... try again later.</StateContainer>
    );

  console.log(data);

  return (
    <CharacterWidgetContainer>
      <StatusBanner status={data.status}>{data.name}</StatusBanner>
      <ContentContainer>
        <InfoContainer>
          <InfoLabel>
            <span className="label">id</span>
            <span className="value">#{data.id}</span>
          </InfoLabel>
          <InfoLabel>
            <span className="label">status</span>
            <span className="value">{data.status}</span>
          </InfoLabel>
          <InfoLabel>
            <span className="label">gender</span>
            <span className="value">{data.gender}</span>
          </InfoLabel>
          <InfoLabel>
            <span className="label">episodes</span>
            <span className="value">{data.episode?.length}</span>
          </InfoLabel>
        </InfoContainer>

        <CharacterAvatar alt="Character avatar" src={data.image} />
      </ContentContainer>
    </CharacterWidgetContainer>
  );
};

export default CharacterWidgetLayout;
