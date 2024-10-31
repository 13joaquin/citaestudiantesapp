import React, { useState } from 'react'
import { Alert, 
    Modal, 
    Pressable, 
    SafeAreaView, 
    ScrollView, 
    StyleSheet, 
    Text, 
    TextInput, 
    View } from 'react-native';
import DatePicker from 'react-native-date-picker';

const estudiante = ({modalVisible, SetModalVisible, carnet, setCarnet}) => {

    const [esnombre, setEsNombre] = useState('');
    const [esapellido, setEsApellido] = useState('');
    const [esdireccion, setEsDireccion] = useState('');
    const [esfecha, setEsFecha] = useState(new Date());

    const handleAgregar = () => {
        if([carnet, esnombre, esapellido, esdireccion, esfecha].includes(''))
            {
                Alert.alert('Error', 'Todos los campos son obligatorios');
                return;
            }
        const nuevoestudiante = {
            carnet,
            esnombre,
            esapellido,
            esdireccion, 
            esfecha,
        }
        console.log(nuevoestudiante);
        setCarnet([...carnet, nuevoestudiante]);
        SetModalVisible(!modalVisible);
        setCarnet('');
        setEsNombre('');
        setEsApellido('');
        setEsDireccion('');
        setEsFecha(new Date());

    };
  return (
    <Modal animationType='slide' visible={modalVisible}>
        <SafeAreaView style = {style.contenido}>
            <ScrollView>
                <Text>Desde la ventana de Modal</Text>
                <Pressable style = {style.btnCancelar} 
                    onPress={() => SetModalVisible(!modalVisible)}>
                        <Text style = {style.btnTxTCancelar}>Regresar</Text>
                </Pressable>
                <View style={style.campo}>
                    <Text style={style.label}>No. de Carnet</Text>
                    <TextInput 
                        style={style.input}
                        placeholder="No. de Carnet"
                        placeholderTextColor={'#666'}
                        value={carnet}
                        onChangeText={setCarnet}
                    />
                </View>
                <View style={style.campo}>
                    <Text style={style.label}>Nombre del Estudiante</Text>
                    <TextInput 
                        style={style.input}
                        placeholder="Nombre del Estudiante"
                        placeholderTextColor={'#666'}
                        value={esnombre}
                        onChangeText={setEsNombre}
                    />
                </View>
                <View style={style.campo}>
                    <Text style={style.label}>Apellido del Estudiante</Text>
                    <TextInput 
                        style={style.input}
                        placeholder="Apellido del Estudiante"
                        placeholderTextColor={'#666'}
                        value={esapellido}
                        onChangeText={setEsApellido}
                    />
                </View>
                <View style={style.campo}>
                    <Text style={style.label}>Direccion</Text>
                    <TextInput 
                        style={style.input}
                        placeholder="Direccion del Estudiante"
                        placeholderTextColor={'#666'}
                        value={esdireccion}
                        onChangeText={setEsDireccion}
                    />
                </View>
                <View style={style.campo}>
                    <Text style={style.label}>Fecha de Nacimiento</Text>
                    <View style={style.fechaContenedor}>
                    <DatePicker
                        date={esfecha}
                        locale="es"
                        onDateChange={date => setEsFecha(date)}
                        />
                    </View>
                </View>
                <Pressable style={style.btnAgregarET}
                    onPress={handleAgregar}>
                        <Text style={style.btnTXTAgregarET}> Agregar Estudiante</Text>
                </Pressable>
            </ScrollView>
        </SafeAreaView>
    </Modal>
  );
};
const style = StyleSheet.create({
    contenido:{
        backgroundColor:'#33beff',
        flex: 1,
    },
    btnCancelar:{
        marginVertical: 30,
        backgroundColor:'#4234ca',
        marginHorizontal: 30,
        padding: 15,
        borderRadius: 10,
    },
    btnTxTCancelar:{
        color: '#090a0a',
        textAlign: 'center',
        fontWeight: '900',
        fontSize: 16,
        textTransform: 'uppercase',
    },
    campo:{
        marginTop: 10,
        marginHorizontal: 30,
    },
    label: {
        color: '#090a0a',
        marginTop: 15,
        fontSize: 20,
        fontWeight: '600'
    },
    input:{
        backgroundColor: '#FFF',
        borderRadius: 10,
    },
    btnAgregarET:{
        marginVertical: 50,
        backgroundColor: '#4234ca', 
        paddingVertical: 15,
        marginHorizontal: 30,
        borderRadius: 10,
    },
    btnTXTAgregarET:{
        color: '090a0a',
        textAlign: 'center',
        fontWeight: '900',
        fontSize: 16,
        textTransform: 'uppercase',
    },
    fechaContenedor:{
        backgroundColor:'#FFF',
        borderRadius: 10,
    },
});

export default estudiante;
