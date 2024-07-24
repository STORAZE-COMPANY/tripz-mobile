import React from 'react';
import { ImageBackground } from 'react-native';
import { Box } from '@mobile/components/Box';
import { MenuDrawner } from '@mobile/components/MenuDrawner/MenuDrawner';
import  Weather  from '@mobile/components/MenuDrawner/ViewWeather/ViewWeather';

const CityHeader = ({ cityName, coverImage }) => (
    <Box backgroundColor='rgba(47,65,158,0.5)' width={100} borderRadius={1} height={23}>
        <ImageBackground source={coverImage} borderRadius={10} resizeMode='cover'>
            <Box height={23}>
                <Box flexDirection='row' top={2.5}>
                    <MenuDrawner cityName={cityName} />
                    {cityName && (
                        <Weather cityName={cityName} />
                    )}
                </Box>
            </Box>
        </ImageBackground>

        
    </Box>



);

export { CityHeader };
