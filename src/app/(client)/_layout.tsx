import { Button, Pressable } from 'react-native'
import { Link, Stack, useRouter } from 'expo-router'
import { Feather } from '@expo/vector-icons'

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
        name="dashboard/home/index"
        options={{
          headerTitle: 'Início',
          headerTitleAlign: 'center',
          headerTintColor: '#FFFFFF',
          headerShadowVisible: false,
          headerRight: () => (
            <Button
              title="Modal"
              onPress={() => router.push('/(client)/dashboard/menu-nav')}
            />
            // <Link asChild href="/(client)/dashboard/menu-nav">
            //   <Pressable>
            //     <Feather name="menu" size={32} color="#FFFFFF" />
            //   </Pressable>
            // </Link>
          ),
        }}
      />
      <Stack.Screen
        name="dashboard/menu-nav/index"
        options={{
          presentation: 'formSheet',
          // headerTintColor: '#FFFFFF',
          // headerTitle: '',
          // headerShadowVisible: false,
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
