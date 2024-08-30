import { View, StatusBar, Platform } from "react-native";
import { Home } from './src/screens/Home';

export default function App() {
  return (
    <View>
      <StatusBar
        barStyle="light-content"
        backgroundColor={Platform.OS === 'android' ? 'transparent' : undefined}
        translucent={Platform.OS === 'android'}
      />
      <Home/>
    </View>
  );
}