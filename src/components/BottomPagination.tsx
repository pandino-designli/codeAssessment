import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { BodyText } from '@components/BodyText.tsx';
import { Colors } from '@constants/Colors.ts';
import { ProductsOffset } from '@constants/Products.ts';

export const BottomPagination = ({
  previousOffSet,
  newOffSet,
}: {
  previousOffSet: number;
  newOffSet: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const handleProductsLoad = (productsOffest: ProductsOffset) => {
    if (productsOffest === 'previous') {
      previousOffSet === 0 ? newOffSet(0) : newOffSet(previousOffSet - 10);
    } else {
      newOffSet(previousOffSet + 10);
    }
  };

  return (
    <View style={styles.bottomContainer}>
      <TouchableOpacity onPress={() => handleProductsLoad('previous')}>
        <BodyText>Previous 10</BodyText>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleProductsLoad('next')}>
        <BodyText>Next 10</BodyText>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomContainer: {
    backgroundColor: Colors.SECONDARY,
    padding: 14,
    flexDirection: 'row',
    borderRadius: 30,
    justifyContent: 'space-between',
    width: '70%',
  },
});
