import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function TelaMonitoramento() {
    // Mock de leitura dos sensores
    const leituras = [
        { id: 1, nivelAgua: 'Alto', clima: 'Chuva', horario: '12:00' },
        { id: 2, nivelAgua: 'Médio', clima: 'Nublado', horario: '11:30' },
    ];

    return (
        <ScrollView style={estilos.container}>
            <Text style={estilos.titulo}>Monitoramento de Sensores</Text>
            {leituras.map((item) => (
                <View key={item.id} style={estilos.card}>
                    <Text>Nível da Água: {item.nivelAgua}</Text>
                    <Text>Clima: {item.clima}</Text>
                    <Text>Horário: {item.horario}</Text>
                </View>
            ))}
        </ScrollView>
    );
}

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: '#fffde7',
    },
    titulo: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    card: {
        backgroundColor: '#f1f8e9',
        padding: 16,
        borderRadius: 8,
        marginBottom: 12,
        elevation: 2,
    },
});
