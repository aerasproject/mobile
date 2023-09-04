import { Pressable } from 'react-native'
import { Stack, useRouter } from 'expo-router'
import { Feather } from '@expo/vector-icons'

import { useAuth } from '@/hooks/use-auth'
import { useMenu } from '@/hooks/use-menu'

export default function ClientLayout() {
  const { user } = useAuth()
  const { setIsOpenMenu } = useMenu()

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
            <Pressable onPress={() => setIsOpenMenu((value) => !value)}>
              <Feather name="menu" size={24} color="#FFFFFF" />
            </Pressable>
          ),
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
          headerRight: () => (
            <Pressable onPress={() => setIsOpenMenu((value) => !value)}>
              <Feather name="menu" size={24} color="#FFFFFF" />
            </Pressable>
          ),
        }}
      />
      <Stack.Screen
        name="environments/index"
        options={{
          headerTitle: 'Lista de ambientes',
          headerTintColor: '#FFFFFF',
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name="environment/index"
        options={{
          headerTitle: 'Criar ambientes',
          headerTintColor: '#FFFFFF',
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name="equipment/index"
        options={{
          headerTitle: 'Equipamento',
          headerTintColor: '#FFFFFF',
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name="equipments/index"
        options={{
          headerTitle: 'Lista de Equipamentos',
          headerTitleAlign: 'center',
          headerTintColor: '#FFFFFF',
          headerShadowVisible: false,
          headerRight: () => (
            <Pressable onPress={() => setIsOpenMenu((value) => !value)}>
              <Feather name="menu" size={24} color="#FFFFFF" />
            </Pressable>
          ),
        }}
      />
      <Stack.Screen
        name="profile/index"
        options={{
          headerTitle: user.name,
          headerTintColor: '#FFFFFF',
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name="faq/index"
        options={{
          headerTitle: 'faq',
          headerTintColor: '#FFFFFF',
          headerShadowVisible: false,
          headerRight: () => (
            <Pressable onPress={() => setIsOpenMenu((value) => !value)}>
              <Feather name="menu" size={24} color="#FFFFFF" />
            </Pressable>
          ),
        }}
      />
      <Stack.Screen
        name="aeras-assist/index"
        options={{
          headerTitle: 'aeras-assist',
          headerTintColor: '#FFFFFF',
          headerShadowVisible: false,
          headerRight: () => (
            <Pressable onPress={() => setIsOpenMenu((value) => !value)}>
              <Feather name="menu" size={24} color="#FFFFFF" />
            </Pressable>
          ),
        }}
      />
      <Stack.Screen
        name="notifications/index"
        options={{
          headerTitle: 'notifications',
          headerTintColor: '#FFFFFF',
          headerShadowVisible: false,
          headerRight: () => (
            <Pressable onPress={() => setIsOpenMenu((value) => !value)}>
              <Feather name="menu" size={24} color="#FFFFFF" />
            </Pressable>
          ),
        }}
      />
    </Stack>
  )
}
