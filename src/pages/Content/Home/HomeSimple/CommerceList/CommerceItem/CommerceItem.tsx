import React from 'react';
import { TouchableOpacity, Text, Image, View } from 'react-native';
import { Box } from '@mobile/components/Box'; // Certifique-se de importar o componente de Box correto conforme o seu projeto

const CommerceItem = ({ commerce, onPress }) => (
    <TouchableOpacity onPress={onPress}>
        <Box flexDirection='row' pdVertical={1} pdHorizontal={2} alignItems='center'>
            <Image
                source={{ uri: commerce.imageUrl }}
                style={{ width: 50, height: 50, borderRadius: 25 }}
            />
            <View style={{ marginLeft: 10 }}>
                <Text>{commerce.name}</Text>
                <Text>{commerce.category}</Text>
            </View>
        </Box>
    </TouchableOpacity>
);

export { CommerceItem };
