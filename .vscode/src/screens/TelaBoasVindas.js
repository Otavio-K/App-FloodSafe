import { Button, StyleSheet, Text, View } from 'react-native';

export default function TelaBoasVindas({ navigation }) {
    return (
        <View style={estilos.container}>
            <Text style={estilos.titulo}>Bem-vindo ao FloodSafe</Text>
            <Text style={estilos.subtitulo}>Sistema de Monitoramento de Enchentes</Text>
            <Button title="Iniciar Monitoramento" onPress={() => navigation.navigate('Monitoramento')} />
        </View>
    );
}

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e0f2f1',
        padding: 24,
    },
    titulo: {
        fontSize: 26,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    subtitulo: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 30,
    },
});