import React, { createContext, useState, useContext } from 'react';
import { loginUser as loginService } from '../services/UserService';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState('');

  const loginUser = async (email, password) => {
    try {
      console.log('Iniciando loginUser...');

      // Faz a chamada ao serviço de login
      const response = await loginService(email, password);

      console.log('Resposta recebida do loginService:', response);

      if (response) {
        console.log('Login bem-sucedido.');
        
        // Armazena o usuário no estado
        setUser({ id: response.userId, email });

        // Verifica se o usuário foi armazenado corretamente
        console.log('Usuário armazenado no contexto:', { id: response.userId, email });

        return true; // Retorna true se o login for bem-sucedido
      } else {
        console.error('Falha ao fazer login: dados inválidos');
        return false;
      }

    } catch (error) {
      console.error('Erro ao fazer login:', error);
      return false;
    }
  };

  return (
    <AppContext.Provider value={{ user, setUser, email, setEmail, loginUser }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
