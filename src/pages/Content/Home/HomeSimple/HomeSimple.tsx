import React, { useEffect, useState } from 'react';
import { FlatList, Image, ImageBackground, ScrollView, Text, TextStyle, TouchableOpacity, useColorScheme, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Background } from '@mobile/components/Background';
import { lightTheme } from '@mobile/theme';
import { Box } from '@mobile/components/Box';
import img_city from '@mobile/assets/cidadeexample.png';
import { Input } from '@mobile/components/Input';
import { latoTypography } from '@mobile/utils/typograph';
import SearchIcon from '@mobile/assets/searchSVG.svg';
import ArrowRoute from '@mobile/assets/seta.svg';
import { ButtonDefault } from '@mobile/components/ButtonDefault';
import { getAllCities, getCommercesByCityId, getTouristPointsByCityId, getEventsByCityId, getAllCategories } from '@mobile/services/UserService';
import { RatingStars } from './CardLocais/RatingStars/RatingStars';
import PinSVG from '@mobile/assets/pinSVG.svg'
import FavButtonSVG from '@mobile/assets/FavButtonSVG.svg'
import { CityHeader } from './CityHeader/CityHeader';
import { SearchInput } from './SearchInput/SearchInput';
import { Svg, SvgUri } from 'react-native-svg';
import { MultiSelect } from 'react-native-element-dropdown';
import { styles } from './stylesDropdown';
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import SectionedMultiSelect from 'react-native-sectioned-multi-select';
import { MultipleSelectList } from 'react-native-dropdown-select-list'
import { scale } from '@mobile/utils/resize';


const HomeSimple: React.FC = () => {
    const [cities, setCities] = useState<{ name: string; uf: string, id: string }[]>([]);
    const [selectedCity, setSelectedCity] = useState<{ name: string, id: string } | null>(null);
    const [selectedUF, setSelectedUF] = useState<string>('');
    const [activeTab, setActiveTab] = useState('Pontos Turisticos');
    const [selectedCategories, setSelectedCategories] = useState<{ label: string, value: string }[]>([]);
    const [data, setData] = useState<any[]>([]);
    const [availableCategories, setAvailableCategories] = useState<{ label: string, value: string }[]>([]);
    const initialBoxHeight = 147; // Altura inicial da caixa
    const [boxHeight, setBoxHeight] = useState(initialBoxHeight);
    const initialBottomButon = 8; // Altura inicial da caixa
    const [bottomButton, setBottomButton] = useState(initialBottomButon)


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

                    // Seleciona automaticamente a cidade com ID 1
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
                    const formattedCategories = categoriesData.content.map(category => ({
                        label: category.name,
                        value: category.name, // ou outro identificador único
                        icon: category.icon
                    }));
                    setAvailableCategories(formattedCategories);
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

    useEffect(() => {
        if (selectedCategories.length > 0) {
            setBoxHeight(147 + 35); // Aumenta a altura quando há categorias selecionadas
            setBottomButton(5);
        } else {
            setBoxHeight(147); // Retorna ao tamanho inicial quando não há categorias
            setBottomButton(8)
        }
    }, [selectedCategories]);

    const renderItem = (item, index) => {
        const coverImage = item.coverImage;
    
        return (
            <Box backgroundColor='white' shadowBox height={267} key={item.id} width={325} borderRadius={8} alignItems='center' marginHorizontal={7} left={12} bottom={1}>
                <Box>
                    <Image source={{ uri: coverImage }} style={{ width: scale(325), height: scale(144), borderRadius: scale(8), margin: 3 }} />
                    <Box position='absolute' justifyContent='center' alignItems='flex-end' width={80} right={9} top={4}>
                        <TouchableOpacity>
                            <FavButtonSVG />
                        </TouchableOpacity>
                    </Box>
                </Box>
                <Box pdHorizontal={0.5} justifyContent='flex-start' width={300} >
                    <Box flexDirection='row' justifyContent='space-between'>
                        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{item.name}</Text>
                        <Box left={7} flexDirection='row' justifyContent='flex-end'>
                            <Box marginRight={2}>
                                <Text style={{ color: '#5E5E5E' }}>4</Text>
                            </Box>
                            <RatingStars rating={4} totalStars={5} />
                        </Box>
                    </Box>
                    <Box flexDirection='row' alignItems='center' right={0.5}>
                        <PinSVG width={20} height={20} />
                        <Text style={{ fontSize: 10 }}>{item.address}</Text>
                    </Box>
                    <ScrollView horizontal showsHorizontalScrollIndicator={true}>
                        {availableCategories.map((category, index) => (
                            <Box justifyContent='space-evenly' alignItems='center' height={35} key={index}>
                                <Box left={3} height={20} backgroundColor='white' pdHorizontal={15} justifyContent='flex-start' flexDirection='row' alignItems='center' borderRadius={4} elevation={1} marginRight={4}>
                                    <SvgUri uri={category.icon} stroke='red' strokeOpacity='100%' style={{ marginLeft: -6, marginRight: 4, right: 5 }} />
                                    <Text style={{ color: '#2D3370', justifyContent: 'flex-end', left: 5 }}>{category.label}</Text>
                                </Box>
                            </Box>
                        ))}
                    </ScrollView>
                </Box>
                <Box alignItems='center' bottom={7} justifyContent='center'>
                    <ButtonDefault
                        iconPosition="left"
                        icon={<ArrowRoute width={20} height={20} />}
                        borderRadius={8}
                        text='Destacar Rota'
                        color='white'
                        height={40}
                        width={303}
                        onPress={() => nav.navigate('DetalhesLocal', { item,  cityId: selectedCity.id, itemID:item.id  })}
                    />
                </Box>
            </Box>
        );
    };
    

    const renderItem1 = (category) => {
        const isSelected = selectedCategories.some(selectedCategory => selectedCategory.value === category.value);
        return (
            <Box flexDirection='row' alignItems='center'>
                {isSelected && (
                    <>
                        <Feather style={styles.icon} color="#2F419E" name="check" size={15} />
                        <Text style={styles.itemTextSelectedStyle}>{category.label}</Text>
                    </>
                )}
                {!isSelected && (
                    <Text style={styles.itemTextStyle}>{category.label}</Text>
                )}
            </Box>
        );
    };

    const renderSelectedItem1 = () => {
        if (selectedCategories.length > 0) {
            return (
                <FlatList
                    data={selectedCategories}
                    keyExtractor={(item) => item.value}
                    renderItem={({ item }) => (
                        <View style={styles.selectedStyle}>
                            {item.icon && (
                                <Svg
                                    uri={item.icon}
                                    style={{ width: 20, height: 20, right:6 }}
                                    
                                />
                            )}
                            <Text style={styles.selectedTextStyle}>
                                {item.label}
                            </Text>
                            <TouchableOpacity onPress={() => handleCategoryRemove(item)}>
                                <Feather style={{ top: scale(1), justifyContent: 'flex-end', color: 'gray', left:7 }} color="gray" name="x" size={12} />
                            </TouchableOpacity>
                        </View>
                    )}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                />
            );
        }

        return null;
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

            <Box width={330} height={boxHeight} elevation={5} backgroundColor='white' borderRadius={8} bottom={75} >
                <Box flexDirection='row'>
                    <TouchableOpacity onPress={() => handleTabPress('Pontos Turisticos')} style={{ flex: activeTab === 'Pontos Turisticos' ? 3 : 3 }}>
                        <Box alignItems='center' borderColor={activeTab === 'Pontos Turisticos' ? lightTheme.colors.primary : 'transparent'} borderBottomWidth={activeTab === 'Pontos Turisticos' ? 1.5 : 0} pdVertical={7}>
                            <Text style={activeTab === 'Pontos Turisticos' ? textStyles : textDisableStyles}>Pontos Turísticos</Text>
                        </Box>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleTabPress('Comércios')} style={{ flex: activeTab === 'Comércios' ? 2 : 2 }}>
                        <Box alignItems='center' borderColor={activeTab === 'Comércios' ? lightTheme.colors.primary : 'transparent'} borderBottomWidth={activeTab === 'Comércios' ? 1.5 : 0} pdVertical={7}>
                            <Text style={activeTab === 'Comércios' ? textStyles : textDisableStyles}>Comércios</Text>
                        </Box>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleTabPress('Eventos')} style={{ flex: activeTab === 'Eventos' ? 2 : 2 }}>
                        <Box alignItems='center' borderColor={activeTab === 'Eventos' ? lightTheme.colors.primary : 'transparent'} borderBottomWidth={activeTab === 'Eventos' ? 1.5 : 0} pdVertical={7}>
                            <Text style={activeTab === 'Eventos' ? textStyles : textDisableStyles}>Eventos</Text>
                        </Box>
                    </TouchableOpacity>
                </Box>
                <Box flexDirection="row" style={{ width: '100%' }} justifyContent='center' pdHorizontal={9} >
                    <Box flex={1} pdVertical={14} >
                        <MultiSelect
                            style={styles.dropdown}
                            placeholderStyle={styles.placeholderStyle}
                            selectedTextStyle={styles.selectedTextStyle}
                            itemContainerStyle={styles.itemContainerStyle}
                            inputSearchStyle={styles.inputSearchStyle}
                            iconStyle={styles.iconStyle}
                            data={availableCategories}
                            labelField="label"
                            valueField="value"
                            placeholder="Categorias"
                            value={selectedCategories.map(category => category.value)}
                            onChange={selectedValues => {
                                // Mapeia os valores selecionados para os objetos completos da categoria
                                const selectedCategories = selectedValues.map(value =>
                                    availableCategories.find(category => category.value === value)
                                );

                                setSelectedCategories(selectedCategories);

                            }}
                            renderItem={renderItem1}
                            selectedStyle={styles.selectedStyle}
                            containerStyle={styles.containerStyles}
                            selectedTextProps={{ numberOfLines: 1, ellipsizeMode: 'tail' }}
                            activeColor="transparent"
                            maxHeight={200}

                            visibleSelectedItem={false}


                        />

                        {renderSelectedItem1()}
                    </Box>
                    <TouchableOpacity >
                        <Box backgroundColor='white' position='absolute' top={scale(12)} alignSelf='flex-end' borderRadius={8} shadowBox width={36} height={36} alignItems='center' justifyContent='center'>
                            {<SearchIcon width={20} height={20} />}
                        </Box>
                    </TouchableOpacity>

                </Box>

                <Box alignItems='center' justifyContent='flex-end' bottom={bottomButton} >
                    <ButtonDefault text='Procurar' borderRadius={8} color='white' width={315} height={40} />
                </Box>
            </Box>

            <ScrollView style={{ flex: 1, marginTop: scale(-60), bottom: 2 }} showsVerticalScrollIndicator={true}>

                <Box flexDirection='row' alignItems='center' justifyContent='space-between' pdHorizontal={10}>
                    <Text style={{ fontFamily: 'Lato', fontSize: 16, fontWeight: 'bold' }}>Populares</Text>
                    <TouchableOpacity>
                        <Text style={{ fontFamily: 'Poppins', fontSize: 12, fontWeight: 'regular', color: '#5E5E5E' }}>Ver todos</Text>
                    </TouchableOpacity>
                </Box>

                <ScrollView style={{ flex: 1, right: 10 }} horizontal showsHorizontalScrollIndicator={false}>

                    {data.map((item, index) => (
                        renderItem(item, index)
                    ))}
                </ScrollView>

                <Box height={15}></Box>
                <Box flexDirection='row' alignItems='center' justifyContent='space-between' pdHorizontal={10}>
                    <Text style={{ fontFamily: 'Lato', fontSize: 16, fontWeight: 'bold' }}>Restaurantes</Text>
                    <TouchableOpacity>
                        <Text style={{ fontFamily: 'Poppins', fontSize: 12, fontWeight: 'regular', color: '#5E5E5E' }}>Ver todos</Text>
                    </TouchableOpacity>
                </Box>
                <ScrollView style={{ flex: 1, right: 10 }} horizontal showsHorizontalScrollIndicator={false}>
                    {data.map((item, index) => (
                        renderItem(item, index)
                    ))}
                </ScrollView>

            </ScrollView>

        </Background>
    );
};

export { HomeSimple };
