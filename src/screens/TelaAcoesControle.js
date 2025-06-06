import { useState } from 'react';
import { Alert, StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function TelaAcoesControle({ navigation }) {
    const [acoes, setAcoes] = useState({
        barreira: false,
        bomba: false,
        sirene: false,
        alerta: false
    });

    const executarAcao = (acao) => {
        setAcoes(prev => ({
            ...prev,
            [acao]: true
        }));

        const mensagens = {
            barreira: 'Barreira de contenção ativada com sucesso!',
            bomba: 'Sistema de bombeamento iniciado!',
            sirene: 'Sirene de alerta ativada!',
            alerta: 'Alerta enviado para todos os usuários!'
        };

        Alert.alert('Sucesso', mensagens[acao]);
    };

    const acoesDisponiveis = [
        {
            id: 'barreira',
            titulo: 'Ativar Barreira',
            descricao: 'Ativa a barreira de contenção de enchentes',
            icone: 'water',
            cor: '#2196f3'
        },
        {
            id: 'bomba',
            titulo: 'Iniciar Bombeamento',
            descricao: 'Ativa o sistema de bombeamento de água',
            icone: 'invert-colors',
            cor: '#4caf50'
        },
        {
            id: 'sirene',
            titulo: 'Ativar Sirene',
            descricao: 'Ativa a sirene de alerta para a população',
            icone: 'volume-up',
            cor: '#f44336'
        },
        {
            id: 'alerta',
            titulo: 'Enviar Alerta',
            descricao: 'Envia alerta para todos os usuários registrados',
            icone: 'notifications',
            cor: '#ff9800'
        }
    ];

    return (
        <ScrollView style={estilos.container}>
            <Text style={estilos.titulo}>Ações de Controle</Text>
            <Text style={estilos.subtitulo}>Selecione uma ação para executar</Text>

            <View style={estilos.acoesContainer}>
                {acoesDisponiveis.map((acao) => (
                    <TouchableOpacity
                        key={acao.id}
                        style={[
                            estilos.acaoCard,
                            acoes[acao.id] && estilos.acaoAtiva
                        ]}
                        onPress={() => executarAcao(acao.id)}
                        disabled={acoes[acao.id]}
                    >
                        <MaterialIcons 
                            name={acao.icone} 
                            size={32} 
                            color={acao.cor} 
                        />
                        <View style={estilos.acaoInfo}>
                            <Text style={estilos.acaoTitulo}>{acao.titulo}</Text>
                            <Text style={estilos.acaoDescricao}>{acao.descricao}</Text>
                        </View>
                        {acoes[acao.id] && (
                            <MaterialIcons 
                                name="check-circle" 
                                size={24} 
                                color="#4caf50" 
                            />
                        )}
                    </TouchableOpacity>
                ))}
            </View>

            <TouchableOpacity 
                style={estilos.botaoHistorico}
                onPress={() => navigation.navigate('Historico')}
            >
                <MaterialIcons name="history" size={24} color="#ffffff" />
                <Text style={estilos.botaoHistoricoTexto}>Ver Histórico</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#f5f5f5',
    },
    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 8,
        color: '#1565c0',
    },
    subtitulo: {
        fontSize: 16,
        color: '#757575',
        marginBottom: 24,
    },
    acoesContainer: {
        gap: 16,
    },
    acaoCard: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        padding: 16,
        borderRadius: 12,
        elevation: 3,
    },
    acaoAtiva: {
        backgroundColor: '#e8f5e9',
    },
    acaoInfo: {
        flex: 1,
        marginLeft: 16,
    },
    acaoTitulo: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#424242',
    },
    acaoDescricao: {
        fontSize: 14,
        color: '#757575',
        marginTop: 4,
    },
    botaoHistorico: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#9c27b0',
        padding: 16,
        borderRadius: 8,
        marginTop: 24,
        marginBottom: 16,
    },
    botaoHistoricoTexto: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 8,
    },
});
