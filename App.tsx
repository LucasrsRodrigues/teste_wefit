import React from "react";
import AppRoutes from "./src/presentation/routes";
import theme from "./src/presentation/styles/theme";
import { RepositoryProvider } from "./src/presentation/context/repository";
import { ThemeProvider } from "styled-components";
import { Provider as PaperProvider } from 'react-native-paper';

import {
  useFonts,
  Roboto_500Medium,
  Roboto_400Regular
} from '@expo-google-fonts/roboto';

import {
  Inter_400Regular,
  Inter_700Bold
} from '@expo-google-fonts/inter';


export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_500Medium,
    Roboto_400Regular,
    Inter_400Regular,
    Inter_700Bold
  });

  if (!fontsLoaded) return <></>;

  return (
    <ThemeProvider theme={theme}>
      <RepositoryProvider>
        <PaperProvider>
          <AppRoutes />
        </PaperProvider>
      </RepositoryProvider>
    </ThemeProvider>
  );
}
