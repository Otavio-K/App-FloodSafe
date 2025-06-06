import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function TelaHistorico() {
    const historico = [
        { 
            id: 1, 
            acao: 'Barreira ativada', 
            horario: '12:00',
            data: '06/06/2024',
            responsavel: 'Operador João',
            status: 'Concluído',
            detalhes: 'Barreira de contenção ativada na Zona Norte'
        },
        { 
            id: 2, 
            acao: 'Alerta emitido', 
            horario: '11:45',
            data: '06/06/2024',
            responsavel: 'Sistema Automático',
            status: 'Concluído',
            detalhes: 'Alerta de risco alto enviado para todos os usuários'
        },
        { 
            id: 3, 
            acao: 'Bombeamento iniciado', 
            horario: '11:30',
            data: '06/06/2024',
            responsavel: 'Operador Maria',
            status: 'Em andamento',
            detalhes: 'Sistema de bombeamento ativado na Zona Sul'
        }
    ];

    const getStatusColor = (status) => {
        switch(status) {
            case 'Concluído': return '#4caf50';
            case 'Em andamento': return '#ff9800';
            case 'Falha': return '#f44336';
            default: return '#757575';
        }
    };

    return (
        <ScrollView style={estilos.container}>
            <Text style={estilos.titulo}>Histórico de Ações</Text>
            <Text style={estilos.subtitulo}>Registro de todas as ações realizadas</Text>

            {historico.map((item) => (
                <View key={item.id} style={estilos.card}>
                    <View style={estilos.cardHeader}>
                        <View style={estilos.cardHeaderLeft}>
                            <MaterialIcons name="history" size={24} color="#1565c0" />
                            <View style={estilos.cardHeaderInfo}>
                                <Text style={estilos.acao}>{item.acao}</Text>
                                <Text style={estilos.responsavel}>{item.responsavel}</Text>
                            </View>
                        </View>
                        <View style={[estilos.status, { backgroundColor: getStatusColor(item.status) }]}>
                            <Text style={estilos.statusTexto}>{item.status}</Text>
                        </View>
                    </View>

                    <Text style={estilos.detalhes}>{item.detalhes}</Text>

                    <View style={estilos.rodape}>
                        <View style={estilos.dataHora}>
                            <MaterialIcons name="event" size={16} color="#757575" />
                            <Text style={estilos.dataHoraTexto}>{item.data}</Text>
                        </View>
                        <View style={estilos.dataHora}>
                            <MaterialIcons name="access-time" size={16} color="#757575" />
                            <Text style={estilos.dataHoraTexto}>{item.horario}</Text>
                        </View>
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
        color: '#1565c0',
    },
    subtitulo: {
        fontSize: 16,
        color: '#757575',
        marginBottom: 24,
    },
    card: {
        backgroundColor: '#ffffff',
        padding: 16,
        borderRadius: 12,
        marginBottom: 16,
        elevation: 3,
    },
    cardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: 12,
    },
    cardHeaderLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
    },
    cardHeaderInfo: {
        marginLeft: 12,
        flex: 1,
    },
    acao: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#424242',
    },
    responsavel: {
        fontSize: 14,
        color: '#757575',
        marginTop: 2,
    },
    status: {
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 16,
    },
    statusTexto: {
        color: '#ffffff',
        fontSize: 12,
        fontWeight: 'bold',
    },
    detalhes: {
        fontSize: 14,
        color: '#424242',
        marginBottom: 12,
        lineHeight: 20,
    },
    rodape: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderTopWidth: 1,
        borderTopColor: '#e0e0e0',
        paddingTop: 12,
    },
    dataHora: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    dataHoraTexto: {
        marginLeft: 4,
        fontSize: 12,
        color: '#757575',
    },
});
