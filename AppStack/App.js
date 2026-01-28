import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import TelaHome from "./componentes/Home";
import TelaDescricao from "./componentes/Descricao";

const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={TelaHome} />
        <Stack.Screen name="Descrição" component={TelaDescricao} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
