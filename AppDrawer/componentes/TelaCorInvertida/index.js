import { View, Text, Button } from 'react-native';

import estilosInvertida from './estilos'
export default function TelaCorInvertida(props){
  return(
    <View style={estilosInvertida.container}>
      <Text style={estilosInvertida.texto}>Tela com Cor Invertida</Text>
       <Button title= "Abrir menu" onPress={() => {props.navigation.openDrawer()}} />
    </View>
  )
}