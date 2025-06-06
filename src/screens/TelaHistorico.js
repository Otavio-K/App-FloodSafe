import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function TelaHistorico() {
    const historico = [
        { id: 1, acao: 'Barreira ativada', horario: '12:00 - 06/06' },
        { id: 2, acao: 'Alerta emitido', horario: '11:45 - 06/06' },
    ];

    return (
        <ScrollView style={estilos.container}>
            <Text style={estilos.titulo}>Histórico de Ações</Text>
            {historico.map((item) => (
                <View key={item.id} style={estilos.item}>
                    <Text>{item.acao}</Text>
                    <Text style={estilos.horario}>{item.horario}</Text>
                </View>
            ))}
        </ScrollView>
    );
}

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: '#e8eaf6',
    },
    titulo: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    item: {
        backgroundColor: '#fff',
        padding: 16,
        borderRadius: 8,
        marginBottom: 12,
        borderLeftWidth: 4,
        borderLeftColor: '#3f51b5',
    },
    horario: {
        fontSize: 12,
        color: '#555',
    },
});
