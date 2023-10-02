import React, { memo } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Image } from "expo-image";
import { FontFamily, FontSize, Color } from "../GlobalStyles";

const DatePicker = memo(({ onClose }) => {
  return (
    <View style={styles.datePicker}>
      <View style={styles.heading}>
        <View style={styles.monthYear}>
          <Text style={styles.button}>Janeiro 2022</Text>
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/icon1.png")}
          />
        </View>
      </View>
      <View style={[styles.button1, styles.buttonLayout3]}>
        <Text style={[styles.button2, styles.buttonTypo]}>2011</Text>
      </View>
      <View style={[styles.button3, styles.buttonPosition]}>
        <Text style={[styles.button2, styles.buttonTypo]}>2015</Text>
      </View>
      <View style={[styles.button5, styles.buttonLayout3]}>
        <Text style={[styles.button2, styles.buttonTypo]}>2019</Text>
      </View>
      <View style={[styles.button7, styles.buttonLayout3]}>
        <Text style={[styles.button2, styles.buttonTypo]}>2023</Text>
      </View>
      <View style={[styles.button9, styles.buttonLayout3]}>
        <Text style={[styles.button10, styles.buttonTypo]}>2027</Text>
      </View>
      <View style={[styles.button11, styles.buttonLayout3]}>
        <Text style={[styles.button10, styles.buttonTypo]}>2031</Text>
      </View>
      <View style={[styles.button13, styles.buttonLayout2]}>
        <Text style={[styles.button2, styles.buttonTypo]}>2012</Text>
      </View>
      <View style={[styles.button15, styles.buttonLayout2]}>
        <Text style={[styles.button2, styles.buttonTypo]}>2016</Text>
      </View>
      <View style={[styles.button17, styles.buttonLayout2]}>
        <Text style={[styles.button2, styles.buttonTypo]}>2020</Text>
      </View>
      <View style={[styles.button19, styles.buttonLayout2]}>
        <Text style={[styles.button2, styles.buttonTypo]}>2024</Text>
      </View>
      <View style={[styles.button21, styles.buttonLayout2]}>
        <Text style={[styles.button10, styles.buttonTypo]}>2028</Text>
      </View>
      <View style={[styles.button23, styles.buttonLayout2]}>
        <Text style={[styles.button10, styles.buttonTypo]}>2032</Text>
      </View>
      <View style={[styles.button25, styles.buttonLayout1]}>
        <Text style={[styles.button2, styles.buttonTypo]}>2013</Text>
      </View>
      <View style={[styles.button27, styles.buttonLayout1]}>
        <Text style={[styles.button2, styles.buttonTypo]}>2017</Text>
      </View>
      <View style={[styles.button29, styles.buttonLayout1]}>
        <Text style={[styles.button10, styles.buttonTypo]}>2021</Text>
      </View>
      <View style={[styles.button31, styles.buttonLayout1]}>
        <Text style={[styles.button2, styles.buttonTypo]}>2025</Text>
      </View>
      <View style={[styles.button33, styles.buttonLayout1]}>
        <Text style={[styles.button10, styles.buttonTypo]}>2029</Text>
      </View>
      <View style={[styles.button35, styles.buttonLayout1]}>
        <Text style={[styles.button36, styles.buttonTypo]}>2033</Text>
      </View>
      <View style={[styles.button37, styles.buttonLayout]}>
        <Text style={[styles.button2, styles.buttonTypo]}>2014</Text>
      </View>
      <View style={[styles.button39, styles.buttonLayout]}>
        <Text style={[styles.button2, styles.buttonTypo]}>2018</Text>
      </View>
      <View style={[styles.button41, styles.buttonLayout]}>
        <Text style={[styles.button2, styles.buttonTypo]}>2022</Text>
      </View>
      <View style={[styles.button43, styles.buttonLayout]}>
        <Text style={[styles.button10, styles.buttonTypo]}>2026</Text>
      </View>
      <View style={[styles.button45, styles.buttonLayout]}>
        <Text style={[styles.button10, styles.buttonTypo]}>2030</Text>
      </View>
      <View style={[styles.button47, styles.buttonLayout]}>
        <Text style={[styles.button10, styles.buttonTypo]}>2034</Text>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  buttonLayout3: {
    paddingHorizontal: 9,
    height: 24,
    width: 42,
    left: 9,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 8,
    flexDirection: "row",
    borderRadius: 5,
    position: "absolute",
  },
  buttonTypo: {
    fontFamily: FontFamily.textRegularSm,
    textAlign: "left",
    lineHeight: 21,
    fontSize: FontSize.textRegularSm_size,
  },
  buttonPosition: {
    top: 64,
    opacity: 0.5,
  },
  buttonLayout2: {
    left: 52,
    paddingHorizontal: 9,
    height: 24,
    width: 42,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 8,
    flexDirection: "row",
    borderRadius: 5,
    position: "absolute",
  },
  buttonLayout1: {
    left: 94,
    paddingHorizontal: 9,
    height: 24,
    width: 42,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 8,
    flexDirection: "row",
    borderRadius: 5,
    position: "absolute",
  },
  buttonLayout: {
    left: 136,
    paddingHorizontal: 9,
    height: 24,
    width: 42,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 8,
    flexDirection: "row",
    borderRadius: 5,
    position: "absolute",
  },
  button: {
    fontWeight: "500",
    fontFamily: FontFamily.textMediumSm,
    textAlign: "left",
    lineHeight: 21,
    fontSize: FontSize.textRegularSm_size,
    color: Color.gray700,
  },
  icon: {
    width: 9,
    height: 9,
    overflow: "hidden",
    marginLeft: 3.03,
  },
  monthYear: {
    top: 0,
    left: 0,
    paddingHorizontal: 6,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 8,
    flexDirection: "row",
    borderRadius: 5,
    height: 18,
    position: "absolute",
  },
  heading: {
    top: 12,
    right: 12,
    left: 12,
    height: 18,
    position: "absolute",
  },
  button2: {
    color: Color.gray700,
    fontFamily: FontFamily.textRegularSm,
  },
  button1: {
    opacity: 0.5,
    top: 39,
  },
  button3: {
    paddingHorizontal: 9,
    height: 24,
    width: 42,
    left: 9,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 8,
    flexDirection: "row",
    borderRadius: 5,
    position: "absolute",
  },
  button5: {
    top: 88,
    opacity: 0.5,
  },
  button7: {
    top: 112,
  },
  button10: {
    color: Color.colorDarkslategray_100,
  },
  button9: {
    top: 136,
  },
  button11: {
    top: 161,
  },
  button13: {
    opacity: 0.5,
    top: 39,
  },
  button15: {
    top: 64,
    opacity: 0.5,
  },
  button17: {
    top: 88,
    opacity: 0.5,
  },
  button19: {
    top: 112,
  },
  button21: {
    top: 136,
  },
  button23: {
    top: 161,
  },
  button25: {
    opacity: 0.5,
    top: 39,
  },
  button27: {
    top: 64,
    opacity: 0.5,
  },
  button29: {
    top: 88,
  },
  button31: {
    top: 112,
  },
  button33: {
    top: 136,
  },
  button36: {
    opacity: 0.5,
    color: Color.gray700,
    fontFamily: FontFamily.textRegularSm,
  },
  button35: {
    top: 161,
  },
  button37: {
    opacity: 0.5,
    top: 39,
  },
  button39: {
    top: 64,
    opacity: 0.5,
  },
  button41: {
    top: 88,
  },
  button43: {
    top: 112,
  },
  button45: {
    top: 136,
  },
  button47: {
    top: 161,
  },
  datePicker: {
    borderRadius: 13,
    backgroundColor: Color.white,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: {
      width: 0,
      height: 0.7578551769256592,
    },
    shadowRadius: 2.27,
    elevation: 2.27,
    shadowOpacity: 1,
    width: 196,
    height: 213,
    maxWidth: "100%",
    maxHeight: "100%",
  },
});

export default DatePicker;
