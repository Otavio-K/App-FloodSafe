import { View, Text, Button, StyleSheet } from 'react-native';

export default function TelaBoasVindas({ navigation }) {
    return (
        <View style={estilos.container}>
            <Text style={estilos.titulo}>Bem-vindo ao FloodSafe</Text>
            <Button title="Monitoramento" onPress={() => navigation.navigate('Monitoramento')} />
            <Button title="Alertas" onPress={() => navigation.navigate('Alertas')} />
            <Button title="Ações de Controle" onPress={() => navigation.navigate('AcoesControle')} />
            <Button title="Histórico" onPress={() => navigation.navigate('Historico')} />
        </View>
    );
}

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 24,
        gap: 16,
        backgroundColor: '#e3f2fd',
    },
    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 30,
    },
});
