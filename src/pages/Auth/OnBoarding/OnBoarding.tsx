import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Dimensions, StyleSheet, TouchableOpacity, Alert, Platform } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import PassaportSvg from '../../../../assets/passaport.svg';
import PeoplesSVG from '../../../../assets/peoples.svg';
import PeoplesMapsSVG from '../../../../assets/peoplesMap.svg';
import LogoSVG from '../../../../assets/logoOn.svg';
import { MaterialIcons } from '@expo/vector-icons';

import { useNavigation, CommonActions } from '@react-navigation/native';
import { request, PERMISSIONS, RESULTS } from 'react-native-permissions';
import * as Location from 'expo-location';

import { t } from 'i18next';
import { styles } from './styles';
import { Box } from '@mobile/components/Box';
import { Background } from '@mobile/components/Background';
import { useWindow } from '@mobile/hooks/windowHook';



const OnBoarding: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const carouselRef = useRef<Carousel<any>>(null);
    const navigation = useNavigation();
    const [location, setLocation] = useState<Location.LocationObject | null>(null);
    const [errorMsg, setErrorMsg] = useState<string | null>(null);
const {width} = useWindow()
    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg(t('PAGES.AUTH.ONBOARDING.ERROR'));
                return;
            }
            try {
                let location = await Location.getCurrentPositionAsync({});
                setLocation(location);

                let locationSubscription = await Location.watchPositionAsync({}, (newLocation) => {
                    setLocation(newLocation);
                });

                return () => {
                    if (locationSubscription) {
                        locationSubscription.remove();
                    }
                };
            } catch (error) {
                setErrorMsg(t('PAGES.AUTH.ONBOARDING.ERRORTWO'));
                console.error(error);
            }
        })();
    }, []);

    const data = [
        {
            id: 1,
            title: t('PAGES.AUTH.ONBOARDING.CAROUSEL.PAGE.ONE.TITLE'),
            subtitle: t('PAGES.AUTH.ONBOARDING.CAROUSEL.PAGE.ONE.SUBTITLE'),
            image: <PassaportSvg width={250} height={230} />,
        },
        {
            id: 2,
            title: t('PAGES.AUTH.ONBOARDING.CAROUSEL.PAGE.TWO.TITLE'),
            subtitle: t('PAGES.AUTH.ONBOARDING.CAROUSEL.PAGE.TWO.SUBTITLE'),
            subtitleRemember: t('PAGES.AUTH.ONBOARDING.CAROUSEL.PAGE.TWO.REMEMBER'),
            textRemember: t('PAGES.AUTH.ONBOARDING.CAROUSEL.PAGE.TWO.REMEMBERTEXT'),
            image: <PeoplesSVG width={300} height={184} />,
        },
        {
            id: 3,
            title: t('PAGES.AUTH.ONBOARDING.CAROUSEL.PAGE.THREE.TITLE'),
            subtitle: t('PAGES.AUTH.ONBOARDING.CAROUSEL.PAGE.THREE.SUBTITLE'),
            subtitleRemember: t('PAGES.AUTH.ONBOARDING.CAROUSEL.PAGE.THREE.REMEMBER'),
            textRemember: t('PAGES.AUTH.ONBOARDING.CAROUSEL.PAGE.THREE.REMEMBERTEXT'),
            image: <PeoplesMapsSVG width={250} height={240} />,
        },
    ];

    const renderItem = ({ item }: { item: any }) => (
        <Box flex={1} alignItems='center' justifyContent='center'  pdHorizontal={2}>
            {item.image}
          
                <Text style={styles.text}>{item.title}</Text>
                <Text style={styles.subtitle}>{item.subtitle}</Text>
                <Box flexDirection='row' justifyContent='center'>
                    <Text style={styles.subtitleRemember}>{item.subtitleRemember}</Text>
                    <Text style={styles.textRemember}>{item.textRemember}</Text>

                </Box>
                {item.id === 3 && (
                    <TouchableOpacity style={styles.locationButton} onPress={handleLocationPermission}>
                        <Text style={styles.locationButtonText}>Ativar</Text>
                    </TouchableOpacity>
                )}

          


        </Box>
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

            navigation.dispatch(CommonActions.reset({
                index: 0,
                routes: [{ name: 'Login' }]
            }));
        } else if (result === RESULTS.DENIED) {
            Alert.alert(t('PAGES.AUTH.ONBOARDING.ALERT.DENIED'));
        } else if (result === RESULTS.BLOCKED) {
            Alert.alert(t('PAGES.AUTH.ONBOARDING.ALERT.BLOCKED'));
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

export { OnBoarding };
