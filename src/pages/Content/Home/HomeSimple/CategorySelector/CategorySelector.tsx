import React from 'react';
import { ScrollView, Text, TouchableOpacity } from 'react-native';
import { Box } from '@mobile/components/Box';
import { lightTheme } from '@mobile/theme';

interface CategoryTabMenuProps {
    activeTab: string;
    onTabPress: (tab: string) => void;
    selectedCategories: string[];
    availableCategories: string[];
    onCategorySelect: (category: string) => void;
    onCategoryRemove: (category: string) => void;
}

const CategoryTabMenu: React.FC<CategoryTabMenuProps> = ({
    activeTab,
    onTabPress,
    selectedCategories,
    availableCategories,
    onCategorySelect,
    onCategoryRemove,
}) => {
    const textStyles = {
        color: lightTheme.colors.primary,
        fontWeight: 'bold',
    };

    const textDisableStyles = {
        color: lightTheme.colors.textDisable,
    };

    return (
        <>
            <Box flexDirection='row'>
                {['CategorySelector', 'Pontos Turisticos', 'Comércios', 'Eventos'].map(tab => (
                    <TouchableOpacity key={tab} onPress={() => onTabPress(tab)} style={{ flex: 1 }}>
                        <Box alignItems='center' borderColor={activeTab === tab ? lightTheme.colors.primary : 'transparent'} borderBottomWidth={activeTab === tab ? 0.45 : 0} pdVertical={1}>
                            <Text style={activeTab === tab ? textStyles : textDisableStyles}>
                                {tab === 'CategorySelector' ? 'Categorias' : tab}
                            </Text>
                        </Box>
                    </TouchableOpacity>
                ))}
            </Box>
            {activeTab === 'CategorySelector' && (
                <Box flexDirection='row' flexWrap='wrap' pd={2}>
                    {availableCategories.map(category => (
                        <TouchableOpacity key={category} onPress={() => onCategorySelect(category)} style={{ margin: 4 }}>
                            <Box
                                alignItems='center'
                                justifyContent='center'
                                backgroundColor={selectedCategories.includes(category) ? lightTheme.colors.primary : lightTheme.colors.background}
                                pdVertical={2}
                                pdHorizontal={4}
                                borderRadius={4}
                            >
                                <Text style={{ color: selectedCategories.includes(category) ? lightTheme.colors.textLight : lightTheme.colors.text }}>
                                    {category}
                                </Text>
                            </Box>
                        </TouchableOpacity>
                    ))}
                </Box>
            )}
        </>
    );
};

export {CategoryTabMenu};
