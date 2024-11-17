import React, { createContext, useState, useEffect } from "react";
import ky from "ky";
import { API_URL } from "../config";
import type { Character } from "../types/RickAndMorty.types";

type AppData = {
  isLoading: boolean;
  error: Error | null;
  character: {
    name: Character["name"];
    status: Character["status"];
    gender: Character["gender"];
    imageUrl: string;
    episodeCount: number;
  } | null;
  characterId: number;
  setCharacterId: React.Dispatch<React.SetStateAction<number>>;
  maxCharacterId: number;
};

export const AppDataContext = createContext<AppData>({
  isLoading: true,
  error: null,
  character: null,
  characterId: 1,
  setCharacterId: () => {},
  maxCharacterId: 0,
});

export const AppDataContextProvider = ({
  children,
}: React.PropsWithChildren) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);
  const [character, setCharacter] = useState<AppData["character"]>(null);
  const [characterId, setCharacterId] = useState<number>(1);
  const [maxCharacterId, setMaxCharacterId] = useState<number>(0);

  useEffect(() => {
    const fetchMaxCharacterId = async () => {
      try {
        const response = await ky
          .get(`${API_URL}/character`)
          .json<{ info: { count: number } }>();
        setMaxCharacterId(response.info.count);
      } catch (error) {
        setError(
          error instanceof Error
            ? error
            : new Error("Failed to fetch max character ID")
        );
      }
    };

    if (maxCharacterId === 0) fetchMaxCharacterId();
  }, []);

  useEffect(() => {
    const fetchCharacter = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response: Character = await ky
          .get(`${API_URL}/character/${characterId}`)
          .json();
        const nextCharacterData: AppData["character"] = {
          name: response.name,
          status: response.status,
          gender: response.gender,
          imageUrl: response.image,
          episodeCount: response.episode.length,
        };
        setCharacter(nextCharacterData);
      } catch (error) {
        console.error("Failed to fetch character:", error);
        setError(
          error instanceof Error
            ? error
            : new Error("Failed to fetch character")
        );
        setCharacter(null);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCharacter();
  }, [characterId]);

  return (
    <AppDataContext.Provider
      value={{
        isLoading,
        error,
        character,
        characterId,
        setCharacterId,
        maxCharacterId,
      }}
    >
      {children}
    </AppDataContext.Provider>
  );
};
