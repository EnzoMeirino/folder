import React, { useState, useCallback, memo } from "react";
import { Text, StyleSheet, Pressable, View, Modal } from "react-native";
import { Image } from "expo-image";
import DatePicker from "./DatePicker";
import { FontSize, Color, FontFamily } from "../GlobalStyles";
import { Calendar, LocaleConfig } from "react-native-calendars";

const Calendario = memo(() => {
  const [textVisible, setTextVisible] = useState(false);

  const openText = useCallback(() => {
    setTextVisible(true);
  }, []);

  const closeText = useCallback(() => {
    setTextVisible(false);
  }, []);

  const [selected, setSelected] = useState('');

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
  
  return (
      <View style={[styles.calendar202220239012022Parent, styles.iconPosition]}>
        
        <Calendar style={styles.calendar202220239012022}>

           current={'2023-03-01'}                    
           onDayPress={day => {
           console.log('selected day', day);
           
           }}

  // Mark specific dates as marked

        markedDates={{
            '2023-09-26': {selected: true, marked: true, selectedColor: 'purple'},
            '2023-09-02': {marked: true},
            '2023-09-03': {selected: true, marked: true, selectedColor: 'purple'}
        }}

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
          
      </View>
  );
});

const styles = StyleSheet.create({
  calendar20222023901Atom: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    height: 23,
    borderRadius: 4,
    justifyContent: "center",
    flexDirection: "row",
    //alignItems: "center",
  },
  grid: {
    flex: 1,
  },
  calendar202220239012022: {
    top: 10,
    left: 30,
    width: 213,
    height: 240,
    position: "absolute",
  },
  icon: {
    top: 25,
    left: 177,
    width: 13,
    height: 13,
  },
  calendar202220239012022Parent: {
    top: 128,
    left: 58,
    borderRadius: 46,
    backgroundColor: Color.white,
    width: 275,
    height: 330,
    alignContent: 'center',
  },
});

export default Calendario;
