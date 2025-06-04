import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function TelaMonitoramento({ navigation }) {
    const [nivelAgua, setNivelAgua] = useState(2.3); // valor simulado
    const [clima, setClima] = useState('Nublado');

    return (
        <View style={estilos.container}>
            <Text style={estilos.titulo}>Monitoramento</Text>
            <Text style={estilos.info}>Nível da água: {nivelAgua} metros</Text>
            <Text style={estilos.info}>Clima atual: {clima}</Text>
            <Button title="Ver Alertas" onPress={() => navigation.navigate('Alertas')} />
        </View>
    );
}

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: '#e3f2fd',
    },
    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    info: {
        fontSize: 16,
        marginBottom: 10,
    },
});