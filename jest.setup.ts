import '@testing-library/jest-native/extend-expect';

jest.useFakeTimers();

jest.mock('@react-native-vector-icons/fontawesome6', () => 'FontAwesome6');

jest.mock('@notifee/react-native', () => ({
  createChannel: jest.fn(),
  displayNotification: jest.fn(),
  requestPermission: jest.fn(() => Promise.resolve(true)),
}));
