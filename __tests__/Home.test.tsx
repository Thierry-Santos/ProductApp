import React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react-native';
import Home from '../src/pages/Home';
import * as service from '../src/services';

jest.mock('../src/services');

const mockNavigation = { navigate: jest.fn() } as any;

describe('Home filtering and sorting', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('changes category and sort state', async () => {
    const getProducts = service.getProducts as jest.Mock;
    const getCategories = service.getCategories as jest.Mock;

    getProducts.mockResolvedValue([]);
    getCategories.mockResolvedValue([
      { slug: 'cat', name: 'Category', url: 'caturl' },
    ]);

    const { getByTestId } = render(<Home navigation={mockNavigation} />);

    await waitFor(() => expect(getProducts).toHaveBeenCalled());

    const dropdown = getByTestId('dropDownPicker');
    fireEvent(dropdown, 'setValue', 'caturl');
    fireEvent(dropdown, 'onSelectItem', { label: 'Category', value: 'caturl' });

    expect(dropdown.props.value).toBe('caturl');

    const sortButton = getByTestId('sort-button-0');
    fireEvent.press(sortButton);
    await waitFor(() => expect(sortButton.props.active).toBe(true));
  });
});
