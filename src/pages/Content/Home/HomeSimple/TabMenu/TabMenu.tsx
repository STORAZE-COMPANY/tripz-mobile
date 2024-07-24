import React from 'react';
import { Box } from '@mobile/components/Box';
import { TouchableOpacity, Text } from 'react-native';
import { lightTheme } from '@mobile/theme';

const TabMenu = ({ activeTab, onTabPress }) => (
    <Box bottom={10} alignItems='center'>
        <Box width={90} height={19} elevation={5} backgroundColor='white' borderRadius={1} >
            <Box flexDirection='row'>
                <TouchableOpacity onPress={() => onTabPress('Pontos Turisticos')} style={{ flex: activeTab === 'Pontos Turisticos' ? 3 : 3 }}>
                    <Box alignItems='center' borderColor={activeTab === 'Pontos Turisticos' ? lightTheme.colors.primary : 'transparent'} borderBottomWidth={activeTab === 'Pontos Turisticos' ? 0.45 : 0} pdVertical={1}>
                        <Text>Pontos Turísticos</Text>
                    </Box>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => onTabPress('Comércios')} style={{ flex: activeTab === 'Comércios' ? 2 : 2 }}>
                    <Box alignItems='center' borderColor={activeTab === 'Comércios' ? lightTheme.colors.primary : 'transparent'} borderBottomWidth={activeTab === 'Comércios' ? 0.45 : 0} pdVertical={1}>
                        <Text>Comércios</Text>
                    </Box>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => onTabPress('Eventos')} style={{ flex: activeTab === 'Eventos' ? 2 : 2 }}>
                    <Box alignItems='center' borderColor={activeTab === 'Eventos' ? lightTheme.colors.primary : 'transparent'} borderBottomWidth={activeTab === 'Eventos' ? 0.45 : 0} pdVertical={1}>
                        <Text>Eventos</Text>
                    </Box>
                </TouchableOpacity>
            </Box>
        </Box>
    </Box>
);

export { TabMenu };
