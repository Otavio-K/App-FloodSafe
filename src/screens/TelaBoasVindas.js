import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function TelaBoasVindas({ navigation }) {
    return (
        <ScrollView contentContainerStyle={estilos.container}>
            <View style={estilos.header}>
                <MaterialIcons name="water-damage" size={64} color="#1565c0" style={{ marginBottom: 12 }} />
                <Text style={estilos.titulo}>FloodSafe</Text>
            </View>
            <View style={estilos.botoesContainer}>
                <TouchableOpacity 
                    style={[estilos.botao, { backgroundColor: '#2196f3' }]} 
                    onPress={() => navigation.navigate('Monitoramento')}
                >
                    <MaterialIcons name="sensors" size={24} color="#fff" />
                    <Text style={estilos.botaoTexto}>Monitoramento</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={[estilos.botao, { backgroundColor: '#f44336' }]} 
                    onPress={() => navigation.navigate('Alertas')}
                >
                    <MaterialIcons name="warning" size={24} color="#fff" />
                    <Text style={estilos.botaoTexto}>Alertas</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={[estilos.botao, { backgroundColor: '#4caf50' }]} 
                    onPress={() => navigation.navigate('AcoesControle')}
                >
                    <MaterialIcons name="settings" size={24} color="#fff" />
                    <Text style={estilos.botaoTexto}>Ação e Controle</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={[estilos.botao, { backgroundColor: '#9c27b0' }]} 
                    onPress={() => navigation.navigate('Historico')}
                >
                    <MaterialIcons name="history" size={24} color="#fff" />
                    <Text style={estilos.botaoTexto}>Histórico</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

const estilos = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 24,
        backgroundColor: '#e3f2fd',
    },
    header: {
        alignItems: 'center',
        marginBottom: 24,
    },
    titulo: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#1565c0',
        marginBottom: 6,
    },
    botoesContainer: {
        width: '100%',
        gap: 16,
    },
    botao: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
        borderRadius: 8,
        marginBottom: 12,
        elevation: 2,
    },
    botaoTexto: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 10,
    },
});
