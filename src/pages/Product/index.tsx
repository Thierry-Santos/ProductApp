import { useEffect, useState } from 'react';
import { ActivityIndicator, Alert, Pressable, Text } from 'react-native';
import * as service from '../../services';

import * as S from './styles';
import { IProductItem } from '../../types';
import { INFOS_PRODUCT_ITEM } from '../../constants';
import { NativeModules } from 'react-native';

const Home: React.FC = ({ route }) => {
  const { CalendarModule } = NativeModules;
  const { itemId } = route.params;
  const [loading, setLoading] = useState<boolean>(false);
  const [productItem, setProductItem] = useState<IProductItem | null>(null);

  const addEventToCalendar = () => {
    const productName = productItem?.title ?? 'product';
    const title = 'Important Reminder';
    const description = `You still have a ${productName} to buy today!`;
    const startDate = (new Date()).getTime();
    const endDate = startDate + 3600000;

    CalendarModule.addEvent(
      title,
      description,
      startDate.toString(),
      endDate.toString(),
      (successMessage: string) => {
        Alert.alert('Sucesso', successMessage);
      },
      (errorMessage: string) => {
        Alert.alert('Erro', errorMessage);
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
          <Pressable onPress={addEventToCalendar}>
            <Text>CLICK ME</Text>
          </Pressable>
        </S.Body>
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
