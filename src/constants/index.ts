export const BASE_URL = 'https://dummyjson.com/products';
export const BASE_URL_CATEGORIES = `${BASE_URL}/categories`;

export const LIMIT = 10;

export const INFOS_PRODUCT = 'title,price,rating,thumbnail';
export const INFOS_PRODUCT_ITEM = 'title,price,rating,thumbnail,description,brand,stock';

export const initialCategory = {
  label: 'All',
  value: BASE_URL,
};

export const sortOptions = [
  {
    name: 'Price',
    icon: 'arrow-up-short-wide',
    order: 'asc',
    active: false,
    value: 'price',
  },
  {
    name: 'Price',
    icon: 'arrow-down-wide-short',
    order: 'desc',
    active: false,
    value: 'price',
  },
  {
    name: 'Rating',
    icon: 'arrow-up-short-wide',
    order: 'asc',
    active: false,
    value: 'rating',
  },
  {
    name: 'Rating',
    icon: 'arrow-down-wide-short',
    order: 'desc',
    active: false,
    value: 'rating',
  },
];
