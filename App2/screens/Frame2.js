import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import Property1home1 from "../components/Property1home1";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const Frame2 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.appHomeParent}>
      <View style={[styles.appHome, styles.homePosition]}>
        <Property1home1 />
      </View>
      <View style={styles.modalLayout}>
        <View style={[styles.modalWrapper, styles.homePosition]}>
          <LinearGradient
            style={[styles.modal, styles.modalLayout]}
            locations={[0, 1]}
            colors={["#985088", "#5e59db"]}
          >
            <Image
              style={styles.modalChild}
              contentFit="cover"
              source={require("../assets/ellipse-1.png")}
            />
            <Image
              style={[styles.modalItem, styles.homePosition]}
              contentFit="cover"
              source={require("../assets/ellipse-4.png")}
            />
            <Image
              style={[styles.homeIndicatorIcon, styles.homePosition]}
              contentFit="cover"
              source={require("../assets/home-indicator.png")}
            />
            <Image
              style={styles.homeIndicatorIcon1}
              contentFit="cover"
              source={require("../assets/home-indicator1.png")}
            />
            <View style={styles.segmentedControl}>
              <Image
                style={[styles.strokeIcon, styles.indicatorPosition]}
                contentFit="cover"
                source={require("../assets/stroke.png")}
              />
              <View style={[styles.hourlyButton, styles.buttonLayout]}>
                <Text style={styles.label}>Dados de Hoje</Text>
              </View>
              <Pressable
                style={[styles.weeklyButton, styles.buttonLayout]}
                onPress={() => navigation.navigate("Frame1")}
              >
                <Text style={styles.label1}>Histórico</Text>
              </Pressable>
              <View style={[styles.separator, styles.separatorPosition]} />
              <View style={[styles.underline, styles.separatorPosition]} />
              <View style={[styles.indicator, styles.buttonLayout]} />
            </View>
            <View style={[styles.vectorParent, styles.parentLayout]}>
              <Image
                style={styles.groupLayout}
                contentFit="cover"
                source={require("../assets/rectangle-365.png")}
              />
              <Text style={[styles.text, styles.textLayout]}>97%</Text>
              <Text style={[styles.tds, styles.tdsTypo]}>TDS</Text>
              <Text style={[styles.oOxignioEst, styles.oPhDaLayout]}>
                O oxigênio está normal hoje
              </Text>
              <Image
                style={[styles.iconOxygenTank, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/-icon-oxygen-tank.png")}
              />
            </View>
            <View style={[styles.rectangleParent, styles.parentLayout]}>
              <View style={[styles.groupItem, styles.groupLayout]} />
              <Image
                style={[styles.iconHumidity, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/-icon-humidity.png")}
              />
              <Text style={[styles.oPhDa, styles.oPhDaLayout]}>
                O pH da água está normal hoje
              </Text>
              <Text style={[styles.acidezPh, styles.energiaTypo]}>
                ACIDEZ pH
              </Text>
              <Text style={[styles.text1, styles.textLayout]}>7±1</Text>
            </View>
            <View style={[styles.vectorGroup, styles.vectorPosition]}>
              <Image
                style={styles.groupLayout}
                contentFit="cover"
                source={require("../assets/rectangle-3651.png")}
              />
              <Text style={styles.kwh}>8 kWh</Text>
              <Text style={[styles.oOxignioEst, styles.oPhDaLayout]}>
                O gasto de energia está razoável hoje
              </Text>
              <Image
                style={[styles.emojiSolarEnergy, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/-emoji-solar-energy.png")}
              />
              <Text style={[styles.energia, styles.energiaTypo]}>{`Energia
`}</Text>
            </View>
            <View style={[styles.vectorContainer, styles.vectorPosition]}>
              <Image
                style={styles.groupLayout}
                contentFit="cover"
                source={require("../assets/rectangle-3651.png")}
              />
              <Text style={styles.text2}>19°</Text>
              <Text style={[styles.oOxignioEst, styles.oPhDaLayout]}>
                A temperatura está fria hoje
              </Text>
              <Text style={[styles.temperatura, styles.tdsTypo]}>
                Temperatura
              </Text>
              <Image
                style={[styles.iconTemperatureMax, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/-icon-temperature-max.png")}
              />
            </View>
          </LinearGradient>
        </View>
      </View>
      </View>
  );
};

const styles = StyleSheet.create({
  homePosition: {
    left: 0,
    position: "absolute",
  },
  modalLayout: {
    borderRadius: Border.br_25xl,
    width: 390,
    left: 0,
    top: 0,
    position: "absolute",
    height: 844,
  },
  indicatorPosition: {
    display: "none",
    width: 390,
    left: 0,
    top: 0,
  },
  buttonLayout: {
    height: 20,
    position: "absolute",
  },
  separatorPosition: {
    left: "50%",
    position: "absolute",
  },
  parentLayout: {
    height: 164,
    top: 138,
    width: 164,
    position: "absolute",
  },
  textLayout: {
    height: 65,
    width: 95,
    color: Color.white,
    fontFamily: FontFamily.textRegularSm,
    lineHeight: 40,
    fontSize: FontSize.size_22xl,
    top: 65,
    textAlign: "center",
    position: "absolute",
  },
  tdsTypo: {
    color: Color.colorGray_300,
    fontSize: FontSize.textRegularSm_size,
    fontFamily: FontFamily.textMediumSm,
    fontWeight: "500",
    textAlign: "left",
    lineHeight: 20,
    position: "absolute",
  },
  oPhDaLayout: {
    height: 30,
    width: 126,
    lineHeight: 12,
    fontSize: FontSize.size_xs,
    color: Color.white,
    fontFamily: FontFamily.textRegularSm,
    textAlign: "left",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  groupLayout: {
    borderRadius: Border.br_3xl,
    height: 164,
    width: 164,
    left: 0,
    top: 0,
    position: "absolute",
  },
  energiaTypo: {
    left: 39,
    color: Color.colorGray_300,
    fontSize: FontSize.textRegularSm_size,
    fontFamily: FontFamily.textMediumSm,
    fontWeight: "500",
    textAlign: "left",
    lineHeight: 20,
    position: "absolute",
  },
  vectorPosition: {
    top: 325,
    height: 164,
    width: 164,
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
    top: 0,
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
  },
  homeIndicatorIcon: {
    height: 34,
    width: 390,
    top: 0,
  },
  homeIndicatorIcon1: {
    height: 49,
    overflow: "hidden",
    width: 390,
    left: 0,
    top: 0,
    position: "absolute",
  },
  strokeIcon: {
    height: 50,
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
    marginLeft: -195,
    height: 0,
    bottom: 0,
    left: "50%",
    width: 390,
  },
  indicator: {
    display: "none",
    width: 390,
    left: 0,
    top: 0,
  },
  segmentedControl: {
    top: 38,
    left: 11,
    height: 49,
    width: 390,
    position: "absolute",
  },
  text: {
    left: 12,
    height: 65,
    width: 95,
    color: Color.white,
    fontFamily: FontFamily.textRegularSm,
    lineHeight: 24,
    fontSize: FontSize.size_22xl,
    top: 65,
  },
  tds: {
    top: 18,
    left: 38,
    height: 18,
    width: 102,
  },
  oOxignioEst: {
    top: 116,
    left: 21,
  },
  iconOxygenTank: {
    height: "13.41%",
    width: "12.2%",
    top: "9.15%",
    right: "78.96%",
    bottom: "77.44%",
    left: "8.84%",
  },
  vectorParent: {
    left: 206,
  },
  groupItem: {
    backgroundColor: Color.colorGhostwhite_100,
  },
  iconHumidity: {
    height: "9.89%",
    width: "10.94%",
    top: "10.98%",
    right: "78.08%",
    bottom: "79.13%",
    left: "10.98%",
  },
  oPhDa: {
    top: 114,
    left: 24,
  },
  acidezPh: {
    top: 16,
    width: 104,
    height: 18,
  },
  text1: {
    height: 65,
    width: 95,
    color: Color.white,
    fontFamily: FontFamily.textRegularSm,
    lineHeight: 40,
    fontSize: FontSize.size_22xl,
    top: 65,
    left: 11,
  },
  rectangleParent: {
    left: 23,
  },
  kwh: {
    width: 137,
    fontSize: FontSize.size_21xl,
    height: 65,
    color: Color.white,
    fontFamily: FontFamily.textRegularSm,
    lineHeight: 40,
    left: 12,
    top: 65,
    textAlign: "center",
    position: "absolute",
  },
  emojiSolarEnergy: {
    height: "15.19%",
    width: "14.41%",
    top: "7.82%",
    right: "77.76%",
    bottom: "76.99%",
    left: "7.82%",
  },
  energia: {
    top: 20,
    height: 25,
    width: 102,
  },
  vectorGroup: {
    left: 208,
  },
  text2: {
    top: 42,
    left: 10,
    lineHeight: 70,
    letterSpacing: 0,
    fontSize: FontSize.size_21xl,
    height: 65,
    width: 95,
    color: Color.white,
    fontFamily: FontFamily.textRegularSm,
    textAlign: "center",
    position: "absolute",
  },
  temperatura: {
    top: 21,
    left: 48,
    width: 100,
    height: 23,
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
    left: 17,
  },
  modal: {
    backgroundColor: "transparent",
    overflow: "hidden",
  },
  modalWrapper: {
    top: 343,
    width: 390,
    height: 844,
  },
  notchIcon: {
    marginLeft: -82,
    top: -2,
    height: 32,
    width: 164,
    left: "50%",
    display: "none",
    position: "absolute",
  },
  text3: {
    top: 1,
    fontSize: FontSize.size_mid,
    lineHeight: 40,
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
    width: "100%",
    height: 844,
  },
});

export default Frame2;
