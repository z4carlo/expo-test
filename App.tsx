import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

import { ThemeProvider } from "./theme/ThemeProvider";
import { GetStyles } from './build-configs/Styles';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  const theme = GetStyles();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <ThemeProvider themeOverride={{ ...theme }}>
          <>
            <Navigation colorScheme={colorScheme} />
            <StatusBar />
          </>
        </ThemeProvider>
      </SafeAreaProvider>
    );
  }
}
