import { Tabs } from 'expo-router'
import { Feather } from '@expo/vector-icons'

export default function WorkerLayout() {
  return (
    <Tabs
      screenOptions={{
        headerTintColor: '#ffffff',
        headerTitleAlign: 'center',
        headerShadowVisible: false,
        headerStyle: {
          backgroundColor: '#0167E9',
        },
        tabBarActiveTintColor: '#0051B6',
        tabBarInactiveTintColor: '#81a8d8',
        tabBarStyle: {
          backgroundColor: '#F8F8F8',
        },
      }}
    >
      <Tabs.Screen
        name="(screens)/maintenance/index"
        options={{
          tabBarLabel: 'MP',
          title: 'Manutenção Programada',
          tabBarIcon: ({ size, color }) => (
            <Feather name="settings" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="(screens)/responsibilities/index"
        options={{
          tabBarLabel: 'RT',
          title: 'Responsabilidades Técnicas',
          tabBarIcon: ({ size, color }) => (
            <Feather name="check-circle" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="(screens)/new-pmoc/index"
        options={{
          title: 'Criar PMOC',
          tabBarLabel: 'Novo PMOC',
          tabBarIcon: ({ size, color }) => (
            <Feather name="plus-circle" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="(screens)/alerts/index"
        options={{
          title: 'Notificações',
          tabBarLabel: 'Alertas',
          tabBarIcon: ({ size, color }) => (
            <Feather name="bell" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="(screens)/profile/index"
        options={{
          title: 'Meu Perfil',
          tabBarLabel: 'Perfil',
          tabBarIcon: ({ size, color }) => (
            <Feather name="user" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  )
}
