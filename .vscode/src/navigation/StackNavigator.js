import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TelaAcoesControle from '../screens/TelaAcoesControle';
import TelaAlertas from '../screens/TelaAlertas';
import TelaBoasVindas from '../screens/TelaBoasVindas';
import TelaHistorico from '../screens/TelaHistorico';
import TelaMonitoramento from '../screens/TelaMonitoramento';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="BoasVindas">
                <Stack.Screen name="BoasVindas" component={TelaBoasVindas} options={{ headerShown: false }} />
                <Stack.Screen name="Monitoramento" component={TelaMonitoramento} />
                <Stack.Screen name="Alertas" component={TelaAlertas} />
                <Stack.Screen name="AcoesControle" component={TelaAcoesControle} />
                <Stack.Screen name="Historico" component={TelaHistorico} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}