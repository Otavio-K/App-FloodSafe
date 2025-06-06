import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function TelaAlertas() {
    const alertas = [
        { 
            id: 1, 
            nivel: 'Crítico', 
            mensagem: 'Risco alto de enchente',
            local: 'Zona Norte',
            horario: '12:00',
            recomendacoes: [
                'Evacuar área imediatamente',
                'Manter distância das margens',
                'Seguir rotas de fuga sinalizadas'
            ]
        },
        { 
            id: 2, 
            nivel: 'Moderado', 
            mensagem: 'Acompanhar com atenção',
            local: 'Zona Sul',
            horario: '11:45',
            recomendacoes: [
                'Manter-se informado',
                'Preparar kit de emergência',
                'Verificar rotas de fuga'
            ]
        },
    ];

    const getNivelColor = (nivel) => {
        switch(nivel) {
            case 'Crítico': return '#d32f2f';
            case 'Alto': return '#f44336';
            case 'Moderado': return '#ff9800';
            case 'Baixo': return '#4caf50';
            default: return '#757575';
        }
    };

    return (
        <ScrollView style={estilos.container}>
            <Text style={estilos.titulo}>Alertas de Enchente</Text>
            <Text style={estilos.subtitulo}>Alertas ativos no momento</Text>

            {alertas.map((item) => (
                <View key={item.id} style={estilos.alerta}>
                    <View style={estilos.alertaHeader}>
                        <MaterialIcons 
                            name="warning" 
                            size={24} 
                            color={getNivelColor(item.nivel)} 
                        />
                        <View style={estilos.alertaInfo}>
                            <Text style={[estilos.nivel, { color: getNivelColor(item.nivel) }]}>
                                {item.nivel}
                            </Text>
                            <Text style={estilos.local}>{item.local}</Text>
                        </View>
                        <Text style={estilos.horario}>{item.horario}</Text>
                    </View>

                    <Text style={estilos.mensagem}>{item.mensagem}</Text>

                    <View style={estilos.recomendacoesContainer}>
                        <Text style={estilos.recomendacoesTitulo}>Recomendações:</Text>
                        {item.recomendacoes.map((rec, index) => (
                            <View key={index} style={estilos.recomendacaoItem}>
                                <MaterialIcons name="arrow-right" size={16} color="#757575" />
                                <Text style={estilos.recomendacaoTexto}>{rec}</Text>
                            </View>
                        ))}
                    </View>
                </View>
            ))}
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
        color: '#d32f2f',
    },
    subtitulo: {
        fontSize: 16,
        color: '#757575',
        marginBottom: 16,
    },
    alerta: {
        backgroundColor: '#ffffff',
        padding: 16,
        borderRadius: 12,
        marginBottom: 16,
        elevation: 3,
    },
    alertaHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
    },
    alertaInfo: {
        flex: 1,
        marginLeft: 12,
    },
    nivel: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    local: {
        fontSize: 14,
        color: '#757575',
    },
    horario: {
        fontSize: 14,
        color: '#757575',
    },
    mensagem: {
        fontSize: 16,
        color: '#424242',
        marginBottom: 16,
    },
    recomendacoesContainer: {
        backgroundColor: '#f5f5f5',
        padding: 12,
        borderRadius: 8,
    },
    recomendacoesTitulo: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 8,
        color: '#424242',
    },
    recomendacaoItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    recomendacaoTexto: {
        marginLeft: 8,
        color: '#424242',
    },
});
