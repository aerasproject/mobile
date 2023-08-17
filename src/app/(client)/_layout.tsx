import { Pressable } from 'react-native'
import { Link, Stack } from 'expo-router'
import { Feather } from '@expo/vector-icons'

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        animation: 'fade',
        headerStyle: {
          backgroundColor: '#0167E9',
        },
      }}
    >
      <Stack.Screen
        name="dashboard/home/index"
        options={{
          headerTitle: 'Início',
          headerTitleAlign: 'center',
          headerTintColor: '#FFFFFF',
          headerShadowVisible: false,
          headerRight: () => (
            <Link asChild href="/(client)/dashboard/menu-nav">
              <Pressable>
                <Feather name="menu" size={32} color="#FFFFFF" />
              </Pressable>
            </Link>
          ),
        }}
      />
      <Stack.Screen
        name="dashboard/menu-nav/index"
        options={{
          presentation: 'modal',
          headerTintColor: '#FFFFFF',
          headerTitle: '',
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name="dashboard/address/create/index"
        options={{
          headerTitle: 'Cadastrar endereço',
          headerTitleAlign: 'center',
          headerTintColor: '#FFFFFF',
          headerShadowVisible: false,
        }}
      />
    </Stack>
  )
}
