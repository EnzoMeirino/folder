import * as React from "react";
import { View, Pressable, Text, StyleSheet, TextInput } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import CardView from "../components/CardView";
import { FontFamily, Color, Border, FontSize, Padding } from "../GlobalStyles";

const Login = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.appHomevariant2Parent}>
      <CardView
        showEllipseIcon={false}
        showContinueComoVisitante={false}
        showRegisterButton={false}
        showLoginButton={false}
        showNAIA={false}
        showLogoApp1Icon={false}
        ellipseIconPosition="absolute"
        ellipseIconShadowOffset="unset"
        ellipseIconTop={0}
        ellipseIconLeft={0}
        imageTop={80}
        imageWidth={352}
        imageHeight={352}
        photo143689162058447fd0e5ShadowOffset="unset"
        onContinueComoVisitanteContPress={() =>
          navigation.navigate("Frame2")
        }
        onRegisterButtonPress={() => navigation.navigate("Register")}
        onLoginButtonPress={() => navigation.navigate("Login")}
      />
      <View style={[styles.noTemContaRegistreSeParent, styles.loginLayout]}>
        <Pressable
          style={styles.noTemContaContainer}
          onPress={() => navigation.navigate("Register")}
        >
          <Text style={styles.text}>
            <Text style={styles.noTemConta}>{`Não tem conta? `}</Text>
            <Text
              style={[styles.registreSe, styles.registreSeTypo]}
            >{`Registre-se `}</Text>
          </Text>
        </Pressable>
        <View style={[styles.loginWith, styles.loginLayout]}>
          <Image
            style={styles.googleButtonIcon}
            contentFit="cover"
            source={require("../assets/google-button.png")}
          />
          <Image
            style={styles.facebookButtonIcon}
            contentFit="cover"
            source={require("../assets/facebook-button.png")}
          />
          <View style={[styles.loginWith1, styles.loginLayout]}>
            <Text style={[styles.ouLoginCom, styles.ouLoginComFlexBox]}>
              Ou logue-se com
            </Text>
            <View style={[styles.loginWithChild, styles.loginPosition]} />
            <View style={[styles.loginWithItem, styles.loginPosition]} />
          </View>
        </View>
        <TextInput
          style={[styles.enterYourPasswordInput, styles.enterLayout]}
          placeholder="Insira sua senha"
          keyboardType="default"
          placeholderTextColor="#8391a1"
        />
        <TextInput
          style={[styles.enterYourEmailInput, styles.enterLayout]}
          placeholder="Insira seu email"
          keyboardType="email-address"
          placeholderTextColor="#8391a1"
        />
        <Text style={[styles.welcomeBackGlad, styles.ouLoginComFlexBox]}>
          Bem vindo de volta! Estamos felizes de te ver.
        </Text>
        <Image
          style={styles.backIcon}
          contentFit="cover"
          source={require("../assets/back.png")}
        />
        <Pressable
          style={styles.esqueceuASenhaContainer}
          onPress={() => navigation.navigate("Frame2")}
        >
          <Text style={styles.text}>
            <Text style={styles.noTemConta}>{`Esqueceu a senha? `}</Text>
            <Text style={[styles.registreSe, styles.registreSeTypo]}>
              Crie uma nova
            </Text>
          </Text>
        </Pressable>
      </View>
      <Image
        style={styles.statusBarIcon}
        contentFit="cover"
        source={require("../assets/status-bar.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  loginLayout: {
    width: 331,
    position: "absolute",
  },
  registreSeTypo: {
    fontFamily: FontFamily.urbanistBold,
    fontWeight: "700",
  },
  ouLoginComFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  loginPosition: {
    height: 1,
    borderTopWidth: 1,
    borderColor: Color.colorAliceblue_100,
    borderStyle: "solid",
    top: 9,
    position: "absolute",
  },
  enterLayout: {
    borderWidth: 1,
    backgroundColor: Color.colorWhitesmoke,
    borderColor: Color.colorAliceblue_100,
    borderStyle: "solid",
    borderRadius: Border.br_5xs,
    height: 56,
    left: 0,
    fontFamily: FontFamily.urbanistMedium,
    fontWeight: "500",
    fontSize: FontSize.size_mini,
    width: 331,
    position: "absolute",
  },
  noTemConta: {
    color: Color.dark,
    fontFamily: FontFamily.urbanistMedium,
    fontWeight: "500",
  },
  registreSe: {
    color: Color.colorMediumturquoise,
  },
  text: {
    letterSpacing: 0.2,
    lineHeight: 21,
    textAlign: "center",
    fontSize: FontSize.size_mini,
  },
  noTemContaContainer: {
    left: 71,
    top: 709,
    position: "absolute",
  },
  googleButtonIcon: {
    left: 171,
    height: 56,
    width: 105,
    top: 39,
    position: "absolute",
  },
  facebookButtonIcon: {
    left: 58,
    borderRadius: Border.br_5xs,
    height: 56,
    width: 105,
    top: 39,
    position: "absolute",
  },
  ouLoginCom: {
    left: 124,
    fontSize: FontSize.textSemiboldSm_size,
    fontWeight: "600",
    fontFamily: FontFamily.urbanistSemiBold,
    color: Color.darkGray,
    top: 0,
  },
  loginWithChild: {
    width: 113,
    left: 0,
  },
  loginWithItem: {
    left: 220,
    width: 112,
  },
  loginWith1: {
    height: 17,
    top: 0,
    left: 0,
  },
  loginWith: {
    top: 459,
    height: 95,
    left: 0,
  },
  enterYourPasswordInput: {
    top: 250,
    flexDirection: "row",
    paddingLeft: Padding.p_lg,
    paddingRight: Padding.p_base,
    alignItems: "center",
  },
  enterYourEmailInput: {
    top: 179,
    padding: Padding.p_lg,
  },
  welcomeBackGlad: {
    top: 71,
    left: 3,
    fontSize: FontSize.size_11xl,
    letterSpacing: -0.3,
    lineHeight: 39,
    width: 312,
    fontFamily: FontFamily.urbanistBold,
    fontWeight: "700",
    color: Color.dark,
  },
  backIcon: {
    borderRadius: Border.br_xs,
    width: 41,
    height: 41,
    top: 0,
    left: 0,
    position: "absolute",
  },
  esqueceuASenhaContainer: {
    left: 50,
    top: 569,
    position: "absolute",
  },
  noTemContaRegistreSeParent: {
    top: 72,
    left: 29,
    height: 730,
  },
  statusBarIcon: {
    right: 8,
    left: 7,
    maxWidth: "100%",
    overflow: "hidden",
    height: 44,
    display: "none",
    top: 0,
    position: "absolute",
  },
  appHomevariant2Parent: {
    flex: 1,
    width: "100%",
    height: 844,
  },
});

export default Login;
