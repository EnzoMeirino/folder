import React, { useState, useCallback} from "react";
import { Text, StyleSheet, Pressable, View, Modal, TouchableOpacity } from "react-native";
import { Color } from "../GlobalStyles";
import { Calendar, LocaleConfig } from "react-native-calendars";
import database from '@react-native-firebase/database';
import { useEffect } from 'react';
import { connectToMqtt } from '../MqttService';

const sendMqttDataToFirebase = (mqttData) => {
  const firebaseRef = database().ref('dadosTemperatura'); // Substitua 'dadosTemperatura' pelo caminho desejado no seu banco de dados.
  
  // Insira os dados do MQTT no Firebase Realtime Database.
  firebaseRef.push(mqttData); // Isso criará uma nova entrada com dados do MQTT.
  // Ou você pode especificar uma chave personalizada.
  // firebaseRef.child('chavePersonalizada').set(mqttData);
};

useEffect(() => {
    
  connectToMqtt();

  const getTemperatureDataForDate = async (date) => {
    try {
      const snapshot = await database().ref('dadosTemperatura').orderByChild('data').equalTo(date).once('value');
      const data = snapshot.val();
      return data;
    } catch (error) {
      console.error('Erro ao recuperar dados de temperatura:', error);
      return null;
    }};
  
  const handleDateSelection = async (date) => {

      setSelectedDate(date);

      const data = await getTemperatureDataForDate(date);

      setTemperatureData(data);

      setModalVisible(true);
    };
    setModalVisible(false);
  },[]);


  client.onMessageArrived = (message) => {

    const payload = message.payloadString;
    const topic = message.destinationName;

    if (topic === 'temperatura') {

      const mqttData = {
        data: new Date().toISOString(), // Adicione a data ou timestamp correspondente aos dados.
        temperatura: parseFloat(payload),
        // Outros campos, como pH, TDS e gasto de energia.
      };
      sendMqttDataToFirebase('dadosTemperatura', mqttData);

    } else if (topic === 'ph') {
      const mqttData = {
        data: new Date().toISOString(),
        ph: parseFloat(payload),
      };
      sendMqttDataToFirebase('dadosPh', mqttData);
    } else if (topic === 'tds') {
      const mqttData = {
        data: new Date().toISOString(),
        tds: parseFloat(payload),
      };
      sendMqttDataToFirebase('dadosTds', mqttData);
    } else if (topic === 'energia') {
      const mqttData = {
        data: new Date().toISOString(),
        energia: parseFloat(payload),
      };
      sendMqttDataToFirebase('dadosEnergia', mqttData);
    }
  };
 

LocaleConfig.locales['br'] = {
  monthNames: [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro'
  ],
  monthNames: [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro'
  ],
  monthNamesShort: ['Jan.', 'Fev.', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul.', 'Ago', 'Set.', 'Oct.', 'Nov.', 'Dez'],
  dayNames: ['Domingo','Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
  dayNamesShort: ['Dom','Seg.', 'Ter.', 'Qua', 'Qui', 'Sex', 'Sab'],
  today: "Hoje"
};

LocaleConfig.defaultLocale = 'br';

const [textVisible, setTextVisible] = useState(false);

const openText = useCallback(() => {
  setTextVisible(true);
}, []);

const closeText = useCallback(() => {
  setTextVisible(false);
}, []);

const [selected, setSelected] = useState('');

const Calendario = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [temperatureData, setTemperatureData] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

 
  return (
      <View style={[styles.calendar202220239012022Parent, styles.iconPosition]}>
        
        <Calendar style={styles.calendar202220239012022}>
                             
           onDayPress={(day) => handleDateSelection(day.dateString)}

           theme={{
            backgroundColor: '#ffffff',
            calendarBackground: '#ffffff',
            textSectionTitleColor: '#b6c1cd',
            selectedDayBackgroundColor: '#744AB8',
            selectedDayTextColor: '#ffffff',
            todayTextColor: '#744AB8',
            dayTextColor: '#2d4150',
            textDisabledColor: '#d9e'
        }}

        </Calendar>

        <Modal
       visible={modalVisible}
       onRequestClose={() => setModalVisible(false)}
       transparent={true}
        >
          <View>
            {temperatureData ? (
              <View>
                <Text>Data: {selectedDate} </Text>
                <Text>Temperatura: {temperatureData.temperatura}</Text>
                <Text>pH: {temperatureData.ph}</Text>
                <Text>TDS: {temperatureData.tds}</Text>
                <Text>Energia: {temperatureData.energia}</Text>
              </View>
            ) : (
              <Text>Dados não disponíveis para esta data.</Text>
            )}

            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Text>Fechar</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
  );
};

export default Calendario;
