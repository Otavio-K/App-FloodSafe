import { View, Text, StyleSheet } from 'react-native';

export default function TelaAlertas() {
    const alertas = [
        { id: 1, nivel: 'Crítico', mensagem: 'Risco alto de enchente' },
        { id: 2, nivel: 'Moderado', mensagem: 'Acompanhar com atenção' },
    ];

    return (
        <View style={estilos.container}>
            <Text style={estilos.titulo}>Alertas de Enchente</Text>
            {alertas.map((item) => (
                <View key={item.id} style={estilos.alerta}>
                    <Text style={{ fontWeight: 'bold' }}>{item.nivel}</Text>
                    <Text>{item.mensagem}</Text>
                </View>
            ))}
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
        marginBottom: 16,
    },
    alerta: {
        backgroundColor: '#fff',
        padding: 12,
        marginBottom: 10,
        borderRadius: 6,
        borderColor: '#ec407a',
        borderWidth: 1,
    },
});
