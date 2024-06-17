import {AxiosResponse } from 'axios';

import { api } from '@mobile/api/axios';
// Interface para dados do usuário
interface UserData {
  email: string;
  password: string;
  name: string;
  city: string;
  country: string;
  state: string;
}


// Função para buscar usuário por e-mail
export const getUserByEmail = async (email: string): Promise<UserData | null> => {
    const response = await api.get(`user/byEmail/${email}`);
    return response.data;

};

// Função para cadastrar usuário
export const registerUser = async (user: UserData): Promise<UserData | null> => {
    const response =  await api.post('user/create', user);
    return response.data;

};

// Função para fazer login
export const loginUser = async (email: string, password: string): Promise<boolean> => {
    const response = await api.post('auth', { email, password, type: 2 });
    return response.status === 200;

};



