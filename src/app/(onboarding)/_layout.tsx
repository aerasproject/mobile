import { Stack, useNavigation } from 'expo-router'
import { TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons'

export default function Layout() {
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
      <Stack.Screen name="welcome/index" />
      <Stack.Screen name="choice/index" />
      <Stack.Screen
        name="sign-up/index"
        options={{
          headerTitle: '',
          headerShadowVisible: false,
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <AntDesign name="leftcircleo" size={40} color="white" />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="sign-in/index"
        options={{
          headerTitle: '',
          headerShadowVisible: false,
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <AntDesign name="leftcircleo" size={40} color="white" />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack>
  )
}
