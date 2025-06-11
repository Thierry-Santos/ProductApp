import { Text } from 'react-native';
import * as S from './styles';
import FontAwesome6 from '@react-native-vector-icons/fontawesome6';

interface SortButtonProps {
  name: string;
  icon: string;
  active: boolean;
  action: () => void;
  testID?: string;
}

const SortButton: React.FC<SortButtonProps> = ({ name, icon, active, action, testID }) => {
  return (
    <S.Container onPress={action} active={active} testID={testID}>
      <Text>{name}</Text>
      <FontAwesome6 name={icon} iconStyle="solid" />
    </S.Container>
  );
};

export default SortButton;
