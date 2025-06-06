import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function TelaMonitoramento() {
    // Mock de leitura dos sensores
    const leituras = [
        { 
            id: 1, 
            nivelAgua: 'Alto', 
            clima: 'Chuva', 
            horario: '12:00',
            temperatura: '22°C',
            umidade: '85%',
            pressao: '1013 hPa'
        },
        { 
            id: 2, 
            nivelAgua: 'Médio', 
            clima: 'Nublado', 
            horario: '11:30',
            temperatura: '21°C',
            umidade: '75%',
            pressao: '1015 hPa'
        },
    ];

    const getNivelAguaColor = (nivel) => {
        switch(nivel) {
            case 'Alto': return '#f44336';
            case 'Médio': return '#ff9800';
            case 'Baixo': return '#4caf50';
            default: return '#757575';
        }
    };

    return (
        <ScrollView style={estilos.container}>
            <Text style={estilos.titulo}>Monitoramento de Sensores</Text>
            <Text style={estilos.subtitulo}>Últimas leituras dos sensores</Text>
            
            {leituras.map((item) => (
                <View key={item.id} style={estilos.card}>
                    <View style={estilos.cardHeader}>
                        <MaterialIcons name="water" size={24} color={getNivelAguaColor(item.nivelAgua)} />
                        <Text style={[estilos.nivelAgua, { color: getNivelAguaColor(item.nivelAgua) }]}>
                            Nível: {item.nivelAgua}
                        </Text>
                    </View>
                    
                    <View style={estilos.infoContainer}>
                        <View style={estilos.infoItem}>
                            <MaterialIcons name="cloud" size={20} color="#2196f3" />
                            <Text style={estilos.infoTexto}>{item.clima}</Text>
                        </View>
                        
                        <View style={estilos.infoItem}>
                            <MaterialIcons name="thermostat" size={20} color="#ff9800" />
                            <Text style={estilos.infoTexto}>{item.temperatura}</Text>
                        </View>
                        
                        <View style={estilos.infoItem}>
                            <MaterialIcons name="water-drop" size={20} color="#03a9f4" />
                            <Text style={estilos.infoTexto}>{item.umidade}</Text>
                        </View>
                        
                        <View style={estilos.infoItem}>
                            <MaterialIcons name="speed" size={20} color="#9c27b0" />
                            <Text style={estilos.infoTexto}>{item.pressao}</Text>
                        </View>
                    </View>
                    
                    <Text style={estilos.horario}>Atualizado: {item.horario}</Text>
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
        marginBottom: 16,
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
        alignItems: 'center',
        marginBottom: 12,
    },
    nivelAgua: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 8,
    },
    infoContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 12,
        marginBottom: 12,
    },
    infoItem: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        padding: 8,
        borderRadius: 6,
        flex: 1,
        minWidth: '45%',
    },
    infoTexto: {
        marginLeft: 8,
        color: '#424242',
    },
    horario: {
        fontSize: 12,
        color: '#9e9e9e',
        textAlign: 'right',
    },
});
