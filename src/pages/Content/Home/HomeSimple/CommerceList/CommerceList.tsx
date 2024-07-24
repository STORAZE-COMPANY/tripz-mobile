import React from 'react';
import { Box } from '@mobile/components/Box';
import { ScrollView } from 'react-native';
import { CommerceItem } from './CommerceItem/CommerceItem'; // Importe CommerceItem aqui

const CommerceList = ({ cityCommerces }) => (
    <ScrollView>
        <Box pdBottom={4} height={40}>
            {/* Renderização dinâmica dos comércios */}
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {cityCommerces.map((commerce, index) => (
                    <CommerceItem
                        key={index}
                        commerce={commerce}
                        onPress={() => console.log('Clicou em:', commerce.name)} // Exemplo de ação ao clicar no item
                    />
                ))}
            </ScrollView>
        </Box>
    </ScrollView>
);

export { CommerceList };
