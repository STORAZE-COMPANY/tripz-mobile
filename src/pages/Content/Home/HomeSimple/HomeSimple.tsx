import React, { useEffect, useState } from 'react';
import { Image, ImageBackground, ScrollView, Text, TextStyle, TouchableOpacity, View } from 'react-native';
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
import ArrowRoute from '@mobile/assets/seta.svg';
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
import { getAllCities, getCommercesByCityId, getTouristPointsByCityId, getEventsByCityId, getAllCategories } from '@mobile/services/UserService';
import { RatingStars } from './CardLocais/RatingStars/RatingStars';
import PinSVG from '@mobile/assets/pinSVG.svg'
import FavButtonSVG from '@mobile/assets/FavButtonSVG.svg'
import { CityHeader } from './CityHeader/CityHeader';
import { SearchInput } from './SearchInput/SearchInput';
import { Svg, SvgUri } from 'react-native-svg';


const HomeSimple: React.FC = () => {
    const [cities, setCities] = useState<{ name: string; uf: string, id: string }[]>([]);
    const [selectedCity, setSelectedCity] = useState<{ name: string, id: string } | null>(null);
    const [selectedUF, setSelectedUF] = useState<string>('');
    const [activeTab, setActiveTab] = useState('Pontos Turisticos');
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [data, setData] = useState<any[]>([]);
    const [availableCategories, setAvailableCategories] = useState<string[]>([]);
    const nav = useNavigation();

    useEffect(() => {
        const fetchCities = async () => {
            try {
                const citiesData = await getAllCities();
                if (citiesData && citiesData.content) {
                    const cityList = citiesData.content.map(city => ({
                        name: city.name,
                        uf: city.state?.uf || '',
                        id: city.id
                    }));
                    setCities(cityList);
                    // Seleciona automaticamente a cidade 1
                    const city1 = cityList.find(city => city.id === '1');
                    if (city1) {
                        setSelectedCity({ name: city1.name, id: city1.id });
                        setSelectedUF(city1.uf);
                    }
                } else {
                    console.error('No cities data found:', citiesData);
                }
            } catch (error) {
                console.error('Error fetching cities:', error);
            }
        };
        fetchCities();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            if (selectedCity) {
                try {
                    let response;
                    switch (activeTab) {
                        case 'Pontos Turisticos':
                            response = await getTouristPointsByCityId(selectedCity.id);
                            break;
                        case 'Comércios':
                            response = await getCommercesByCityId(selectedCity.id);
                            break;
                        case 'Eventos':
                            response = await getEventsByCityId(selectedCity.id);
                            break;
                    }

                    if (response && response.content) {
                        console.log(`${activeTab} recebidos:`, response.content);
                        setData(response.content);
                    } else {
                        console.error(`Nenhum dado encontrado para a cidade: ${selectedCity.name}`);
                    }
                } catch (error) {
                    console.error(`Erro ao buscar ${activeTab.toLowerCase()}:`, error.response?.data || error.message);
                }
            }
        };
        fetchData();
    }, [selectedCity, activeTab]);

    const handleCitySelect = async (cityName: string) => {
        const city = cities.find(city => city.name === cityName);
        if (city) {
            setSelectedCity({ name: city.name, id: city.id });
            setSelectedUF(city.uf);
        } else {
            setSelectedCity(null);
            setSelectedUF('');
            setData([]);
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

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const categoriesData = await getAllCategories();
                if (categoriesData && categoriesData.content) {
                    setAvailableCategories(categoriesData.content);
                } else {
                    console.error('No categories data found:', categoriesData);
                }
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };
        fetchCategories();
    }, []);


    const backgroundStyle = {
        gradient1: lightTheme.colors.gradientBackgroundColorOne,
        gradient2: lightTheme.colors.gradientBackgroundColorTwo
    };

    const textStyles: TextStyle = {
        color: lightTheme.colors.primary,
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

    const renderItem = (item: any, index: number) => {
        // Extrair as URLs das imagens, assumindo que 'images' é uma string de URLs separadas por vírgulas
        const coverImage = item.coverImage;

        return (
            <Box backgroundColor='white' height={30} key={index} width={85} borderRadius={1} alignItems='center' marginHorizontal={1} left={1.5}>
                <Box>
                    <Image source={{ uri: coverImage }} style={{ width: 345, height: 140, borderRadius: 10, margin: 3 }} />
                    <Box position='absolute' justifyContent='center' alignItems='flex-end' width={80} right={1} top={1}>
                        <TouchableOpacity>
                            <FavButtonSVG />
                        </TouchableOpacity>
                    </Box>
                </Box>
                <Box pdHorizontal={0.5} justifyContent='flex-start' width={80}>
                    <Box flexDirection='row' justifyContent='space-between'>
                        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{item.name}</Text>
                        <Box left={1} flexDirection='row' justifyContent='flex-end'>
                            <Box marginRight={0.5}>
                                <Text>4</Text>
                            </Box>
                            <RatingStars rating={4} totalStars={5} />
                        </Box>
                    </Box>
                    <Box flexDirection='row' alignItems='center' right={0.5}>
                        <PinSVG width={20} height={20} />
                        <Text style={{ fontSize: 12, color: 'gray' }}>{item.address}</Text>
                    </Box>
                    <ScrollView horizontal showsHorizontalScrollIndicator={true}>
                        {availableCategories.map((category, index) => {
                            // console.log(category.icon); 
                            return (
                                <Box key={index} height={2} width={25} justifyContent='flex-start' backgroundColor='white' flexDirection='row' alignItems='center' borderRadius={0.1} elevation={1} marginRight={0.5}>
                                    <Image source={{ uri: category.icon }} style={{ width: 20, height: 20 }} />
                                    <SvgUri        
                                  
                                        uri={ category.icon }
                                    />
                                    <Text>{category.name}</Text>
                                    <TouchableOpacity onPress={() => handleCategoryRemove(category.name)}></TouchableOpacity>
                                </Box>
                            )
                        })}
                    </ScrollView>
                </Box>
                <Box alignItems='center' justifyContent='center'>
                    <ButtonDefault iconPosition="left" icon={<ArrowRoute width={20} height={20} />} text='Destacar Rota' color='white' height={5} width={80} onPress={() => nav.navigate('CustomMap')} />
                </Box>
            </Box>
        );
    };

    return (
        <Background {...backgroundStyle}>
            <CityHeader cityName={selectedCity} coverImage={selectedCity?.coverImage || img_city} />
            <SearchInput
                cities={cities}
                selectedCity={selectedCity}
                selectedUF={selectedUF}
                onCitySelect={handleCitySelect}
                onUFSelect={handleUFSelect}
            />
            <Box bottom={10} alignItems='center'>
                <Box width={90} height={19} elevation={5} backgroundColor='white' borderRadius={1}>
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
                    <Box flexDirection='row' justifyContent='space-between' width={90} alignItems='center'>
                        <Box zIndex={59685986956} elevation={1} top={1} pdHorizontal={2} width={80}>
                            <Input
                                type='dropdown'
                                options={availableCategories}
                                onSelect={handleCategorySelect}
                                value=""
                                placeholder='Categorias'
                            />
                        </Box>
                        <TouchableOpacity>
                            <Box backgroundColor='white' borderRadius={1} shadowBox marginTop={2} right={1} width={10} height={5} alignItems='center' justifyContent='center'>
                                {<SearchIcon width={20} height={20} />}
                            </Box>
                        </TouchableOpacity>
                    </Box>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        {selectedCategories.map((category, index) => (
                            <Box key={index} top={2} height={3.5} backgroundColor='white' flexDirection='row' alignItems='center' pdVertical={0.6} pdHorizontal={1.2} borderRadius={1} shadowBox marginRight={0.5}>
                                {categoryIcons[category]}
                                <Text style={textCategoryStyles}>{category}</Text>
                                <TouchableOpacity onPress={() => handleCategoryRemove(category)}>
                                    <Text style={{ marginLeft: 5, color: 'black' }}>x</Text>
                                </TouchableOpacity>
                            </Box>
                        ))}
                    </ScrollView>
                    <Box alignItems='center'>
                        <ButtonDefault text='Procurar' color='white' width={80} height={5} />
                    </Box>
                </Box>

                <ScrollView showsVerticalScrollIndicator>
                    <Box pdBottom={4} height={40}>
                        <Box pdVertical={1} width={87} flexDirection='row' justifyContent='space-between' left={3}>
                            <Text>Populares</Text>
                            <TouchableOpacity>
                                <Text>Ver todos</Text>
                            </TouchableOpacity>
                        </Box>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                            {data.map((item, index) => (
                                renderItem(item, index)
                            ))}
                        </ScrollView>
                    </Box>
                    <Box bottom={4} height={40}>
                        <Box width={87} flexDirection='row' justifyContent='space-between' left={3}>
                            <Text>Restaurantes</Text>
                            <TouchableOpacity>
                                <Text>Ver todos</Text>
                            </TouchableOpacity>
                        </Box>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                            {data.map((item, index) => (
                                renderItem(item, index)
                            ))}
                        </ScrollView>
                    </Box>
                </ScrollView>
            </Box>
        </Background>
    );
};

export { HomeSimple };
