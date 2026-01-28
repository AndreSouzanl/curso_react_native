import { View,Text, Button} from 'react-native';


import estilos from './estilos'
export default function TelaNormal(props){
  return(
    <View style={estilos.container}>
      <Text style={estilos.texto}>Tela com as cores normais</Text>
      <Button title= "Abrir menu" onPress={() => {props.navigation.openDrawer()}} />
    </View>
  )
}
