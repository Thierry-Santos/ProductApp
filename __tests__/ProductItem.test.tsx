import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import ProductItem from '../src/components/ProductItem';

test('renders information and handles press', () => {
  const onPress = jest.fn();

  const { getByText } = render(
    <ProductItem
      title="Item"
      price={9.99}
      rating={4}
      thumbnail="img.jpg"
      action={onPress}
    />
  );

  fireEvent.press(getByText('Item').parent!);
  expect(onPress).toHaveBeenCalled();
  expect(getByText('Item')).toBeTruthy();
  expect(getByText('$ 9.99')).toBeTruthy();
});
