import React from "react";
import { AppDataContextProvider } from "./contexts/AppData.context";
import { AppContainer } from "./App.styled";
import CharacterWidget from "./components/CharacterWidget";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AppDataContextProvider>
        <AppContainer>
          <CharacterWidget />
        </AppContainer>
      </AppDataContextProvider>
    </QueryClientProvider>
  );
};

export default App;
