import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import TelaInicial from "./screens/HomeScreens";
import TelaTrilogia1 from "./screens/Trilogia1Screens";
import TelaTrilogia2 from "./screens/Trilogia2Screens";
import TelaTrilogia3 from "./screens/Trilogia3Screens";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={TelaInicial} />
        <Stack.Screen name="Tela1Trilogia" component={TelaTrilogia1} />
        <Stack.Screen name="Tela2Trilogia" component={TelaTrilogia2} />
        <Stack.Screen name="Tela3Trilogia" component={TelaTrilogia3} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
