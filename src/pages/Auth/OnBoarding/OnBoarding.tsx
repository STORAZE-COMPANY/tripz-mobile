import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const OnBoarding = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bem-vindo ao nosso app!</Text>
            <Text style={styles.subtitle}>Faça parte da nossa comunidade.</Text>
            {/* Adicione aqui os componentes adicionais para a tela de onboarding */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    subtitle: {
        fontSize: 16,
        marginBottom: 8,
    },
});

export default OnBoarding;