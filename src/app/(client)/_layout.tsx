import { Pressable } from 'react-native'
import { Stack, useNavigation, useRouter } from 'expo-router'
import { Feather, AntDesign } from '@expo/vector-icons'

export default function Layout() {
  const route = useRouter()
  const navigation = useNavigation()

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
        name="dashboard/index"
        options={{
          headerTitle: 'Início',
          headerTitleAlign: 'center',
          headerTintColor: '#FFFFFF',
          headerShadowVisible: false,
          headerRight: () => (
            <Pressable onPress={() => route.push('/(client)/menu-nav/')}>
              <Feather name="menu" size={32} color="#FFFFFF" />
            </Pressable>
          ),
        }}
      />
      <Stack.Screen
        name="menu-nav/index"
        options={{
          headerTitle: '',
          headerShadowVisible: false,
          headerLeft: () => (
            <Pressable onPress={() => navigation.goBack()}>
              <AntDesign name="leftcircleo" size={40} color="white" />
            </Pressable>
          ),
        }}
      />
      <Stack.Screen name="address/create/index" />
    </Stack>
  )
}
