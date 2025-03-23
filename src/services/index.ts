import axios from 'axios';
import { IProductItem, ICategories } from '../types';
import { BASE_URL, BASE_URL_CATEGORIES } from '../constants';

export const getProducts = async (
  path: string, queryString: string
): Promise<IProductItem[]> => {
  console.log(path, queryString);

  try {
    const { data } = await axios.get(`${path}?${queryString}`);

    return data.products;
  } catch {
    return [];
  }
};

export const getCategories = async (): Promise<ICategories[]> => {
  try {
    const { data } = await axios.get(BASE_URL_CATEGORIES);

    return data;
  } catch {
    return [];
  }
};

export const getProductsItem = async (itemId: number, queryString: string): Promise<IProductItem | null> => {
  try {
    const { data } = await axios.get(`${BASE_URL}/${itemId}?${queryString}`);

    return data;
  } catch {
    return null;
  }
};
