/**
 * @format
 */

import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import App from '../src/App';

jest.useFakeTimers();

test('renders correctly', async () => {
  await ReactTestRenderer.act(() => {
    const tree = ReactTestRenderer.create(<App />);
    tree.unmount();
  });
  jest.runOnlyPendingTimers();
});
