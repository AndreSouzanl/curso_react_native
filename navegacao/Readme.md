# Criando navegação em react native

1° Passo: Instalar o
import { NavigationContainer } from "@react-navigation/native";

2° Passo Instala o
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

3° Passo Instancia o
const Tabs = createBottomTabNavigator();

App ficando com estrutura abaixo:

<NavigationContainer>
      <Tabs.Navigator>
        <Tabs.Screen name="Inicio" component={ TelaInical } /> # tela inicio
        <Tabs.Screen name="Perfil" component={ TelaPerfil } /> # tela perfil
      </Tabs.Navigator>
</NavigationContainer>

todas estas biblioteca abaixo tem esta instaladas para funcionar
npx expo install @react-navigation/native
npx expo install @react-navigation/bottom-tabs
npx expo install react-native-screens
npx expo install react-native-safe-area-context

NavigatinContainer => definindo que o aplicativo vai ter navegação

CreateBottomTabNavigator  =>  Definindo a navegação em abas, define o tipo de navegação

instancia do createBottonTabNavigator
const Abas, Telas, Tabs = createBottonTabNavigation()

Através da biblioteca @react-navigation/bottom-tabs conseguimos criar um aplicativo que possui navegação por abas


