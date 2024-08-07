import React from 'react';
import { ImageBackground } from 'react-native';
import { Box } from '@mobile/components/Box';
import { MenuDrawner } from '@mobile/components/MenuDrawner/MenuDrawner';
import  Weather  from '@mobile/components/MenuDrawner/ViewWeather/ViewWeather';

const CityHeader = ({ cityName, coverImage }) => (
    <Box backgroundColor='rgba(47,65,158,0.5)' width={375} borderRadius={1} height={188}>
        <ImageBackground source={coverImage} borderRadius={10} resizeMode='cover'>
            <Box height={188}>
                <Box flexDirection='row' alignItems='center' top={30}  width={365} justifyContent='space-between'  pdHorizontal={16}>
                    <MenuDrawner cityName={cityName} />
                    {cityName && (
                        <Box >
                        <Weather cityName={cityName} />
                        </Box>
                    )}
                </Box>
            </Box>
        </ImageBackground>

        
    </Box>



);

export { CityHeader };
