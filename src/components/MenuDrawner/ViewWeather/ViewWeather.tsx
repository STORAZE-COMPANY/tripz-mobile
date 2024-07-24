import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios';
import { Box } from '@mobile/components/Box';

interface WeatherProps {
    cityName: string;
}

const API_KEY = '189bc875a19592c054a5d13048674865';

const Weather: React.FC<WeatherProps> = ({ cityName }) => {
    const [weather, setWeather] = useState<{ temp: number } | null>(null);

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather`, {
                    params: {
                        q: cityName,
                        appid: API_KEY,
                        units: 'metric'
                    }
                });
                const temperature = response.data.main.temp;
                setWeather({ temp: Math.round(temperature) });
            } catch (error) {
                console.error('Error fetching weather:', error);
            }
        };

        if (cityName) {
            fetchWeather();
        }
    }, [cityName]);

    return (
        <Box  backgroundColor='yellow' width={9} height={2} borderRadius={2} alignItems='center' justifyContent='center'>
            {weather ? (
                <Text>{weather.temp}°</Text>
            ) : (
                <Text>Carregando...</Text>
            )}
        </Box>
    );
};




export default Weather;
