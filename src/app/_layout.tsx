import { Slot } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { ThemeProvider } from 'styled-components/native'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import { UserProvider } from '@/contexts/userContext'

import theme from '@/theme'

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <UserProvider>
          <StatusBar style="light" backgroundColor="transparent" translucent />
          <Slot />
        </UserProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  )
}
