import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MaterialIcons } from '@expo/vector-icons';

import TelaBoasVindas from '../screens/TelaBoasVindas';
import TelaMonitoramento from '../screens/TelaMonitoramento';
import TelaAlertas from '../screens/TelaAlertas';
import TelaAcoesControle from '../screens/TelaAcoesControle';
import TelaHistorico from '../screens/TelaHistorico';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="BoasVindas"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#1565c0',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen 
          name="BoasVindas" 
          component={TelaBoasVindas} 
          options={{ 
            title: 'FloodSafe',
            headerShown: false
          }} 
        />
        <Stack.Screen 
          name="Monitoramento" 
          component={TelaMonitoramento}
          options={{
            title: 'Monitoramento de Sensores',
            headerRight: () => (
              <MaterialIcons name="refresh" size={24} color="#fff" style={{ marginRight: 16 }} />
            ),
          }}
        />
        <Stack.Screen 
          name="Alertas" 
          component={TelaAlertas}
          options={{
            title: 'Alertas de Enchente',
            headerRight: () => (
              <MaterialIcons name="notifications" size={24} color="#fff" style={{ marginRight: 16 }} />
            ),
          }}
        />
        <Stack.Screen 
          name="AcoesControle" 
          component={TelaAcoesControle}
          options={{
            title: 'Ações de Controle',
            headerRight: () => (
              <MaterialIcons name="settings" size={24} color="#fff" style={{ marginRight: 16 }} />
            ),
          }}
        />
        <Stack.Screen 
          name="Historico" 
          component={TelaHistorico}
          options={{
            title: 'Histórico de Ações',
            headerRight: () => (
              <MaterialIcons name="filter-list" size={24} color="#fff" style={{ marginRight: 16 }} />
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
