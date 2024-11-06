import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

const Estudiantes = ({item}) => {
    console.log(item);
    const {escarnet, esnombre, esapellido, esdireccion, esfecha, id} = item;
    const FormatearFecha = esfecha =>{
        const nuevoFecha = new Date(esfecha);
        const opcionesF = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        };
        return nuevoFecha.toLocaleDateString('es-ES', opcionesF);
    };
  return (
    <View style={style.contenedor}>
        <Text style={style.label}>No. Carnet:</Text>
        <Text style={style.texto}>{escarnet}</Text>
        <Text style={style.label}>Nombres del Estudiante:</Text>
        <Text style={style.texto}>{esnombre}</Text>
        <Text style={style.label}>Apellidos del Estudiante:</Text>
        <Text style={style.texto}>{esapellido}</Text>
        <Text style={style.label}>Direccion del Estudiante:</Text>
        <Text style={style.texto}>{esdireccion}</Text>
        <Text style={style.Esfecha}>{FormatearFecha(esfecha)}</Text>
        <View style={style.contenedorBotones}>
            <Pressable style={[style.btn, style.btnEditar]}>
                <Text style={style.btnTexto}>Editar</Text>
            </Pressable>
            <Pressable style={[style.btn, style.btnEliminar]}>
                <Text style={style.btnTexto}>Eliminar</Text>
            </Pressable>
        </View>
    </View>
  )
};
const style = StyleSheet.create({
    contenedor: {
        backgroundColor: '#FFF',
       padding: 20,
       borderBlockColor: '#054e9c',
       borderBottomWidth: 1,
      },
      label: {
        color: '#054e9c',
        fontWeight: '700',
        fontSize: 20,
        marginBottom: 10,
      },
      texto: {
        textTransform: 'uppercase',
        color: '#054e9c',
        fontWeight: '700',
        fontSize: 24,
        marginBottom: 10,
      },
      fecha: {
        color: '#054e9c',
        fontSize: 16,
      },
      contenedorBotones:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop:20,
      },
      btn:{
        paddingVertical: 5,
        paddingHorizontal: 20,
        borderRadius: 5,
      },
      btnTexto:{
        textTransform: 'uppercase',
        fontWeight: '700',
        fontSize: 12,
        color: '#FFF',
      },
      btnEditar:{
        backgroundColor: '#F59E0B',
      },
      btnEliminar:{
        backgroundColor: '#EF4444',
      },
});
export default Estudiantes;
