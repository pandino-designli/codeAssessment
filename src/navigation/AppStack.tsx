import { Platform } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Details } from '@screens/Details.tsx';
import { Home } from '@screens/Home.tsx';
import { AppStackParamList } from '@src/models/Navigation.ts';

const Stack = createNativeStackNavigator<AppStackParamList>();
const platform = Platform.OS;
export const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerShown: true,
          headerTitle: 'Home',
          headerLargeTitle: true,
          headerTransparent: platform === 'ios' ? true : false,
          headerBlurEffect: 'light',
        }}
        name="Home"
        component={Home}
      />
      <Stack.Group
        screenOptions={{
          presentation: 'modal',
          gestureDirection: 'vertical',
          animation: 'slide_from_bottom',
          headerBackVisible: true,
          headerBackButtonMenuEnabled: true,
          headerBackTitle: 'Back',
        }}>
        <Stack.Screen
          options={{
            headerShown: true,
            headerTitle: 'Details',
            headerLargeTitle: true,
            headerTransparent: platform === 'ios' ? true : false,
            headerBlurEffect: 'light',
          }}
          name="Details"
          component={Details}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};
