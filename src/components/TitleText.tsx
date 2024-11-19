import { ReactNode } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from '@constants/Colors.ts';

export const TitleText = ({ children }: { children: ReactNode }) => {
  return (
    <View style={styles.container}>
      <Text numberOfLines={2} style={styles.text}>
        {children}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '60%',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 18,
    color: Colors.SECONDARY,
    flexWrap: 'wrap',
  },
});
