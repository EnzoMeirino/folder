import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import Property1home from "../components/Property1home";
import { useNavigation } from "@react-navigation/native";
import Calendario from "../components/Calendario";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const Frame1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.appHomeParent}>
      <View style={styles.appHome}>
        <Property1home />
      </View>
      <View style={[styles.modalWrapper, styles.modalLayout]}>
        <LinearGradient
          style={[styles.modal, styles.modalLayout]}
          locations={[0, 1]}
          colors={["#985088", "#5e59db"]}
        >
          <Image
            style={styles.modalChild}
            contentFit="cover"
            source={require("../assets/ellipse-11.png")}
          />
          <Image
            style={styles.modalItem}
            contentFit="cover"
            source={require("../assets/ellipse-4.png")}
          />
          <Image
            style={styles.homeIndicatorIcon}
            contentFit="cover"
            source={require("../assets/home-indicator.png")}
          />
          <Image
            style={[styles.homeIndicatorIcon1, styles.segmentedControlLayout]}
            contentFit="cover"
            source={require("../assets/home-indicator2.png")}
          />
          <View
            style={[styles.segmentedControl, styles.segmentedControlLayout]}
          >
            <Image
              style={styles.strokeIcon}
              contentFit="cover"
              source={require("../assets/stroke.png")}
            />
            <Pressable
              style={[styles.hourlyButton, styles.buttonLayout]}
              onPress={() => navigation.navigate("Frame2")}
            >
              <Text style={styles.label}>Dados de Hoje</Text>
            </Pressable>
            <View style={[styles.weeklyButton, styles.buttonLayout]}>
              <Text style={styles.label1}>Histórico</Text>
            </View>
            <View style={[styles.separator, styles.iconPosition]} />
            <View style={[styles.underline, styles.iconPosition]} />
            <View style={[styles.indicator, styles.buttonLayout]} />
          </View>
          <View style={styles.groupParent}>
            <View style={[styles.vectorParent, styles.vectorPosition1]}>
              <Image
                style={[styles.groupChild, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/rectangle-3652.png")}
              />
              <Text style={[styles.text, styles.textClr]}>97%</Text>
              <Text style={styles.tds}>TDS</Text>
              <Text style={[styles.taxaDeTds, styles.oPhDaLayout]}>
                Taxa de TDS médio.
              </Text>
              <Image
                style={[styles.iconOxygenTank, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/-icon-oxygen-tank1.png")}
              />
            </View>
            <View
              style={[styles.rectangleParent, styles.rectangleParentPosition]}
            >
              <View style={[styles.groupItem, styles.groupPosition]} />
              <Image
                style={[styles.iconHumidity, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/-icon-humidity1.png")}
              />
              <Text style={[styles.oPhDa, styles.oPhDaLayout]}>
                O pH da água médio.
              </Text>
              <Text style={[styles.acidezPh, styles.energiaTypo]}>
                ACIDEZ pH
              </Text>
              <Text style={[styles.text1, styles.textClr]}>7±1</Text>
            </View>
            <View style={[styles.vectorGroup, styles.vectorPosition]}>
              <Image
                style={[styles.groupChild, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/rectangle-3653.png")}
              />
              <Text style={styles.kwh}>8 kWh</Text>
              <Text style={[styles.taxaDeTds, styles.oPhDaLayout]}>
                Gasto de energia médio.
              </Text>
              <Image
                style={[styles.emojiSolarEnergy, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/-emoji-solar-energy1.png")}
              />
              <Text style={[styles.energia, styles.energiaTypo]}>{`Energia
`}</Text>
            </View>
            <View style={[styles.vectorContainer, styles.vectorPosition]}>
              <Image
                style={[styles.groupChild, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/rectangle-3654.png")}
              />
              <Text style={styles.text2}>19°</Text>
              <Text style={[styles.taxaDeTds, styles.oPhDaLayout]}>
                A temperatura média.
              </Text>
              <Text style={[styles.temperatura, styles.energiaTypo]}>
                Temperatura
              </Text>
              <Image
                style={[styles.iconTemperatureMax, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/-icon-temperature-max1.png")}
              />
            </View>
            <Text style={[styles.quintaFeira, styles.textClr]}>
              Quinta-Feira
            </Text>
          </View>
          <Calendario />
        </LinearGradient>
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  modalLayout: {
    borderRadius: Border.br_25xl,
    width: 390,
    left: 0,
    position: "absolute",
  },
  segmentedControlLayout: {
    height: 49,
    width: 390,
    position: "absolute",
  },
  buttonLayout: {
    height: 20,
    position: "absolute",
  },
  iconPosition: {
    left: "50%",
    position: "absolute",
  },
  vectorPosition1: {
    left: "53.28%",
    right: "0%",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  textClr: {
    color: Color.white,
    textAlign: "center",
    position: "absolute",
  },
  oPhDaLayout: {
    lineHeight: 14,
    fontSize: 11,
    width: "75%",
    height: "16.46%",
    color: Color.white,
    fontFamily: FontFamily.textRegularSm,
    textAlign: "left",
    position: "absolute",
  },
  rectangleParentPosition: {
    right: "53.28%",
    left: "0%",
  },
  groupPosition: {
    borderRadius: 19,
    left: "0%",
    bottom: "0%",
    height: "100%",
    top: "0%",
    right: "0%",
    width: "100%",
  },
  energiaTypo: {
    lineHeight: 18,
    fontSize: 12,
    color: Color.colorGray_300,
    fontFamily: FontFamily.textMediumSm,
    fontWeight: "500",
    textAlign: "left",
    position: "absolute",
  },
  vectorPosition: {
    bottom: "0.19%",
    top: "57.84%",
    width: "46.72%",
    height: "41.97%",
    position: "absolute",
  },
  leftSideLayout: {
    height: 21,
    width: 54,
    left: "50%",
    position: "absolute",
  },
  appHome: {
    borderRadius: Border.br_8xs,
    borderStyle: "dashed",
    borderColor: Color.colorBlueviolet,
    borderWidth: 1,
    overflow: "hidden",
    width: 390,
    left: 0,
    top: 0,
    position: "absolute",
    height: 844,
  },
  modalChild: {
    left: 51,
    width: 339,
    height: 428,
    top: 0,
    position: "absolute",
  },
  modalItem: {
    top: 84,
    width: 425,
    height: 425,
    left: 0,
    position: "absolute",
  },
  homeIndicatorIcon: {
    height: 34,
    width: 390,
    left: 0,
    top: 0,
    position: "absolute",
  },
  homeIndicatorIcon1: {
    overflow: "hidden",
    left: 0,
    top: 0,
  },
  strokeIcon: {
    height: 50,
    display: "none",
    width: 390,
    left: 0,
    top: 0,
    position: "absolute",
  },
  label: {
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    textAlign: "left",
    color: Color.labelColorDarkSecondary,
    lineHeight: 20,
    fontSize: FontSize.size_mini,
    left: 0,
    top: 0,
    position: "absolute",
  },
  hourlyButton: {
    left: 32,
    width: 111,
    top: 25,
    height: 20,
  },
  label1: {
    width: 150,
    textAlign: "center",
    fontFamily: FontFamily.textMediumSm,
    fontWeight: "500",
    right: 0,
    color: Color.labelColorDarkSecondary,
    lineHeight: 20,
    fontSize: FontSize.size_mini,
    top: 0,
    position: "absolute",
  },
  weeklyButton: {
    left: 243,
    width: 115,
    top: 25,
    height: 20,
  },
  separator: {
    marginLeft: -195.5,
    shadowColor: "rgba(0, 0, 0, 0.2)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
    borderStyle: "solid",
    borderColor: Color.colorGray_200,
    borderTopWidth: 1,
    width: 391,
    height: 1,
    bottom: 0,
    left: "50%",
  },
  underline: {
    marginLeft: 0,
    height: 0,
    bottom: 0,
    left: "50%",
    width: 390,
  },
  indicator: {
    width: 390,
    left: 0,
    top: 0,
  },
  segmentedControl: {
    top: 38,
    left: 10,
  },
  groupChild: {
    borderRadius: 19,
    left: "0%",
    bottom: "0%",
    height: "100%",
    top: "0%",
    right: "0%",
    width: "100%",
  },
  text: {
    left: "7.01%",
    fontFamily: FontFamily.textRegularSm,
    lineHeight: 21,
    fontSize: 36,
    top: "39.63%",
    width: "57.93%",
    height: "39.63%",
    color: Color.white,
  },
  tds: {
    height: "12.47%",
    width: "70.65%",
    top: "12.47%",
    left: "25.97%",
    fontSize: FontSize.textRegularSm_size,
    color: Color.colorGray_300,
    fontFamily: FontFamily.textMediumSm,
    fontWeight: "500",
    textAlign: "left",
    lineHeight: 20,
    position: "absolute",
  },
  taxaDeTds: {
    top: "70.73%",
    left: "12.5%",
  },
  iconOxygenTank: {
    height: "13.41%",
    width: "12.2%",
    top: "32.93%",
    right: "-35.06%",
    bottom: "53.66%",
    left: "122.87%",
  },
  vectorParent: {
    bottom: "48.05%",
    top: "9.98%",
    width: "46.72%",
    height: "41.97%",
    position: "absolute",
  },
  groupItem: {
    backgroundColor: Color.colorGhostwhite_100,
    position: "absolute",
  },
  iconHumidity: {
    height: "9.89%",
    width: "10.94%",
    top: "34.76%",
    right: "78.08%",
    bottom: "55.35%",
    left: "10.98%",
  },
  oPhDa: {
    top: "69.51%",
    left: "14.63%",
  },
  acidezPh: {
    height: "9.76%",
    width: "63.41%",
    top: "9.76%",
    left: "23.78%",
    fontSize: 12,
  },
  text1: {
    left: "6.71%",
    fontFamily: FontFamily.textRegularSm,
    lineHeight: 21,
    fontSize: 36,
    top: "39.63%",
    width: "57.93%",
    height: "39.63%",
    color: Color.white,
  },
  rectangleParent: {
    bottom: "48.05%",
    top: "9.98%",
    width: "46.72%",
    height: "41.97%",
    position: "absolute",
  },
  kwh: {
    width: "83.54%",
    left: "7.32%",
    fontSize: 35,
    color: Color.white,
    fontFamily: FontFamily.textRegularSm,
    lineHeight: 21,
    top: "39.63%",
    height: "39.63%",
    textAlign: "center",
    position: "absolute",
  },
  emojiSolarEnergy: {
    height: "13.76%",
    width: "12.99%",
    top: "8.54%",
    right: "78.48%",
    bottom: "77.71%",
    left: "8.54%",
  },
  energia: {
    height: "15.24%",
    width: "62.2%",
    top: "12.2%",
    left: "23.78%",
    fontSize: 12,
  },
  vectorGroup: {
    left: "53.28%",
    right: "0%",
  },
  text2: {
    top: "25.61%",
    left: "6.1%",
    lineHeight: 62,
    letterSpacing: 0,
    fontSize: 35,
    color: Color.white,
    fontFamily: FontFamily.textRegularSm,
    width: "57.93%",
    height: "39.63%",
    textAlign: "center",
    position: "absolute",
  },
  temperatura: {
    height: "14.02%",
    width: "60.98%",
    top: "12.8%",
    left: "29.27%",
  },
  iconTemperatureMax: {
    height: "16.38%",
    width: "15.46%",
    top: "11.06%",
    right: "74.17%",
    bottom: "72.56%",
    left: "10.37%",
  },
  vectorContainer: {
    right: "53.28%",
    left: "0%",
  },
  quintaFeira: {
    height: "6.4%",
    width: "35.9%",
    left: "33.05%",
    fontSize: 15,
    lineHeight: 19,
    color: Color.white,
    top: "0%",
    fontFamily: FontFamily.textMediumSm,
    fontWeight: "500",
  },
  groupParent: {
    top: 462,
    left: 40,
    width: 309,
    height: 344,
    position: "absolute",
  },
  modal: {
    top: 343,
    height: 850,
    backgroundColor: "transparent",
    overflow: "hidden",
  },
  modalWrapper: {
    top: 0,
    height: 844,
  },
  notchIcon: {
    marginLeft: -82,
    top: -2,
    width: 164,
    height: 32,
    display: "none",
  },
  text3: {
    top: 1,
    fontSize: FontSize.size_mid,
    lineHeight: 22,
    width: 54,
    letterSpacing: 0,
    color: Color.white,
    textAlign: "center",
    fontFamily: FontFamily.textMediumSm,
    fontWeight: "500",
    height: 20,
    left: 0,
    position: "absolute",
  },
  statusbarTime: {
    marginLeft: -27,
    borderRadius: Border.br_5xl,
    top: 0,
  },
  leftSide: {
    marginLeft: -168,
    top: 14,
  },
  rightSideIcon: {
    marginLeft: 91,
    top: 19,
    width: 77,
    height: 13,
  },
  statusbarIphone13: {
    height: 47,
    right: 0,
    display: "none",
    overflow: "hidden",
    left: 0,
    top: 0,
    position: "absolute",
  },
  appHomeParent: {
    flex: 1,
    height: 844,
    width: "100%",
  },
});

export default Frame1;
