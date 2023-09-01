import { Slot } from 'expo-router'
import { ThemeProvider } from 'styled-components/native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { Loading } from '@/components/loading'

import { useAuth } from '@/hooks/use-auth'

import { AuthContextProvider } from '@/contexts/auth-context'
import { MenuContextProvider } from '@/contexts/menu-context'
import { AddressContextProvider } from '@/contexts/address-context'

import theme from '@/theme'

// SplashScreen.preventAutoHideAsync()

const queryClient = new QueryClient()

export default function RootLayout() {
  const { isLoadingUserStorage } = useAuth()

  return (
    <SafeAreaProvider>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <AuthContextProvider>
            <AddressContextProvider>
              <MenuContextProvider>
                {isLoadingUserStorage ? <Loading /> : <Slot />}
              </MenuContextProvider>
            </AddressContextProvider>
          </AuthContextProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </SafeAreaProvider>
  )
}
