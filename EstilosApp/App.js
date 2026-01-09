import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

import estilos from './styles/estilos';

export default function App() {
  return (
    <View style={estilos.container}>
      <View style={estilos.barraTitulos}>
        <Text style={estilos.texto}>Estilizando o App</Text>
      </View>
      <Text style={estilos.titulo}>Treinado cores no App</Text>
      <Text style={estilos.texto}>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}


