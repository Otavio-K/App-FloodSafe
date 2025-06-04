import { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

export default function TelaHistorico() {
    const [historico, setHistorico] = useState([
        { id: '1', acao: 'Barreira ativada', data: '04/06/2025 - 14:30' },
        { id: '2', acao: 'Alerta de risco alto emitido', data: '03/06/2025 - 22:15' },
    ]);

    return (
        <View style={estilos.container}>
            <Text style={estilos.titulo}>Histórico de Ações</Text>
            <FlatList
                data={historico}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={estilos.item}>
                        <Text style={estilos.acao}>{item.acao}</Text>
                        <Text style={estilos.data}>{item.data}</Text>
                    </View>
                )}
            />
        </View>
    );
}

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: '#fce4ec',
    },
    titulo: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 12,
    },
    item: {
        backgroundColor: '#f8bbd0',
        padding: 10,
        marginBottom: 10,
        borderRadius: 8,
    },
    acao: {
        fontWeight: 'bold',
    },
    data: {
        color: '#333',
    },
});