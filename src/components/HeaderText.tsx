import { ReactNode } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from '@constants/Colors.ts';

export const HeaderText = ({ children }: { children: ReactNode }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 1,
  },
  text: {
    fontWeight: 'condensedBold',
    fontSize: 18,
    color: Colors.SECONDARY,
  },
});
