import React from 'react';
import { render, fireEvent, act } from '@testing-library/react-native';
import ProductPage from '../src/pages/Product';
import * as service from '../src/services';
import { NativeModules } from 'react-native';

jest.mock('../src/services');

const mockRoute = { params: { itemId: 1 } } as any;
const mockNavigation = {} as any;

describe('Calendar module', () => {
  it('calls addEvent when pressing reminder button', async () => {
    (service.getProductsItem as jest.Mock).mockResolvedValue({
      id: 1,
      title: 'Title',
      price: 10,
      rating: 4,
      thumbnail: 'img',
      description: 'desc',
      brand: 'brand',
      stock: '1',
    });

    NativeModules.CalendarModule = { addEvent: jest.fn() };

    const { findByTestId } = render(
      <ProductPage route={mockRoute} navigation={mockNavigation} />
    );

    await act(async () => {
      await Promise.resolve();
    });
    const button = await findByTestId('create-reminder-button');

    fireEvent.press(button);
    expect(NativeModules.CalendarModule.addEvent).toHaveBeenCalled();
  });
});
