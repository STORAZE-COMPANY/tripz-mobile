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

interface City {
    id: number;
    name: string;
    uf: string;
    coverImage: string | null;
    coatOfArmsImage: string | null;
    description: string | null;
    state: string | null;
  }

  interface CityDetails {
    totalElements: number;
    totalPages: number;
    first: boolean;
    last: boolean;
    size: number;
    content: {
      id: number;
      name: string;
      coverImage: string;
      coatOfArmsImage: string;
      description: string;
      actived: boolean;
      state: {
        id: number;
        name: string;
        uf: string;
        country: {
          id: number;
          name: string;
          sigla: string;
          namePt: string;
          flag: string;
          stateList: any[];
        };
        cityList: any[];
      };
      users: any[];
      tourismSpot: any[];
      events: any[];
      commerces: {
        id: number;
        name: string;
        coverImage: string;
        images: string[];
        evaluation: string;
        address: string;
        description: string;
        latitude: string;
        longitude: string;
        favorite: string;
        categoriesRelations: any[];
        cityCommerces: any;
      }[];
      tourGuides: any[];
      pointOfSales: any[];
    }[];
    number: number;
    sort: {
      empty: boolean;
      sorted: boolean;
      unsorted: boolean;
    };
    numberOfElements: number;
    pageable: {
      pageNumber: number;
      pageSize: number;
      sort: {
        empty: boolean;
        sorted: boolean;
        unsorted: boolean;
      };
      offset: number;
      paged: boolean;
      unpaged: boolean;
    };
    empty: boolean;
  }


// Função para buscar usuário por e-mail
export const getUserByEmail = async (email: string): Promise<UserData | null> => {
    const response = await api.get(`user/byEmail/${email}`);
    return response.data;
    console.log(response.data)

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

// Função para buscar todas as cidades
export const getAllCities = async (): Promise<City[]> => {
    const response: AxiosResponse<City[]> = await api.get('city/actived');
    return response.data;
};

// Função para buscar cidade por ID
export const getCityById = async (id: number): Promise<City | null> => {
    const response: AxiosResponse<City> = await api.get(`city/${id}`);
    return response.data;
};


export const getCommercesByCityId = async (cityId: number) => {
  try {
      console.log("Solicitando comércios para cityId:", cityId);
      const response = await api.get(`commerce/city/${cityId}`);
      console.log("Dados dos comércios recebidos:", response.data);
      return response.data;
  } catch (error) {
      console.error('Erro ao buscar comércios:', error.response?.data || error.message);
      throw error;
  }
};


export const getTouristPointsByCityId = async (cityId: number) => {
  try {
      console.log("Solicitando comércios para cityId:", cityId);
      const response = await api.get(`tourismSpot/city/${cityId}`);
      console.log("Dados dos comércios recebidos:", response.data);
      return response.data;
  } catch (error) {
      console.error('Erro ao buscar comércios:', error.response?.data || error.message);
      throw error;
  }
};



export const getEventsByCityId  = async (cityId: number) => {
  try {
      console.log("Solicitando comércios para cityId:", cityId);
      const response = await api.get(`event/city/${cityId}`);
      console.log("Dados dos eventos recebidos:", response.data);
      return response.data;
  } catch (error) {
      console.error('Erro ao buscar comércios:', error.response?.data || error.message);
      throw error;
  }
};


export const getAllCategories = async () => {
    try {
        const response = await api.get(`category`);
        return response.data;
    } catch (error) {
        console.error('Error fetching categories:', error);
        throw error;
    }
};











