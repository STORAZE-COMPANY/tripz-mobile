import { Box } from '@mobile/components/Box';
import { Input } from '@mobile/components/Input';
import { scale } from '@mobile/utils/resize';
import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';


const FormField: React.FC = () => {
    const [country, setCountry] = useState('');
    const [state, setState] = useState('');
    const [city, setCity] = useState('');

   
    

    return (
        <Box flexDirection='row' alignItems='center' justifyContent='space-between' width={scale(240)} pdHorizontal={17}>
          <Box right={10}>
            <Input
                type="dropdown"
                placeholder="País"
                options={['Brasil', 'Estados Unidos', 'Canadá']}
                value={country}
                onSelect={setCountry}
                icon="world-o"
                style={styles.input}
                width={scale(70)}
                onChangeText={setCountry}                   
            />
            </Box>

            <Box right={5}>
            <Input
                type="dropdown"
                placeholder="UF"
                options={['SP', 'RJ', 'MG']}
                value={state}
                onSelect={setState}
                style={styles.input}
                width={scale(50)}
                onChangeText={setState}     
              
            />
            </Box>
            <Box left={2}>
            <Input
                type="dropdown"
                placeholder="Cidade"
                options={['São Paulo', 'Rio de Janeiro', 'Belo Horizonte']}
                value={city}
                onSelect={setCity}
                style={styles.input}
                width={scale(110)}     
                onChangeText={setCity}     
                   
            />
            </Box>
        </Box>
    );
};

const styles = StyleSheet.create({
    input: {
        flex: 1,
        marginHorizontal: 5,

    },
});

export { FormField };

// import React, { useState, useEffect } from 'react';
// import { View, StyleSheet } from 'react-native';
// import { Box } from '@mobile/components/Box';
// import { Input } from '@mobile/components/Input';
// import { getAllCities } from '@mobile/services/UserService'; // Importe sua função de serviço para buscar cidades aqui

// const FormField: React.FC = () => {
//     const [country, setCountry] = useState('');
//     const [state, setState] = useState('');
//     const [city, setCity] = useState('');
//     const [cities, setCities] = useState<string[]>([]); // Array de strings para armazenar nomes das cidades

//     useEffect(() => {
//         const fetchCities = async () => {
//             // Chame sua função para buscar todas as cidades
//             const citiesData = await getAllCities(); // Supondo que essa função retorne um array de objetos com o campo 'name'

//             // Extrai apenas os nomes das cidades para usar como options no dropdown
//             const cityNames = citiesData.map(city => city.name);
//             setCities(cityNames);
//         };

//         fetchCities();
//     }, []);

//     return (
//         <Box flexDirection='row' alignItems='center' justifyContent='space-between' width={100} pdHorizontal={2}>
//             <Input
//                 type="dropdown"
//                 placeholder="País"
//                 options={['Brasil', 'Estados Unidos', 'Canadá']}
//                 value={country}
//                 onSelect={setCountry}
//                 width={30}
//             />
//             <Input
//                 type="dropdown"
//                 placeholder="UF"
//                 options={['SP', 'RJ', 'MG']}
//                 value={state}
//                 onSelect={setState}
//                 width={20}
//             />
//             <Input
//                 type="dropdown"
//                 placeholder="Cidade"
//                 options={cities} // Use o estado cities como options para o dropdown de cidades
//                 value={city}
//                 onSelect={setCity}
//                 width={38}
//             />
//         </Box>
//     );
// };

// export { FormField };

