import { useState } from 'react';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';

export default function TelaAcoesControle({ navigation }) {
    const [barreiraAtivada, setBarreiraAtivada] = useState(false);

    const ativarBarreira = () => {
        setBarreiraAtivada(true);
        Alert.alert('Sucesso', 'Barreira de contenção ativada com sucesso!');
    };

    return (
        <View style={estilos.container}>
            <Text style={estilos.titulo}>Ações de Controle</Text>
            <Button
                title={barreiraAtivada ? "Barreira já ativada" : "Ativar Barreira"}
                onPress={ativarBarreira}
                disabled={barreiraAtivada}
            />
            <View style={{ marginTop: 20 }}>
                <Button title="Ver Histórico" onPress={() => navigation.navigate('Historico')} />
            </View>
        </View>
    );
}

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: '#f1f8e9',
    },
    titulo: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 20,
    },
});