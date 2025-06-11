import { useEffect, useState } from 'react';
import { ActivityIndicator, Alert, NativeModules } from 'react-native';
import FontAwesome6 from '@react-native-vector-icons/fontawesome6';
import * as service from '../../services';
import * as S from './styles';
import { IProductItem } from '../../types';
import { INFOS_PRODUCT_ITEM } from '../../constants';

const Home: React.FC = ({ route }) => {
  const { CalendarModule } = NativeModules;
  const { itemId } = route.params;
  const [loading, setLoading] = useState<boolean>(false);
  const [productItem, setProductItem] = useState<IProductItem | null>(null);

  const addEventToCalendar = () => {
    const title = 'Important Reminder';
    const description = 'You still have a product to buy today!';

    CalendarModule.addEvent(
      title,
      description,
      (successMessage: string) => {
        Alert.alert('Success', successMessage);
      },
      (errorMessage: string) => {
        Alert.alert('Error', errorMessage);
      }
    );
  };

  const getProductItem = async (id: number) => {
    setLoading(true);
    const queryString = `?select=${INFOS_PRODUCT_ITEM}`;
    const item = await service.getProductsItem(id, queryString);

    setProductItem(item);
    setLoading(false);
  };

  useEffect(() => {
    getProductItem(itemId);
  }, [itemId]);

  return (
    <>
    {
      !loading && productItem ?
      <S.Container>
        <S.Header>
          <S.Thumbnail source={{uri:productItem.thumbnail}}/>
          <S.HeaderInfomation>
            <S.Title>{productItem.title}</S.Title>
            <S.Rating>Rating: {productItem.rating}</S.Rating>
            <S.Price>$ {productItem.price}</S.Price>
          </S.HeaderInfomation>
        </S.Header>
        <S.Body>
          <S.Label>Brand: <S.Value>{productItem.brand}</S.Value></S.Label>
          <S.Label>Description: <S.Value>{productItem.description}</S.Value></S.Label>
          <S.Label>Stock: <S.Value>{productItem.stock}</S.Value></S.Label>
        </S.Body>
        <S.Footer onPress={addEventToCalendar} testID="create-reminder-button">
          <S.Label>Create a reminder</S.Label>
          <FontAwesome6 name="bell" iconStyle="solid" />
        </S.Footer>
      </S.Container>
      :
      <S.Loading>
        <ActivityIndicator />
      </S.Loading>
    }
    </>
  );
};

export default Home;
