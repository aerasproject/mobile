import { Slot } from 'expo-router'
import { ThemeProvider } from 'styled-components/native'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import { Loading } from '@/components/loading'

import { useAuth } from '@/hooks/use-auth'

import { AuthContextProvider } from '@/contexts/auth-context'

import theme from '@/theme'

export default function RootLayout() {
  const { isLoadingUserStorage } = useAuth()

  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <AuthContextProvider>
          {isLoadingUserStorage ? <Loading /> : <Slot />}
        </AuthContextProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  )
}
