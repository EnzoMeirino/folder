import React, { memo } from "react";
import {
  View,
  StyleSheet,
  Text,
  Pressable,
  ImageBackground,
} from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
//import StatusBarIPhone13 from "./StatusBarIPhone13";
import { useNavigation } from "@react-navigation/native";
import { Border, FontFamily, FontSize, Color } from "../GlobalStyles";

const TelaInicial = memo(() => {
  const navigation = useNavigation();

  return (
    <LinearGradient
      style={[styles.Telainicial, styles.appPosition]}
      locations={[0, 0.81]}
      colors={["#6cff48", "#ff07ab"]}
    >
      <Image
        style={styles.appHomevariant2Child}
        contentFit="cover"
        source={require("../assets/ellipse-5.png")}
      />
      <LinearGradient
        style={[styles.image, styles.appPosition]}
        locations={[0, 1]}
        colors={["#2e335a", "#1c1b33"]}
      >
      </LinearGradient>
      <LinearGradient
        style={[styles.appHomevariant2Item, styles.appPosition]}
        locations={[0.12, 0.6]}
        colors={["rgba(68, 84, 58, 0)", "#4a543a"]}
      />
      <Pressable style={[styles.loginButton, styles.buttonLayout]}>
        <View style={[styles.loginButtonChild, styles.buttonChildPosition]} />
        <Text style={[styles.login, styles.naiaClr]}>Entrar</Text>
        onPress={() => navigation.navigate("Frame2")}
      </Pressable>

      <Image style={[styles.naia, styles.naiaClr]} contentFit="cover" source={require("../assets/NAIA.png")}/>
      <ImageBackground
        style={styles.logoapp1Icon}
        resizeMode="cover"
        source={require("../assets/logoapp1.png")}
      />
    </LinearGradient>
  );
});

const styles = StyleSheet.create({
  appPosition: {
    backgroundColor: "transparent",
    width: 390,
    left: 0,
    position: "absolute",
  },
  buttonLayout: {
    height: 56,
    width: 331,
    left: 32,
    position: "absolute",
  },
  buttonChildPosition: {
    borderRadius: Border.br_5xs,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  loginTypo: {
    fontFamily: FontFamily.urbanistSemiBold,
    fontWeight: "600",
    top: 19,
    fontSize: FontSize.size_mini,
  },
  appHomevariant2Child: {
    height: 632,
    width: 390,
    left: 0,
    top: 0,
    position: "absolute",
  },
  photo143689162058447fd0e565aIcon: {
    top: -32,
    left: -209,
    width: 807,
    height: 1211,
    position: "absolute",
  },
  image: {
    display: "none",
    overflow: "hidden",
    height: 844,
    shadowOpacity: 1,
    elevation: 150,
    shadowRadius: 150,
    shadowOffset: {
      width: -40,
      height: 60,
    },
    shadowColor: "rgba(59, 38, 123, 0.7)",
    backgroundColor: "transparent",
    top: 0,
  },
  appHomevariant2Item: {
    top: 344,
    height: 500,
  },
  continueComoVisitante: {
    textDecoration: "underline",
    fontWeight: "700",
    fontFamily: FontFamily.urbanistBold,
    color: Color.colorMediumturquoise,
    textAlign: "center",
    fontSize: FontSize.size_mini,
  },
  continueComoVisitanteContainer: {
    left: 116,
    top: 775,
    position: "absolute",
  },
  registerButtonChild: {
    backgroundColor: Color.white,
    borderStyle: "solid",
    borderColor: Color.dark,
    borderWidth: 1,
  },
  registrarSe: {
    left: 125,
    color: Color.dark,
    textAlign: "center",
    position: "absolute",
  },
  registerButton: {
    top: 673,
  },
  loginButtonChild: {
    backgroundColor: Color.dark,
  },
  login: {
    left: 148,
    fontFamily: FontFamily.urbanistSemiBold,
    fontWeight: "600",
    top: 19,
    fontSize: FontSize.size_mini,
    color: Color.white
  },
  loginButton: {
    top: 602,
  },
  naia: {
    top: 404,
    left: 100,
    width: 191,
    height: 40,
    position:"absolute"
  },
  logoapp1Icon: {
    top: 256,
    left: 96,
    width: 191,
    height: 148,
    position: "absolute",
  },

  Telainicial: {
    overflow: "hidden",
    height: 844,
    shadowOpacity: 1,
    elevation: 150,
    shadowRadius: 150,
    shadowOffset: {
      width: -40,
      height: 60,
    },
    shadowColor: "rgba(59, 38, 123, 0.7)",
    backgroundColor: "transparent",
    top: 0,
  },
});

export default TelaInicial;
