
import { StyleSheet } from 'react-native';
import { cores } from '../utils/cores';


const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: cores.principal,
  
    
   },
  texto:{
    color: cores.text,
    fontSize: 16,
    margin: 30,
    
  },
  titulo:{
    color: cores.titulo,
    fontSize: 24,
    fontWeight: '500',
    backgroundColor: cores.box,
    padding: 10,
    borderRadius: 10,
  },
  barraTitulos:{
    height: 90,
    backgroundColor: cores.caixa,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 20,
  }
});

export default estilos;

