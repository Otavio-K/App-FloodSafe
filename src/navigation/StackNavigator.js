import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TelaBoasVindas from '../screens/TelaBoasVindas';
import TelaMonitoramento from '../screens/TelaMonitoramento';
import TelaAlertas from '../screens/TelaAlertas';
import TelaAcoesControle from '../screens/TelaAcoesControle';
import TelaHistorico from '../screens/TelaHistorico';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="BoasVindas">
        <Stack.Screen name="BoasVindas" component={TelaBoasVindas} options={{ title: 'Bem-vindo' }} />
        <Stack.Screen name="Monitoramento" component={TelaMonitoramento} />
        <Stack.Screen name="Alertas" component={TelaAlertas} />
        <Stack.Screen name="AcoesControle" component={TelaAcoesControle} options={{ title: 'Controle' }} />
        <Stack.Screen name="Historico" component={TelaHistorico} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
