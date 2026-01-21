import { View, Text} from 'react-native';

import estilos from './estilos'
export default function TelaNormal(){
  return(
    <View style={estilos.container}>
      <Text style={estilos.texto}>Tela com as cores normais</Text>
    </View>
  )
}