import { Button } from 'react-native'
import { Stack, useRouter } from 'expo-router'

export default function ClientLayout() {
  const router = useRouter()

  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#0167E9',
        },
      }}
    >
      <Stack.Screen
        name="home/index"
        options={{
          headerTitle: 'Início',
          headerTitleAlign: 'center',
          headerTintColor: '#FFFFFF',
          headerShadowVisible: false,
          headerRight: () => (
            <Button
              title="Modal"
              onPress={() => router.push('/(client)/dashboard/menu-nav/')}
            />
          ),
        }}
      />
      <Stack.Screen
        name="menu-nav/index"
        options={{
          presentation: 'modal',
        }}
      />
      <Stack.Screen
        name="address/index"
        options={{
          headerTitle: 'Endereço',
          headerTitleAlign: 'center',
          headerTintColor: '#FFFFFF',
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name="addresses/index"
        options={{
          headerTitle: 'Lista de endereços',
          headerTitleAlign: 'center',
          headerTintColor: '#FFFFFF',
          headerShadowVisible: false,
        }}
      />
    </Stack>
  )
}