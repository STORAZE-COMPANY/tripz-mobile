import React, { useEffect, useState } from 'react';
import { Image, ImageBackground, Text, TextStyle, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Background } from '@mobile/components/Background';
import { lightTheme } from '@mobile/theme';
import { Box } from '@mobile/components/Box';
import { MenuDrawner } from '@mobile/components/MenuDrawner/MenuDrawner';
import img_city from '@mobile/assets/cidadeexample.png';
import { Input } from '@mobile/components/Input';
import { latoTypography } from '@mobile/utils/typograph';
import SearchIcon from '@mobile/assets/searchSVG.svg';
import EstadioSVG from '@mobile/assets/estadiumSVG.svg';
import MonumentosSVG from '@mobile/assets/monumentosSVG.svg';
import PetSVG from '@mobile/assets/petSVG.svg';
import TrilhasSVG from '@mobile/assets/trilhasSVG.svg';
import AcessSVG from '@mobile/assets/acessibilidadeSVG.svg';
import ComercioSVG from '@mobile/assets/comercioSVG.svg';
import IgrejaSVG from '@mobile/assets/igrejaSVG.svg';
import ArLivreSVG from '@mobile/assets/arLivreSVG.svg';
import RoteirosSVG from '@mobile/assets/roteiroSVG.svg';
import { ButtonDefault } from '@mobile/components/ButtonDefault';
import Carousel from 'react-native-reanimated-carousel';
import Weather from '@mobile/components/MenuDrawner/ViewWeather/ViewWeather';
import { Picker } from '@react-native-picker/picker';
import { getAllCities } from '@mobile/services/UserService';

const HomeSimple: React.FC = () => {
    const [cities, setCities] = useState<{ name: string; uf: string }[]>([]);
    const [selectedCity, setSelectedCity] = useState<string | null>(null);
    const [selectedUF, setSelectedUF] = useState<string>('');
    const [activeTab, setActiveTab] = useState('Pontos Turisticos');
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const nav = useNavigation();

        useEffect(() => {
        const fetchCities = async () => {
            try {
                const citiesData = await getAllCities();
                if (citiesData && citiesData.content) {
                    const cityList = citiesData.content.map(city => ({
                        name: city.name,
                        uf: city.state?.uf || '' // Altere para a propriedade correta do estado
                    }));
                    setCities(cityList);
                } else {
                    console.error('No cities data found:', citiesData);
                }
            } catch (error) {
                console.error('Error fetching cities:', error);
            }
        };
 
        fetchCities();
    }, []);

    const handleCitySelect = (cityName: string) => {
        const city = cities.find(city => city.name === cityName);
        if (city) {
            setSelectedCity(city.name);
            setSelectedUF(city.uf);
        } else {
            setSelectedCity(null);
            setSelectedUF('');
        }
    };

    const handleUFSelect = (uf: string) => {
        setSelectedUF(uf);
    };

    const handleTabPress = (tab: string) => {
        setActiveTab(tab);
    };

    const handleCategorySelect = (category: string) => {
        if (!selectedCategories.includes(category)) {
            setSelectedCategories([...selectedCategories, category]);
        }
    };

    const handleCategoryRemove = (category: string) => {
        setSelectedCategories(selectedCategories.filter(cat => cat !== category));
    };

    const categoryIcons = {
        'Estádio': <EstadioSVG width={20} height={20} color={lightTheme.colors.primary} />,
        'Monumentos': <MonumentosSVG width={20} height={20} color={lightTheme.colors.primary} />,
        'Pet Friendly': <PetSVG width={20} height={20} color={lightTheme.colors.primary} />,
        'Trilhas': <TrilhasSVG width={20} height={20} color={lightTheme.colors.primary} />,
        'Acessibilidade': <AcessSVG width={20} height={20} color={lightTheme.colors.primary} />,
        'Comércio': <ComercioSVG width={20} height={20} color={lightTheme.colors.primary} />,
        'Igrejas': <IgrejaSVG width={20} height={20} color={lightTheme.colors.primary} />,
        'Ar Livre': <ArLivreSVG width={20} height={20} color={lightTheme.colors.primary} />,
        'Roteiros': <RoteirosSVG width={20} height={20} color={lightTheme.colors.primary} />,
    };

    const backgroundStyle = {
        gradient1: lightTheme.colors.gradientBackgroundColorOne,
        gradient2: lightTheme.colors.gradientBackgroundColorTwo
    };

    const textStyles: TextStyle = {
        color: lightTheme.colors.onBackground,
        fontWeight: latoTypography.fontWeightSemiBold.fontWeight,
    };

    const textCategoryStyles: TextStyle = {
        color: lightTheme.colors.onBackground,
        fontWeight: latoTypography.fontWeightSemiBold.fontWeight,
        paddingLeft: 3,
        fontSize: 12
    };

    const textDisableStyles: TextStyle = {
        color: lightTheme.colors.textDisable
    };

    const carouselItems = [
        {
            title: "Pedra Três Pontões",
            address: "Rua Afonso, Nº 33, Jardim Jordão - Afonso Cláudio - ES",
            image: require('@mobile/assets/pedra.png'), // substitua com a imagem real
            tags: ["Acessibilidade", "Pet Friendly", "Eventos", "Ar livre"]
        },
        {
            title: "Outro Local",
            address: "Endereço do Outro Local",
            image: require('@mobile/assets/cidadeexample.png'), // substitua com a imagem real
            tags: ["Acessibilidade", "Eventos"]
        },
    ];

    const renderCarouselItem = ({ item }) => (
        <Box backgroundColor='white' borderRadius={2} shadowColor="#000" alignItems='center' elevation={5} marginHorizontal={5} marginBottom={10}>
            <Image source={item.image} style={{ width: '98%', height: 150, borderRadius: 10, top: 2 }} />
            <Box pdHorizontal={2} pdVertical={0.8}>
                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{item.title}</Text>
                <Text style={{ fontSize: 12, color: 'gray' }}>{item.address}</Text>
                <Box flexDirection='row' flexWrap='wrap' marginTop={0.8}>
                    {item.tags.map((tag, index) => (
                        <Box key={index} backgroundColor='white' elevation={1} borderRadius={1} pdHorizontal={1} pdVertical={0.4} marginRight={0.2} marginBottom={2}>
                            <Text style={{ fontSize: 10 }}>{tag}</Text>
                        </Box>
                    ))}
                </Box>
            </Box>
            <Box alignItems='center' bottom={5} pdVertical={2}>
                <ButtonDefault text='Destacar Rota' color='white' width={80} height={5} />
            </Box>
        </Box>
    );

    return (
        <Background {...backgroundStyle}>
            <Box backgroundColor='rgba(47,65,158,0.5)' width={100} borderRadius={1} height={23}>
                <ImageBackground source={selectedCity?.coverImage || img_city} borderRadius={10} resizeMode='cover'>
                    <Box height={23}>
                        <Box flexDirection='row' top={2.5}>
                            <MenuDrawner cityName={selectedCity} />
                            {selectedCity && (
                                <Weather cityName={selectedCity} />
                            )}
                        </Box>
                    </Box>
                </ImageBackground>
            </Box>
            <Box flexDirection='row' pdHorizontal={2} bottom={12.5} alignItems='center' justifyContent='space-between' width={100} zIndex={100}>
                <Input
                    placeholder="Cidade"
                    dropdownOpacity={0.8}
                    type='dropdown'
                    width={68}
                    options={cities.map(city => city.name)}
                    onSelect={handleCitySelect}
                    value={selectedCity || ''}
                />
                <Input
                    placeholder="UF"
                    dropdownOpacity={0.8}
                    type='dropdown'
                    width={20}
                    options={[...new Set(cities.map(city => city.uf))]}
                    onSelect={handleUFSelect}
                    value={selectedUF}
                />
            </Box>
            <Box width={90} height={28} elevation={5} backgroundColor='white' borderRadius={1} bottom={10}>
                <Box flexDirection='row'>
                    <TouchableOpacity onPress={() => handleTabPress('Pontos Turisticos')} style={{ flex: activeTab === 'Pontos Turisticos' ? 3 : 3 }}>
                        <Box alignItems='center' borderColor={activeTab === 'Pontos Turisticos' ? lightTheme.colors.primary : 'transparent'} borderBottomWidth={activeTab === 'Pontos Turisticos' ? 0.45 : 0} pdVertical={1}>
                            <Text style={activeTab === 'Pontos Turisticos' ? textStyles : textDisableStyles}>Pontos Turísticos</Text>
                        </Box>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleTabPress('Comércios')} style={{ flex: activeTab === 'Comércios' ? 2 : 2 }}>
                        <Box alignItems='center' borderColor={activeTab === 'Comércios' ? lightTheme.colors.primary : 'transparent'} borderBottomWidth={activeTab === 'Comércios' ? 0.45 : 0} pdVertical={1}>
                            <Text style={activeTab === 'Comércios' ? textStyles : textDisableStyles}>Comércios</Text>
                        </Box>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleTabPress('Eventos')} style={{ flex: activeTab === 'Eventos' ? 2 : 2 }}>
                        <Box alignItems='center' borderColor={activeTab === 'Eventos' ? lightTheme.colors.primary : 'transparent'} borderBottomWidth={activeTab === 'Eventos' ? 0.45 : 0} pdVertical={1}>
                            <Text style={activeTab === 'Eventos' ? textStyles : textDisableStyles}>Eventos</Text>
                        </Box>
                    </TouchableOpacity>
                </Box>
                <Box flexDirection='row' justifyContent='space-between' width={90}  >
                    <Box elevation={1} top={1} pdHorizontal={2} width={60}>
                        <Picker
                            itemStyle={{ borderRadius: 5, borderColor: 'black', borderWidth: 2 }}
                            mode='dropdown'
                            selectedValue={selectedCategories}
                            onValueChange={(itemValue) => handleCategorySelect(itemValue)}>
                            <Picker.Item label="Estádios" value="Estádio" />
                            <Picker.Item label="Monumentos" value="Monumentos" />
                            <Picker.Item label="Pet Friendly" value="Pet Friendly" />
                            <Picker.Item label="Trilhas" value="Trilhas" />
                            <Picker.Item label="Acessibilidade" value="Acessibilidade" />
                            <Picker.Item label="Comércio" value="Comércio" />
                            <Picker.Item label="Igrejas" value="Igrejas" />
                            <Picker.Item label="Ar Livre" value="Ar Livre" />
                            <Picker.Item label="Roteiros" value="Roteiros" />
                        </Picker>
                    </Box>
                 
                        <Input  type='text' textAlign='center'width={14} iconComponent={<SearchIcon width={20} height={20}/>} />
                    
                </Box>
                <Box flexDirection='row' flexWrap='wrap' marginTop={3} pdHorizontal={1.2}>
                    {selectedCategories.map((category, index) => (
                        <Box key={index} backgroundColor='white' flexDirection='row' alignItems='center' pdVertical={0.6} pdHorizontal={1.2} borderRadius={1} elevation={0.5} marginRight={0.5}>
                            {categoryIcons[category]}
                            <Text style={textCategoryStyles}>{category}</Text>
                            <TouchableOpacity onPress={() => handleCategoryRemove(category)}>
                                <Text style={{ marginLeft: 5, color: 'black' }}>x</Text>
                            </TouchableOpacity>
                        </Box>
                    ))}
                </Box>
                <Box alignItems='center'>
                    <ButtonDefault text='Pesquisar' color='white' width={80} height={5} />
                </Box>
            </Box>
            <Box width={87} flexDirection='row' bottom={8} justifyContent='space-between'>
                <Text>Populares</Text>
                <TouchableOpacity>
                    <Text>Ver todos</Text>
                </TouchableOpacity>
            </Box>
            <Box width={90} height={30} bottom={7} alignItems='center'>
                <Carousel
                    data={carouselItems}
                    renderItem={renderCarouselItem}
                    width={450}
                    height={300}
                    loop={false}
                />
            </Box>
        </Background>
    );
};

export { HomeSimple };
