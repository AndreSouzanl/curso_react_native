import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import TelaInicial from "./componentes/TelaInicial";
import TelaRestaurantes from "./componentes/restaurantes";
import TelaPasseios from "./componentes/TelaPasseios";
import TelaHospedagem from "./componentes/Hospedagem";

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={ TelaInicial } />
        <Stack.Screen name="Restaurante" component={ TelaRestaurantes } />
        <Stack.Screen name="Passeios" component={ TelaPasseios } />
        <Stack.Screen name="Hospedagem" component={ TelaHospedagem } />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

