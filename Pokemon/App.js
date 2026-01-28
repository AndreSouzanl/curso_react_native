import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Home from './componentes/Home'
import TelaPokemon1 from "./componentes/Pokemon1";
import TelaPokemon2 from "./componentes/Pokemon2";
import TelaPokemon3 from "./componentes/Pokemon3";

const Drawer = createDrawerNavigator()

export default function App() {
  return (
    <NavigationContainer>
       <Drawer.Navigator>
        <Drawer.Screen name="Home" component={ Home } />
        <Drawer.Screen name="Tela Pokemon 1" component={ TelaPokemon1 } />
        <Drawer.Screen name="Tela Pokemon 2" component={ TelaPokemon2 } />
        <Drawer.Screen name="Tela Pokemon 3" component={ TelaPokemon3 } />
       </Drawer.Navigator>
    </NavigationContainer>
  );
}


