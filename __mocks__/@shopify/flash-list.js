const React = require('react');
const { View } = require('react-native');
const FlashList = React.forwardRef((props, ref) => <View ref={ref} {...props} />);
module.exports = { FlashList };
