import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Register from '../screens/Register';
import Home from '../screens/Home';

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name='Register' component={Register} />
      <Stack.Screen name='Home' component={Home} />
    </Stack.Navigator>
  );
}
