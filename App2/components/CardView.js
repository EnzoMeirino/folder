import React, { useMemo, memo } from "react";
import {
  View,
  StyleSheet,
  Pressable,
  Text,
  ImageBackground,
} from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { Border, FontFamily, FontSize, Color } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const CardView = memo(
  ({
    showEllipseIcon,
    showContinueComoVisitante,
    showRegisterButton,
    showLoginButton,
    showNAIA,
    showLogoApp1Icon,
    ellipseIconPosition,
    ellipseIconShadowOffset,
    ellipseIconTop,
    ellipseIconLeft,
    imageTop,
    imageWidth,
    imageHeight,
    photo143689162058447fd0e5ShadowOffset,
    onContinueComoVisitanteContPress,
    onRegisterButtonPress,
    onLoginButtonPress,
  }) => {
    const appHomeVariant2Style = useMemo(() => {
      return {
        ...getStyleValue("position", ellipseIconPosition),
        ...getStyleValue("shadowOffset", ellipseIconShadowOffset),
        ...getStyleValue("top", ellipseIconTop),
        ...getStyleValue("left", ellipseIconLeft),
      };
    }, [
      ellipseIconPosition,
      ellipseIconShadowOffset,
      ellipseIconTop,
      ellipseIconLeft,
    ]);

    const ellipseIconStyle = useMemo(() => {
      return {
        ...getStyleValue("top", imageTop),
        ...getStyleValue("width", imageWidth),
        ...getStyleValue("height", imageHeight),
      };
    }, [imageTop, imageWidth, imageHeight]);

    const imageStyle = useMemo(() => {
      return {
        ...getStyleValue("shadowOffset", photo143689162058447fd0e5ShadowOffset),
      };
    }, [photo143689162058447fd0e5ShadowOffset]);

    return (
      <LinearGradient
        style={[
          styles.appHomevariant2,
          styles.imageShadowBox,
          appHomeVariant2Style,
        ]}
        locations={[0, 0.81]}
        colors={["#6cff48", "#ff07ab"]}
      >
        {showEllipseIcon && (
          <Image
            style={[
              styles.appHomevariant2Child,
              styles.appPosition,
              ellipseIconStyle,
            ]}
            contentFit="cover"
            source={require("../assets/ellipse-5.png")}
          />
        )}
        <LinearGradient
          style={[styles.image, styles.appPosition, imageStyle]}
          locations={[0, 1]}
          colors={["#2e335a", "#1c1b33"]}
        >
        </LinearGradient>
        <LinearGradient
          style={[styles.appHomevariant2Item, styles.appPosition]}
          locations={[0.12, 0.6]}
          colors={["rgba(68, 84, 58, 0)", "#4a543a"]}
        />
        <Pressable
          style={styles.continueComoVisitanteContainer}
          onPress={onContinueComoVisitanteContPress}
        >
          {showContinueComoVisitante && (
            <Text style={styles.continueComoVisitante}>
              Continue como visitante
            </Text>
          )}
        </Pressable>
        {showRegisterButton && (
          <Pressable
            style={[styles.registerButton, styles.buttonFlexBox]}
            onPress={onRegisterButtonPress}
          >
            <View
              style={[styles.registerButtonChild, styles.buttonChildLayout]}
            />
            <Text style={[styles.registrarSe, styles.loginTypo]}>
              Registrar-se
            </Text>
          </Pressable>
        )}
        {showLoginButton && (
          <Pressable
            style={[styles.loginButton, styles.buttonFlexBox]}
            onPress={onLoginButtonPress}
          >
            <View style={[styles.loginButtonChild, styles.buttonChildLayout]} />
            <Text style={[styles.login, styles.naiaClr]}>Login</Text>
          </Pressable>
        )}
        {showNAIA && <Image style={[styles.naia, styles.naiaClr]} contentFit="cover" source={require("../assets/NAIA.png")}/>}
        {showLogoApp1Icon && (
          <ImageBackground
            style={styles.logoapp1Icon}
            resizeMode="cover"
            source={require("../assets/logoapp1.png")}
          />
        )}
      </LinearGradient>
    );
  }
);

const styles = StyleSheet.create({
  imageShadowBox: {
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
  },
  appPosition: {
    left: 0,
    position: "absolute",
    width: 390,
  },
  buttonFlexBox: {
    justifyContent: "flex-end",
    alignItems: "center",
    width: 331,
    left: 32,
    position: "absolute",
  },
  buttonChildLayout: {
    height: 56,
    borderRadius: Border.br_5xs,
    width: 331,
  },
  loginTypo: {
    marginTop: -37,
    fontFamily: FontFamily.urbanistSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_mini,
  },
  naiaClr: {
    color: Color.white,
    textAlign: "center",
  },
  appHomevariant2Child: {
    height: 632,
    top: 0,
    left: 0,
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
    top: 0,
    left: 0,
    backgroundColor: "transparent",
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
  },
  appHomevariant2Item: {
    top: 344,
    height: 500,
    backgroundColor: "transparent",
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
    color: Color.dark,
    textAlign: "center",
  },
  registerButton: {
    top: 673,
  },
  loginButtonChild: {
    backgroundColor: Color.dark,
  },
  login: {
    marginTop: -37,
    fontFamily: FontFamily.urbanistSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_mini,
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
  appHomevariant2: {
    backgroundColor: "transparent",
    width: 390,
    height: 844,
    shadowOpacity: 1,
    elevation: 150,
    shadowRadius: 150,
    shadowOffset: {
      width: -40,
      height: 60,
    },
    shadowColor: "rgba(59, 38, 123, 0.7)",
  },
});

export default CardView;
