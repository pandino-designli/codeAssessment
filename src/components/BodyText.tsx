import { ReactNode } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from '@constants/Colors.ts';

export const BodyText = ({ children }: { children: ReactNode }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  text: {
    fontWeight: 'regular',
    fontSize: 15,
    color: Colors.TEXT_GRAY,
    flexWrap: 'wrap',
  },
});
