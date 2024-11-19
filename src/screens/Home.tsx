import { Animated, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import ScrollView = Animated.ScrollView;
import { BottomPagination } from '@components/BottomPagination.tsx';
import { Card } from '@components/Card.tsx';
import { HeaderText } from '@components/HeaderText.tsx';
import { TitleText } from '@components/TitleText.tsx';
import { AppTitlesText } from '@constants/AppTitlesText.ts';
import { useProducts } from '@hooks/useGetProducts.ts';

export const Home = () => {
  const { products, isLoading, error, setOffset, offset } = useProducts();

  return (
    <>
      <ScrollView>
        <SafeAreaView>
          <View style={styles.container}>
            <View style={styles.header}>
              <HeaderText>{AppTitlesText.HomeAllCategories}</HeaderText>
            </View>
            <View style={styles.card}>
              {products.map(product => {
                return <Card key={product.id} product={product} />;
              })}
            </View>
          </View>
        </SafeAreaView>
      </ScrollView>
      <View style={styles.bottomContainer}>
        <BottomPagination newOffSet={setOffset} previousOffSet={offset} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    marginTop: 5,
    alignSelf: 'flex-start',
    padding: 20,
  },
  card: {
    width: '70%',
    gap: 5,
  },
  bottomContainer: {
    alignSelf: 'center',
    marginBottom: 14,
    borderRadius: 30,
  },
});
