import { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';

export default function TelaAlertas({ navigation }) {
    const [alertas, setAlertas] = useState([
        { id: '1', risco: 'Médio', mensagem: 'Possível transbordamento nas próximas horas.' },
        { id: '2', risco: 'Alto', mensagem: 'Evacuação recomendada imediatamente.' },
    ]);

    return (
        <View style={estilos.container}>
            <Text style={estilos.titulo}>Alertas</Text>
            <FlatList
                data={alertas}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={estilos.alertaBox}>
                        <Text style={estilos.risco}>Nível de Risco: {item.risco}</Text>
                        <Text>{item.mensagem}</Text>
                    </View>
                )}
            />
            <Button title="Ir para Ações" onPress={() => navigation.navigate('AcoesControle')} />
        </View>
    );
}

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: '#fff8e1',
    },
    titulo: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 12,
    },
    alertaBox: {
        backgroundColor: '#ffe082',
        padding: 10,
        marginBottom: 10,
        borderRadius: 8,
    },
    risco: {
        fontWeight: 'bold',
    },
});