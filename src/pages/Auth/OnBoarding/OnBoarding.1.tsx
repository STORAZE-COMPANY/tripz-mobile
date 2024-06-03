import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Dimensions, StyleSheet, TouchableOpacity, Alert, Platform } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import PassaportSvg from '../../../../assets/passaport.svg';
import PeoplesSVG from '../../../../assets/peoples.svg';
import PeoplesMapsSVG from '../../../../assets/peoplesMap.svg';
import LogoSVG from '../../../../assets/logoOn.svg';
import { MaterialIcons } from '@expo/vector-icons';
import Background from '../../../components/Background/Background';
import Box from '../../../components/Box/Box';
import { useNavigation, CommonActions } from '@react-navigation/native';
import { check, request, PERMISSIONS, RESULTS } from 'react-native-permissions';
import * as Location from 'expo-location';

const { width } = Dimensions.get('window');

const OnBoarding: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const carouselRef = useRef<Carousel <any>>(null);
    const navigation = useNavigation();
    const [location, setLocation] = useState<Location.LocationObject | null>(null);
    const [errorMsg, setErrorMsg] = useState<string | null>(null);

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }
            try {
                let location = await Location.getCurrentPositionAsync({});
                setLocation(location);
                // Inicia a atualização da localização em tempo real
                let locationSubscription = await Location.watchPositionAsync({}, (newLocation) => {
                    setLocation(newLocation);
                });
                // Certifique-se de cancelar a assinatura quando o componente for desmontado
                return () => {
                    if (locationSubscription) {
                        locationSubscription.remove();
                    }
                };
            } catch (error) {
                setErrorMsg('Error fetching location');
                console.error(error);
            }
        })();
    }, []);

    const data = [
        {
            id: 1,
            title: 'Bem-vindo ao Seu Novo Guia de Viagens!',
            subtitle: 'Descubra experiências incríveis e personalize sua jornada dos sonhos. Vamos iniciar sua aventura?',
            image: <PassaportSvg width={250} height={230} />,
        },
        {
            id: 2,
            title: 'Visite os melhores Pontos Turísticos',
            subtitle: 'Nós coletamos informações que nos ajudam a entender quais locais você gostaria de visitar, assim conseguiremos manter uma melhor comunicação. Para isso, permita o rastreamento na tela seguinte. 🔎 Lembre-se: você poderá mudar essa configuração quando quiser!',
            image: <PeoplesSVG width={300} height={184} />,
        },
        {
            id: 3,
            title: 'Ative sua localização',
            subtitle: 'Para que nosso app possa funcionar, permita o uso da sua localização por GPS 🌎 Assim, fica mais fácil buscar pontos turísticos, atividades e comércios credenciados próximos a você. Lembre-se: você poderá alterar essa opção mais tarde nas Configurações do app.',
            image: <PeoplesMapsSVG width={250} height={240} />,
        },
    ];

    const renderItem = ({ item }: { item: any }) => (
        <View style={styles.slide}>
            {item.image}
            <Box top={20}>
                <Text style={styles.text}>{item.title}</Text>
                <Text style={styles.subtitle}>{item.subtitle}</Text>
                {item.id === 3 && (
                    <TouchableOpacity style={styles.locationButton} onPress={handleLocationPermission}>
                        <Text style={styles.locationButtonText}>Permitir Localização</Text>
                    </TouchableOpacity>
                )}
            </Box>
        </View>
    );

    const renderIndicators = () => {
        return (
            <View style={styles.indicatorContainer}>
                {data.map((_, index) => (
                    <View
                        key={index}
                        style={[
                            styles.indicator,
                            index === currentIndex ? styles.activeIndicator : styles.inactiveIndicator
                        ]}
                    />
                ))}
            </View>
        );
    };

    const handleSkip = () => {
        const lastIndex = data.length - 1;
        setCurrentIndex(lastIndex);
        if (carouselRef.current) {
            carouselRef.current.scrollTo({ index: lastIndex, animated: true });
        }
    };

    const handleNext = () => {
        if (currentIndex < data.length - 1) {
            const nextIndex = currentIndex + 1;
            setCurrentIndex(nextIndex);
            if (carouselRef.current) {
                carouselRef.current.scrollTo({ index: nextIndex, animated: true });
            }
        }
    };

    const handleLocationPermission = async () => {
        const permission =
            Platform.OS === 'ios' ? PERMISSIONS.IOS.LOCATION_WHEN_IN_USE : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION;
            
        const result = await request(permission);

        if (result === RESULTS.GRANTED) {
            // Navigate to the Login screen
            navigation.dispatch(CommonActions.reset({
                index: 0,
                routes: [{ name: 'Login' }]
            }));
        } else if (result === RESULTS.DENIED) {
            Alert.alert('Permissão Negada', 'Por favor, permita o acesso à localização para continuar.');
        } else if (result === RESULTS.BLOCKED) {
            Alert.alert(
                'Permissão Bloqueada',
                'Por favor, ative a permissão de localização nas configurações do dispositivo.'
            );
        }
    };

    return (
        <Background>
            <Box>
                <LogoSVG width={150} height={150} />
            </Box>
            <Carousel
                ref={carouselRef}
                data={data}
                renderItem={renderItem}
                width={width}
                onSnapToItem={(index) => setCurrentIndex(index)}
                pagingEnabled
            />
            <View style={styles.footer}>
                <TouchableOpacity onPress={handleSkip}>
                    <Text style={[styles.skipButton, currentIndex === data.length - 1 && styles.disabledText]}>Pular</Text>
                </TouchableOpacity>
                {renderIndicators()}
                <TouchableOpacity 
                    onPress={handleNext} 
                    style={[styles.nextButton, currentIndex === data.length - 1 && styles.disabledNextButton]} 
                    disabled={currentIndex === data.length - 1}
                >
                    <MaterialIcons name="arrow-forward-ios" size={24} color="white" />
                </TouchableOpacity>
            </View>
        </Background>
    );
};

const styles = StyleSheet.create({
    slide: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
    },
    text: {
        fontSize: 44,
        fontWeight: 'bold',
        marginTop: 20,
        textAlign: 'center',
        paddingHorizontal: 28,
    },
    subtitle: {
        fontSize: 16,
        marginTop: 10,
        textAlign: 'center',
        color: '#555',
        paddingHorizontal: 20,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10,
        width: '100%',
    },
    skipButton: {
        color: '#2F419E',
        fontSize: 16,
    },
    nextButton: {
        backgroundColor: '#2F419E',
        borderRadius: 10,
        padding: 10,
    },
    indicatorContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    indicator: {
        width: 45,
        height: 2,
        borderRadius: 2,
        marginHorizontal: 5,
    },
    activeIndicator: {
        backgroundColor: '#2F419E',
    },
    inactiveIndicator: {
        backgroundColor: 'gray',
    },
    locationButton: {
        marginTop: 20,
        backgroundColor: '#2F419E',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        alignItems: 'center',
    },
    locationButtonText: {
        color: 'white',
        fontSize: 16,
    },
    disabledText: {
        color: 'gray',
    },
    disabledNextButton: {
        backgroundColor: 'gray',
    },
});

export default OnBoarding;
