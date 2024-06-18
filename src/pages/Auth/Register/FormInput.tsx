import { Box } from '@mobile/components/Box';
import { Input } from '@mobile/components/Input';
import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';


const FormField: React.FC = () => {
    const [country, setCountry] = useState('');
    const [state, setState] = useState('');
    const [city, setCity] = useState('');

   
    

    return (
        <Box flexDirection='row' alignItems='center' justifyContent='space-between' width={100} pdHorizontal={2}>
          
            <Input
                type="dropdown"
                placeholder="País"
                options={['Brasil', 'Estados Unidos', 'Canadá']}
                value={country}
                onSelect={setCountry}
                icon="world-o"
                style={styles.input}
                width={30}
                onChangeText={setCountry}                   
            />
            <Input
                type="dropdown"
                placeholder="UF"
                options={['SP', 'RJ', 'MG']}
                value={state}
                onSelect={setState}
                style={styles.input}
                width={20}
                onChangeText={setState}     
              
            />
            <Input
                type="dropdown"
                placeholder="Cidade"
                options={['São Paulo', 'Rio de Janeiro', 'Belo Horizonte']}
                value={city}
                onSelect={setCity}
                style={styles.input}
                width={38}     
                onChangeText={setCity}     
                
                 
            />
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
