import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Animated from 'react-native-reanimated';
import { BodyText } from '@components/BodyText.tsx';
import { HeaderText } from '@components/HeaderText.tsx';
import { Colors } from '@constants/Colors.ts';
import { Product } from '@constants/Products.ts';
import { useNavigation } from '@react-navigation/native';

export const Details = ({ route }: { route: any }) => {
  const { product } = route.params as { product: Product };

  const navigation = useNavigation();
  const handleBackNavigation = () => {
    navigation.goBack();
  };
  return (
    <ScrollView>
      <SafeAreaView>
        <View style={styles.container}>
          <Animated.Image
            style={styles.image}
            source={{ uri: product.images[0] }}
            sharedTransitionTag="details"
          />
          <View style={styles.titleContainer}>
            <HeaderText>{product.title}</HeaderText>
          </View>
          <View style={styles.descriptionContainer}>
            <BodyText>{product.description}</BodyText>
          </View>
          <TouchableOpacity
            onPress={handleBackNavigation}
            style={styles.backContainer}>
            <BodyText>Go Back</BodyText>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 20,
    boxShadow: '0 2 15 0 rgba(115,115,115,0.59)',
  },
  backContainer: {
    borderRadius: 20,
    marginTop: 20,
    padding: 10,
    width: '40%',
    backgroundColor: Colors.SECONDARY,
  },
  titleContainer: {
    marginTop: 4,
  },
  descriptionContainer: {
    padding: 10,
    marginTop: 10,
  },
});
