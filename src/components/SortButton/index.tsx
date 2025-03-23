import { Text } from 'react-native';
import * as S from './styles';
import FontAwesome6 from '@react-native-vector-icons/fontawesome6';

const SortButton: React.FC = ({ name, icon, active, action }) => {
  return (
    <S.Container onPress={action} active={active}>
      <Text>{name}</Text>
      <FontAwesome6 name={icon} iconStyle="solid" />
    </S.Container>
  );
};

export default SortButton;
