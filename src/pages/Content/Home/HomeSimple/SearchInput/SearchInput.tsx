import React from 'react';
import { Box } from '@mobile/components/Box';
import { Input } from '@mobile/components/Input';

const SearchInput = ({ cities, selectedCity, selectedUF, onCitySelect, onUFSelect }) => (
    <Box flexDirection='row' pdHorizontal={16} bottom={110} alignItems='center' justifyContent='space-between' width={375} zIndex={100}>
        <Input
            placeholder="Cidade"
            dropdownOpacity={0.8}
            type='dropdown'
            width={270}
            options={cities.map(city => city.name)}
            onSelect={onCitySelect}
            value={selectedCity ? selectedCity.name : ''}
        />
        <Input
            placeholder="UF"
            dropdownOpacity={0.8}
            type='dropdown'
            width={65}
            options={[...new Set(cities.map(city => city.uf))]}
            onSelect={onUFSelect}
            value={selectedUF}
        />
    </Box>
);

export { SearchInput };
