import React, { useState } from 'react'
import { FlatList, Pressable, SafeAreaView, StyleSheet, Text } from 'react-native';
import FomularioET from './src/componente/estudiante';
import Estudiantes from './src/componente/Estudiantes';

const App = () => {
  const[modalVisible, SetModalVisible] = useState(false);
  const [carnet, setCarnet] = useState('');

  return (
    <SafeAreaView style= {styles.container}>
      <Text style={styles.titulo1}>
        {''} Registro de Estudiantes
        </Text>
        <Text style={styles.titulo2}>Estudiantes</Text>

      <Pressable style = {styles.btnNewEstudiantes} 
      onPress={() => SetModalVisible(!modalVisible)}>
        <Text style = {styles.btnTxtNewEstudiantes}>Nuevos Estudiantes</Text>
      </Pressable>
      {carnet.length == 0?(
        <Text style={styles.NoEstudiantes}> Noo hay Estudiantes</Text>
      ):(
        <FlatList
        style={styles.listado}
          data={carnet}
          keyExtractor={ item => item.id}
          renderItem={({item})=>{
            return(
              <Estudiantes
                item = {item}
              />
         )
        }}
        />)
     
    }
    <FomularioET 
      modalVisible={modalVisible}
      SetModalVisible={SetModalVisible}
      carnet = {carnet}
      setCarnet = {setCarnet}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#33beff',
    flex: 1, 
  },
  titulo1: {
    textAlign: 'center',
    fontSize: 50,
    color: '#090a0a',
    fontWeight: '900',
  },
  titulo2:{
    textAlign: 'left',
    fontSize: 25,
    fontWeight: '900',
    color: '#090a0a'
  },
  btnNewEstudiantes:{
    backgroundColor: '#4234ca',
    padding: 20,
    marginTop: 25,
    marginHorizontal: 20,
    borderRadius: 10,
  },
  btnTxtNewEstudiantes:{
    textAlign: 'center',
    color: '#090a0a',
    fontSize: 19,
    fontWeight: '900',
    textTransform: 'uppercase'
  },
  NoEstudiantes:{
    marginTop: 40,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '600',
  },
  listado:{
    marginTop: 50,
    marginHorizontal: 30,
  },
});
export default App;
