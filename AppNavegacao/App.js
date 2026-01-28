import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import TelaHome from "./componentes/Home/TelaHome";
import TelaContato from "./componentes/Contato/TelaContato";
import TelaSobre from "./componentes/Sobre/TelaSobre";

const Tabs = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
     <Tabs.Navigator>
       <Tabs.Screen name="Tela Inicial" component={ TelaHome} />
       <Tabs.Screen name="Contato" component={ TelaContato} />
       <Tabs.Screen name="Sobre" component={ TelaSobre} />
     </Tabs.Navigator>
    </NavigationContainer>
  );
}

