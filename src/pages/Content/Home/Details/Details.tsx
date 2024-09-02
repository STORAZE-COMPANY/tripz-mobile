import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import { Modal, SafeAreaView } from 'react-native';
import { Ionicons, FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { getTourGuidesByCityId } from '@mobile/services/UserService';
import { Box } from '@mobile/components/Box';
import Arrow from '@mobile/assets/shape.svg';
import imageGuideBackground from '@mobile/assets/backgroundGuide.png'
import { scale } from '@mobile/utils/resize';
import { lightTheme } from '@mobile/theme';
import Phone from '@mobile/assets/phone.svg'
import Whatsapp from '@mobile/assets/whatsapp.svg'
import Mail from '@mobile/assets/mail.svg'
import PinLocal from '@mobile/assets/localPin.svg'
import Car from '@mobile/assets/Car.svg'
import Bike from '@mobile/assets/Bike.svg'
import Transport from '@mobile/assets/Transport.svg'
import Train from '@mobile/assets/Train.svg'
import People from '@mobile/assets/People.svg'
import ArrowRoute from '@mobile/assets/seta.svg'
import CarWhite from '@mobile/assets/CarWhite.svg'
import BikeWhite from '@mobile/assets/BikeWhite.svg'
import TransportWhite from '@mobile/assets/TransportWhite.svg'
import TrainWhite from '@mobile/assets/TrainWhite.svg'
import PeopleWhite from '@mobile/assets/PeopleWhite.svg'
import { SvgUri } from 'react-native-svg';
import { ButtonDefault } from '@mobile/components/ButtonDefault';
import { useNavigation } from '@react-navigation/native';



const DetalhesLocal = ({ navigation, route }) => {
    const { item, itemID } = route.params;
    const { cityId } = route.params;

    const [tourGuides, setTourGuides] = useState([]);
    const [selectedImage, setSelectedImage] = useState(item?.images?.[0] || ''); // Estado para a imagem principal
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedGuide, setSelectedGuide] = useState(null);
    const [selected, setSelected] = useState(null);


    const nav = useNavigation();

    const localInfo = {
        id: item?.id,
        name: item?.name || "Jardim Botânico Municipal de Afonso Cláudio",
        evaluation: item?.evaluation,
        address: item?.address || "Rua Afonsaa, Jard Balbal, 333\nAfonso Cláudio - ES\n00000-000",
        distance: item?.distance || "00 KM",
        difficulty: item?.difficulty || "Fácil",
        description: item?.description || "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        rating: item?.rating || 4.5,
        images: item?.images || [
            'https://via.placeholder.com/150',
            'https://via.placeholder.com/150'
        ],
        guides: item?.guides,
        country: item?.cityTourismSpot.name,
        uf: item?.cityTourismSpot.state.uf,
        cep: item?.cep || '00000-000',
        categories: item?.categories
    };

    function convertEvaluationToNumber(evaluation) {
        const evaluationMap = {
            "0 estrelas": 0,
            "0.5 estrelas": 0.5,
            "1 estrela": 1,
            "1.5 estrelas": 1.5,
            "2 estrelas": 2,
            "2.5 estrelas": 2.5,
            "3 estrelas": 3,
            "3.5 estrelas": 3.5,
            "4 estrelas": 4,
            "4.5 estrelas": 4.5,
            "5 estrelas": 5,
        };

        return evaluationMap[evaluation] || 0;
    }


    const imageArray = localInfo.images ? localInfo.images.split(',') : [];

    function formatPhoneNumber(phoneNumber) {
        if (!phoneNumber) return '';
        const cleaned = ('' + phoneNumber).replace(/\D/g, '');
        const match = cleaned.match(/^(\d{2})(\d{5})(\d{4})$/);
        if (match) {
            return `(${match[1]}) ${match[2]}-${match[3]}`;
        }
        return phoneNumber;
    }

    useEffect(() => {
        const fetchTourGuides = async () => {
            try {
                const response = await getTourGuidesByCityId(cityId);
                if (response && response.content) {
                    setTourGuides(response.content);
                } else {
                    console.error('Nenhum guia encontrado para a cidade.');
                }
            } catch (error) {
                console.error('Erro ao buscar guias turísticos:', error.message);
            }
        };
        fetchTourGuides();
    }, [cityId]);



    const openModal = (guide) => {
        setSelectedGuide(guide);
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
        setSelectedGuide(null);
    };

    const handlePress = (type) => {
        setSelected(type);
    };

    const renderIconBox = (IconComponent, IconWhiteComponent, type) => {
        const isSelected = selected === type;
        return (
            <TouchableOpacity activeOpacity={100} onPress={() => handlePress(type)}>
                <Box
                    borderRadius={8}
                    backgroundColor={isSelected ? lightTheme.colors.primary : 'white'}
                    elevation={1}
                    width={58}
                    height={46}
                    alignItems='center'
                    justifyContent='center'
                >
                    {isSelected ? <IconWhiteComponent /> : <IconComponent />}
                    <Text style={{ color: isSelected ? 'white' : 'black' }}>min</Text>
                </Box>
            </TouchableOpacity>
        );
    };





    return (
        <Modal
            visible={true}
            animationType="slide"
            onRequestClose={() => navigation.goBack()}
        >
            <SafeAreaView style={styles.container}>
                <ScrollView contentContainerStyle={styles.scrollContainer}>
                    <Box alignItems='center' pdVertical={8} pdBottom={30}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Box backgroundColor='gray' borderRadius={8} width={100} height={5}></Box>
                        </TouchableOpacity>

                    </Box>
                    <Box justifyContent='center' alignItems='center'>
                        <Box elevation={5} backgroundColor='white' borderRadius={8} width={330} height={280} >
                            {/* Imagem Principal */}
                            <View style={styles.imageContainer}>
                                <Image source={{ uri: selectedImage }} style={styles.mainImage} />
                                <View style={styles.thumbnailContainer}>
                                    {imageArray.length > 0 ? (
                                        imageArray.slice(0, 4).map((image, index) => (
                                            <TouchableOpacity key={index} onPress={() => setSelectedImage(image.trim())}>
                                                <Image source={{ uri: image.trim() }} style={styles.thumbnailImage} />
                                            </TouchableOpacity>
                                        ))
                                    ) : (
                                        <Text>No images available</Text>
                                    )}
                                    {localInfo.images.length > 4 && (
                                        <View style={styles.overlay}>
                                            <Text style={styles.moreImagesText}>+{localInfo.images.length - 4}</Text>
                                        </View>
                                    )}
                                </View>
                            </View>
                            <Box flexDirection='row' justifyContent='space-between' pdHorizontal={15} top={20}>
                                <Box>
                                    <Text style={styles.title}>{localInfo?.name}</Text>
                                </Box>
                                <Box flexDirection='row' alignItems='center'>
                                    <FontAwesome name="star" size={20} color="#FFD700" />
                                    <Text style={styles.evaluation}>{convertEvaluationToNumber(localInfo?.evaluation)}</Text>
                                </Box>
                            </Box>
                        </Box>
                    </Box>

                    {/* Informações do Local */}
                    <View style={styles.detailsContainer}>

                        <Box flexDirection='row' borderRadius={10} backgroundColor='white' alignItems='center' shadowBox elevation={5}>
                            <Box left={5} top={2}>
                                <PinLocal />
                            </Box>
                            <Box flexDirection='column' left={5}>
                                <Text style={styles.address}>{localInfo?.address}</Text>
                                <Box>
                                    <Text style={styles.address}>{localInfo?.country} - {localInfo?.uf}</Text>
                                </Box>
                                <Box>
                                    <Text style={styles.address}>{localInfo?.cep}</Text>
                                </Box>
                            </Box>
                        </Box>
                        <Box elevation={5} backgroundColor='white' borderRadius={8} top={6} width={330} height={80}>
                            <Box flexDirection='row' justifyContent='space-between'>
                                <Text style={styles.distance}>{localInfo?.distance}</Text>
                                <Text style={styles.difficulty}>Dificuldade de acesso - {localInfo?.difficulty}</Text>
                            </Box>
                            {/* container dos icons */}
                            <Box flexDirection='row' justifyContent='space-between' pdHorizontal={8} top={8}>
                                {renderIconBox(Car, CarWhite, 'car')}
                                {renderIconBox(Bike, BikeWhite, 'bike')}
                                {renderIconBox(Transport, TransportWhite, 'transport')}
                                {renderIconBox(Train, TrainWhite, 'train')}
                                {renderIconBox(People, PeopleWhite, 'people')}
                            </Box>
                        </Box>

                        {/* descrição do local */}
                        <Box elevation={1} borderRadius={8} backgroundColor='white' top={13} width={330} height={73}>
                            <Text style={styles.description}>{localInfo?.description} <Text style={styles.readMore}>Ler mais...</Text></Text>
                        </Box>

                        {/* Seções */}
                        <Box flexDirection='row' elevation={5} backgroundColor='white' top={20} width={330} height={73} alignItems='center' justifyContent='space-between' borderRadius={8} pdHorizontal={5}>
                            {localInfo?.categories?.map((category) => (
                                <Box key={category.id} elevation={5} backgroundColor='white' alignItems='center' width={74} height={50} borderRadius={8}>
                                    <SvgUri uri={category.icon} style={{ width: 60, height: 60, right: 6 }} />
                                    <Text style={styles.sectionText}>{category.name}</Text>
                                </Box>
                            ))}
                        </Box>

                        {/* Guias */}
                        <Box alignItems='center'>
                            <Box elevation={5} shadowBox backgroundColor='white' borderRadius={8} width={335} height={310} alignItems='center' top={25}>
                                <Text style={styles.guidesTitle}>Guias</Text>
                                {tourGuides.map((guide, index) => (
                                    <View key={index} style={styles.guideContainer}>
                                        <Image
                                            source={{ uri: guide.photo || 'https://via.placeholder.com/50' }}
                                            style={styles.guideImage}
                                        />
                                        <View style={styles.guideInfo}>
                                            <Text style={styles.guideName}>{guide.name} - {guide.age}</Text>
                                            <Text style={styles.guidePhone}>Tel: {formatPhoneNumber(guide.whatsapp)}</Text>

                                            <View style={styles.descriptionContainer}>
                                                <Text style={styles.guideDescription} numberOfLines={1}>
                                                    {guide.description}
                                                </Text>
                                                <TouchableOpacity onPress={() => openModal(guide)}>
                                                    <Text style={styles.guideMore}>Ler mais...</Text>
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    </View>
                                ))}
                            </Box>
                        </Box>
                        {selectedGuide && (

                            <Modal
                                visible={modalVisible}
                                animationType="slide"
                                onRequestClose={closeModal}
                            >
                                <ImageBackground
                                    source={imageGuideBackground}
                                    style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} // Estilo aplicado ao ImageBackground
                                >
                                    <View style={styles.modalContent}>
                                        <Box width={350} bottom={10} flexDirection="row" alignItems="center" justifyContent="center">
                                            <Box position="absolute" left={3}>
                                                <TouchableOpacity onPress={closeModal}>
                                                    <Arrow />
                                                </TouchableOpacity>
                                            </Box>
                                            <Box flex={1} alignItems="center" justifyContent="center">
                                                <Text style={{ fontWeight: 'bold' }}>Guias Obrigatórios</Text>
                                            </Box>
                                        </Box>


                                        <Image
                                            source={{ uri: selectedGuide.photo || 'https://via.placeholder.com/100' }}
                                            style={styles.modalImage}
                                        />
                                        <Box backgroundColor='#F5F6FF' borderRadius={8} width={320} height={220} position='absolute' top={390} pdHorizontal={15} pdVertical={10}>
                                            <Text style={styles.modalTitle}>{selectedGuide.name}</Text>
                                            <Text style={styles.modalAge}>{selectedGuide.age}</Text>
                                            <Text style={styles.modalCity}>{selectedGuide.cityTourGuides.name} - {selectedGuide.cityTourGuides.state.uf}</Text>

                                            <Box alignItems='center' justifyContent='center' pdVertical={8}  >
                                                <Box width={290} height={1} backgroundColor='gray'></Box>
                                            </Box>
                                            <Text style={styles.modalDescription}>{selectedGuide.description}</Text>
                                            {/* <Text style={styles.modalPhone}>Tel: {selectedGuide.whatsapp}</Text> */}
                                        </Box>
                                    </View>
                                    <Box flexDirection='row' top={80} left={80}>
                                        <Box pdHorizontal={5} alignItems='center'>
                                            <Phone />
                                            <Text style={styles.textButtom}>Telefone</Text>
                                        </Box>
                                        <Box pdHorizontal={5} alignItems='center'>
                                            <Whatsapp />
                                            <Text style={styles.textButtom}>Whatsapp</Text>
                                        </Box>
                                        <Box pdHorizontal={5} alignItems='center'>
                                            <Mail />
                                            <Text style={styles.textButtom}>E-mail</Text>
                                        </Box>
                                    </Box>
                                </ImageBackground>
                            </Modal>
                        )}



                        {/* Botão de Iniciar Trajeto */}
                      
                    </View>
                    <View style={styles.fixedButtonContainer}>
                            <ButtonDefault
                                iconPosition="left"
                                icon={<ArrowRoute width={20} height={20} />}
                                borderRadius={8}
                                text='Iniciar trajeto'
                                color='white'
                                height={40}
                                width={303}
                                onPress={() => nav.navigate('CustomMap')}
                            />
                        </View>
                </ScrollView>
            </SafeAreaView>
        </Modal >
    );
};

const styles = StyleSheet.create({
    fixedButtonContainer: {
        position: 'absolute',
        bottom: 100, // Ajuste para controlar a distância do botão da parte inferior da tela
        left: 0,
        right: 0,
        alignItems: 'center', // Centraliza o botão horizontalmente
    },

    scrollContainer: {
        paddingBottom: 20,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 16,
        backgroundColor: '#fff',
    },
    headerRight: {
        flexDirection: 'row',
    },
    headerIconRight: {
        marginLeft: 16,
    },
    detailsContainer: {
        paddingHorizontal: 16,
        paddingTop: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
    },
    evaluation: {
        fontSize: 20,
        fontWeight: 'semibold',
        color: '#333',
    },

    infoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 8,
    },
    address: {
        marginLeft: 6,
        fontSize: 13,
        color: '#555',
    },
    extraInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 8,
    },
    distance: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
        marginLeft: 13,
        top: 3
    },
    difficulty: {
        fontSize: 16,
        color: '#333',
        top: 3,
        right: 13
    },
    description: {
        fontSize: 16,
        color: lightTheme.colors.textDefault,
        marginTop: 8,
        left: 8
    },
    readMore: {
        color: '#2D3370',
        fontWeight: 'bold',

    },
    sections: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 16,
    },
    sectionButton: {
        alignItems: 'center',
    },
    sectionText: {
        fontSize: 14,
        color: '#2D3370',
        marginTop: 4,
    },
    guidesTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 2,
        marginBottom: 20,
        color: '#333',
        right: scale(140)
    },
    guideContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
        width: scale(320),
        height: scale(60),
        borderRadius: 4,
        elevation: 1,
        backgroundColor: 'white'
    },
    guideImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    guideInfo: {
        marginLeft: 16,
        flex: 1,
    },
    guideName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
    guidePhone: {
        fontSize: 14,
        color: '#777',
    },
    descriptionContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 4,
    },
    guideDescription: {
        flex: 1,
        fontSize: 14,
        color: '#777',
    },
    guideMore: {
        color: '#2D3370',
        right: 25
    },
    modalContent: {
        bottom: scale(80),
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalTitle: {
        fontSize: 24,
        fontWeight: 'semibold',
        color: lightTheme.colors.primary
    },
    modalAge: {
        fontSize: 13,
        paddingBottom: 7

    },
    modalCity: {
        fontSize: 20,
        fontWeight: 'semibold',
        color: lightTheme.colors.primary
    },
    modalImage: {
        width: scale(345),
        height: scale(445),
        borderRadius: 8
    },
    modalDescription: {
        fontSize: 16,
        color: '#555',
        marginBottom: 16,
    },
    modalPhone: {
        fontSize: 16,
        color: '#555',
        marginBottom: 32,
    },
    modalClose: {
        fontSize: 18,
        color: '#2D3370',
        fontWeight: 'bold',
    },
    startButton: {
        backgroundColor: '#2D3370',
        paddingVertical: 12,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 32,
    },
    startButtonText: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
    },
    container: {
        position: 'relative', // Adiciona isso ao contêiner

    },

    thumbnail: {
        width: 50, // Ajuste conforme necessário
        height: 50, // Ajuste conforme necessário
        marginRight: 5, // Espaçamento entre miniaturas
        borderRadius: 4,
        borderColor: '#fff', // Borda branca
        borderWidth: 2, // Espessura da borda
    },

    imageContainer: {
        position: 'relative', // Isso permite sobreposição
        alignItems: 'center',
        justifyContent: 'center'
    },
    mainImage: {
        width: scale(323),
        height: scale(207),
        borderRadius: scale(15), // Se quiser bordas arredondadas na imagem principal
        top: 20
    },
    thumbnailContainer: {
        position: 'absolute',
        bottom: 10, // Posiciona as miniaturas na parte inferior da imagem principal
        flexDirection: 'row',
    },
    thumbnailImage: {
        width: 50, // Tamanho das miniaturas
        height: 50, // Tamanho das miniaturas
        marginRight: 5, // Espaço entre as miniaturas
        borderRadius: 4,
        borderColor: '#fff', // Borda branca em volta das miniaturas
        borderWidth: 2,
    },
    overlay: {

        width: 50, // Largura do overlay
        height: 50, // Altura do overlay
        backgroundColor: 'rgba(0, 0, 0, 0.6)', // Fundo semitransparente
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        borderColor: '#fff', // Borda branca
        borderWidth: 2,

    },
    moreImagesText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    textButtom: {
        top: 5,
        color: '#2D3370',
    }

});

export default DetalhesLocal;
