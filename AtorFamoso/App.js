
import { View } from 'react-native';

import estilos from './estilos'
import BarraTitulo from './componentes/BarraTitulo';
import Card from './componentes/Card';
import Conteudo from './componentes/Conteudo';

export default function App() {
  return (
    <View style={estilos.container}>
      <BarraTitulo />
      <Card />
      <Conteudo />
    </View>
  );
}

