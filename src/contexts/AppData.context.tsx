import React, { createContext, useState } from "react";
import { API_URL } from "../config";
import { useQuery } from "@tanstack/react-query";

type AppData = {
  characterId: number;
  setCharacterId: React.Dispatch<React.SetStateAction<number>>;
  maxCharacterId: number;
};

export const AppDataContext = createContext<AppData>({
  characterId: 1,
  setCharacterId: () => {},
  maxCharacterId: 0,
});

export const AppDataContextProvider = ({
  children,
}: React.PropsWithChildren) => {
  const [characterId, setCharacterId] = useState<number>(1);

  const { data: infoData } = useQuery<{ info: { count: number } }>({
    queryKey: ["characterInfo"],
    queryFn: () => fetch(`${API_URL}/character`).then((res) => res.json()),
  });

  const maxCharacterId = infoData?.info.count ?? 0;

  return (
    <AppDataContext.Provider
      value={{
        characterId,
        setCharacterId,
        maxCharacterId,
      }}
    >
      {children}
    </AppDataContext.Provider>
  );
};
