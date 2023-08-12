import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        statusBarColor: '#0067E9',
      }}
    >
      <Stack.Screen name='welcome/index' />
    </Stack>
  )
}