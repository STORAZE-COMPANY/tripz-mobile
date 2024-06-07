import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, Alert, Platform} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import PassaportSvg from '@mobile/assets/passaport.svg';
import PeoplesSVG from '@mobile/assets/peoples.svg';
import PeoplesMapsSVG from '@mobile/assets/peoplesMap.svg';
import LogoSVG from '@mobile/assets/logoOn.svg';
import { MaterialIcons } from '@expo/vector-icons';

import { useNavigation, CommonActions } from '@react-navigation/native';
import { request, PERMISSIONS, RESULTS } from 'react-native-permissions';
import * as Location from 'expo-location';

import { t } from 'i18next';
import { styles } from './styles';
import { Box } from '@mobile/components/Box';
import { Background } from '@mobile/components/Background';
import { useWindow } from '@mobile/hooks/windowHook';
import { lightTheme } from '@mobile/theme';
import { ButtonDefault } from '@mobile/components/ButtonDefault';



const OnBoarding: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const carouselRef = useRef<Carousel<any>>(null);
    const navigation = useNavigation();
    const [location, setLocation] = useState<Location.LocationObject | null>(null);
    const [errorMsg, setErrorMsg] = useState<string | null>(null);
    const { width } = useWindow()

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
            textRemember2: t('PAGES.AUTH.ONBOARDING.CAROUSEL.PAGE.TWO.REMEMBERTEXT2'),
            image: <PeoplesSVG width={300} height={184} />,
        },
        {
            id: 3,
            title: t('PAGES.AUTH.ONBOARDING.CAROUSEL.PAGE.THREE.TITLE'),
            subtitle: t('PAGES.AUTH.ONBOARDING.CAROUSEL.PAGE.THREE.SUBTITLE'),
            subtitleRemember: t('PAGES.AUTH.ONBOARDING.CAROUSEL.PAGE.THREE.REMEMBER'),
            textRemember: t('PAGES.AUTH.ONBOARDING.CAROUSEL.PAGE.THREE.REMEMBERTEXT'),
            textRemember2: t('PAGES.AUTH.ONBOARDING.CAROUSEL.PAGE.THREE.REMEMBERTEXT2'),
            image: <PeoplesMapsSVG width={250} height={240} />,
        },
    ];

    const renderItem = ({ item }: { item: any }) => (
        <Box flex={1} alignItems='center' justifyContent='center' pdHorizontal={1} top={4.5}>
            
            {item.image}
            <Box top={2}>
                <Box pdHorizontal={4} marginTop={1} top={6}>
                    <Text style={styles.text}>{item.title}</Text>
                </Box>
                <Box pdTop={2.2} top={5} marginTop={2} pdHorizontal={3} alignItems='center' alignSelf='center'>
                    <Text style={styles.subtitle}>{item.subtitle}</Text>
                </Box>
                <Box flexDirection='row' justifyContent='center' alignSelf='center' top={5}>
                    <Text style={styles.subtitleRemember}>{item.subtitleRemember}</Text>
                    <Text style={styles.textRemember}>{item.textRemember}</Text>
                </Box>
                <Box top={4.2}>
                    <Text style={styles.textRemember2}>{item.textRemember2}</Text>
                </Box>
            </Box>
            {item.id === 3 && (
                <ButtonDefault
                    top={12}
                    text={t('PAGES.AUTH.ONBOARDING.CAROUSEL.PAGE.THREE.BUTTONS.ALLOW')}
                    onPress={handleLocationPermission}
                    width={90}
                    height={5}
                    color={lightTheme.colors.secondary}
                ></ButtonDefault>
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

    const isDisabled = currentIndex === data.length - 1;

    const isDisabledFunction = isDisabled ? (
        <MaterialIcons name="arrow-forward-ios" size={24} color={lightTheme.colors.disableText} />
    ) : (
        <MaterialIcons name="arrow-forward-ios" size={24} color="white" />
    );

    const backgroundStyle = {
        gradient1: lightTheme.colors.backgroundColorTwo,
        gradient2: lightTheme.colors.backgroundColorOne,
    };

    const getNextButtonStyles = () => {
        return [

            styles.nextButton,
            currentIndex === data.length - 1 && styles.disabledNextButton
        ];
    };

    const getSkipTextStyles = () => {
        return [styles.skipButton, currentIndex === data.length - 1 && styles.disabledText]

    };
    return (
        <Background {...backgroundStyle}>
            <Box width={0} height={1}>
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
            <Box flexDirection='row' alignItems='center' justifyContent='space-between' width={100} pdHorizontal={2} bottom={2}>
                <TouchableOpacity onPress={handleSkip}>
                    <Text style={getSkipTextStyles()}>
                        {t('PAGES.AUTH.ONBOARDING.CAROUSEL.PAGE.THREE.BUTTONS.SKIP')}
                    </Text>
                </TouchableOpacity>
                {renderIndicators()}
                <Box >
                    <TouchableOpacity
                        onPress={handleNext}
                        style={getNextButtonStyles()}
                        disabled={isDisabled}
                    >
                        {isDisabledFunction}

                    </TouchableOpacity>
                </Box>
            </Box>
        </Background>
    );
};

export { OnBoarding };
