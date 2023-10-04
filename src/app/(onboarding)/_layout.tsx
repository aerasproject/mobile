import { Stack, useNavigation } from 'expo-router'
import { TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons'

export default function OnboardingLayout() {
  const navigation = useNavigation()

  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#0167E9',
        },
      }}
    >
      <Stack.Screen
        name="(screens)/welcome/index"
        options={{
          headerTitle: '',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="(screens)/choice/index"
        options={{
          headerTitle: '',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="(screens)/sign-up/index"
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
        name="(screens)/sign-in/index"
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
        name="(screens)/sign-up/worker-choice/index"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  )
}
