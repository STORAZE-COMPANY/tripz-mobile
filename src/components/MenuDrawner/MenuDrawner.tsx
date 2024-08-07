import React from 'react';
import { Box } from '../Box';
import Menu from '@mobile/assets/menu.svg'
import Tempo from '@mobile/assets/tempo.svg'
import { TouchableOpacity } from 'react-native-gesture-handler';
import Weather from './ViewWeather/ViewWeather';



const MenuDrawner =  ({ cityName }) => {
  return (
    
    <Box  flexDirection='row' width={100} pdHorizontal={1.5}  alignItems='center' justifyContent='space-between' top={2} >
      <TouchableOpacity>
        <Menu width={50}/>
        </TouchableOpacity>
        {/* <Weather  cityName={cityName}  /> */}
    </Box>
   
  );
}

export {MenuDrawner}