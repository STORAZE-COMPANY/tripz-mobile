import React from 'react';
import Background from '../../../components/Background/Background';
import TopBarComponent from '../../../components/TopBarAuth/TopBarAuth';
import Box from '../../../components/Box/Box';
import { Input } from '../../../components/Input/Input';


const Register: React.FC = () => {
   return (
      <Background>
         <Box flex={1}>
            <Box top={20}>
               <TopBarComponent titleText="Bem vindo(a)!" currentStep={1} totalSteps={4} />
            </Box>
            <Box top={20} alignItems='center'>
               <Input placeholder='oi' label='Por favor, informe seu e-mail'/>
            </Box>
         </Box>

      </Background>
   );
};

export default Register;