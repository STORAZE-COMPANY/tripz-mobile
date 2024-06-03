import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

import Box from '../../../components/Box/Box';
import Background from '../../../components/Background/Background';
import PassportSVG from '../../../../assets/passaport.svg';
import LogoSVG from '../../../../assets/logoOn.svg';

const OnBoarding = () => {

    const data = [
    ]
    return (
        <Background>
            <Box>
            <LogoSVG width={150} height={150} />
            </Box>
            <Box>
               <PassportSVG width={200} height={200} />
                <Text style={styles.title}>Bem-vindo ao Seu Novo Guia de Viagens!</Text>
                <Text style={styles.subtitle}>
                    Descubra experiências incríveis e personalize sua jornada dos sonhos. Vamos iniciar sua aventura?
                </Text>
            </Box>

            <Box>
                <TouchableOpacity style={styles.pular} >
                    <Text>Pular</Text>
                </TouchableOpacity>
            </Box>
        </Background>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 150,
        height: 150,
        resizeMode: 'contain',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000',
        textAlign: 'center',
        marginVertical: 20,
    },
    subtitle: {
        fontSize: 16,
        color: '#555',
        textAlign: 'center',
        paddingHorizontal: 20,
    },
    pular: {
        color:'blue',
        borderRadius: 8,
        paddingVertical: 8,
        paddingHorizontal: 16,
        marginTop: 16,
        justifyContent:'flex-start',
        alignItems: 'flex-start',
        
    }
});

export default OnBoarding;