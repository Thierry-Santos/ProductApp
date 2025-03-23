import * as S from './styles';

const ProductItem: React.FC = ({ title, price, rating, thumbnail, action }) => {

  return (
    <S.Container onPress={action}>
      <S.Thumbnail source={{uri:thumbnail}}/>
      <S.TitleRating>
        <S.Title>{title}</S.Title>
        <S.Title>rating: <S.Rating>{rating}</S.Rating></S.Title>
      </S.TitleRating>
      <S.Price>$ {price}</S.Price>
    </S.Container>
  );
};

export default ProductItem;
