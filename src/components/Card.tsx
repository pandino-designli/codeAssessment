import { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Animated, {
  SharedTransition,
  withSpring,
} from 'react-native-reanimated';
import { BodyText } from '@components/BodyText.tsx';
import { TitleText } from '@components/TitleText.tsx';
import { BackgroundColors, Colors } from '@constants/Colors.ts';
import { categoryToColor } from '@constants/Colors.ts';
import { Product } from '@constants/Products.ts';
import { useNavigation } from '@react-navigation/native';

export const Card = ({ product }: { product: Product }) => {
  const category = product.category.name;

  // Background color based on category
  const backgroundColor = categoryToColor[category] ?? BackgroundColors.BLUE;
  const navigation = useNavigation();
  //Transition to animate image on load
  const customTransition = SharedTransition.custom(values => {
    'worklet';
    return {
      height: withSpring(values.targetHeight),
      width: withSpring(values.targetWidth),
      originX: withSpring(values.targetOriginX),
      originY: withSpring(values.targetOriginY),
    };
  });
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Details', { product })}
      style={[
        styles.container,
        {
          backgroundColor,
          shadowOffset: {
            width: 0,
            height: 16,
          },
          shadowOpacity: 0.1,
          shadowRadius: 15,
          shadowColor: backgroundColor,
        },
      ]}>
      <View style={styles.titleContainer}>
        <TitleText>{product.title}</TitleText>
      </View>

      <Animated.Image
        style={styles.imageContainer}
        sharedTransitionTag="details"
        sharedTransitionStyle={customTransition}
        height={175}
        width={175}
        source={{ uri: product.images[0] }}
      />
      <View style={styles.priceContainer}>
        <BodyText>{product.price}$</BodyText>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: Colors.GRAY,
    borderRadius: 24,
    width: '100%',
    height: 260,
    justifyContent: 'space-between',
  },
  titleContainer: {
    alignSelf: 'flex-start',
    marginTop: 4,
    marginLeft: 14,
  },
  imageContainer: {
    alignSelf: 'center',
    borderRadius: 10,
    zIndex: -1,
    position: 'absolute',
    marginTop: 55,
  },
  priceContainer: {
    width: '40%',
    padding: 5,
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 10,
    backgroundColor: 'rgba(241,241,241,0.9)',
    borderColor: Colors.PRIMARY,
  },
});
