import { View, Text } from 'react-native';

import estilosInvertida from './estilos'
export default function TelaCorInvertida(){
  return(
    <View style={estilosInvertida.container}>
      <Text style={estilosInvertida.texto}>Tela com Cor Invertida</Text>
    </View>
  )
}