import { Slot } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import theme from '@/theme';

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <StatusBar
          style='light'
          backgroundColor='transparent'
          translucent
        />
        <Slot />
      </ThemeProvider>
    </SafeAreaProvider>
  )
}