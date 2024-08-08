import React, { useEffect, useState } from 'react';
import { Box } from '@mobile/components/Box';
import { Input } from '@mobile/components/Input';
import CityIcon from '@mobile/assets/citySVG.svg'
import { Map } from 'iconsax-react-native';

const SearchInput = ({ cities, selectedCity, selectedUF, onCitySelect, onUFSelect }) => {
    const [city, setCity] = useState(selectedCity || null);

    useEffect(() => {
        if (!selectedCity && cities.length > 0) {
            const defaultCity = cities.find(city => city.id === 1);
            if (defaultCity) {
                setCity(defaultCity);
                onCitySelect(defaultCity.name);
            }
        }
    }, [selectedCity, cities, onCitySelect]);

    useEffect(() => {
        if (selectedCity) {
            setCity(selectedCity);
        }
    }, [selectedCity]);

    const handleCitySelect = (cityName) => {
        const selected = cities.find(city => city.name === cityName);
        setCity(selected);
        onCitySelect(cityName);
    };

    return (
        <Box flexDirection='row' pdHorizontal={20} bottom={90} alignItems='center' justifyContent='space-between' width={375} zIndex={100}>
            <Box pdRight={2}>
                <Input
                    placeholder="Cidade"
                    dropdownOpacity={0.8}
                    type='dropdown'
                    width={270}
                    options={cities.map(city => city.name)}
                    onSelect={handleCitySelect}
                    value={city ? city.name : ''}
                    iconComponent={<CityIcon width={20} height={20} />} 
                    icon='Map'
                />
            </Box>
            <Box pdRight={4}>
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
        </Box>
    );
};

export { SearchInput };
