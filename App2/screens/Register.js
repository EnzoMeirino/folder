import * as React from "react";
import { View, StyleSheet, Pressable, Text, TextInput } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import CardView from "../components/CardView";
import RegisterForm from "../components/RegisterForm";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const Register = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.appHomevariant2Parent}>
      <CardView
        showEllipseIcon
        showContinueComoVisitante={false}
        showRegisterButton={false}
        showLoginButton={false}
        showNAIA={false}
        showLogoApp1Icon={false}
        ellipseIconPosition="absolute"
        ellipseIconShadowOffset="unset"
        ellipseIconTop={0}
        ellipseIconLeft={0}
        imageTop={0}
        imageWidth={390}
        imageHeight={632}
        photo143689162058447fd0e5ShadowOffset="unset"
        onContinueComoVisitanteContPress={() =>
          navigation.navigate("FrameScreen4")
        }
        onRegisterButtonPress={() => navigation.navigate("Register")} //Registro
        onLoginButtonPress={() => navigation.navigate("Login")} //Login
      />
      <View style={[styles.statusBarParent, styles.statusBarParentLayout]}>
        <Pressable style={[styles.frame, styles.framePosition]}>
          <Pressable
            style={[styles.jTemContaContainer, styles.backIconPosition]}
            onPress={() => navigation.navigate("ContaCriada")}
          >
            <Text style={[styles.text, styles.textTypo]}>
              <Text style={styles.jTemConta}>{`Já tem conta? `}</Text>
              <Text style={[styles.login, styles.loginTypo]}>Login</Text>
            </Text>
          </Pressable>
        </Pressable>
        <RegisterForm />
        <Pressable
          style={styles.registerButton}
          onPress={() => navigation.navigate("TelaInicial")}
        >
          <Text style={[styles.register, styles.textTypo]}>Registre-se</Text>
        </Pressable>
        <TextInput
          style={[styles.confirmPasswordInput, styles.inputLayout]}
          placeholder="Confirmar senha"
          placeholderTextColor="#8391a1"
        />
        <TextInput
          style={[styles.passwordInput, styles.inputLayout]}
          placeholder="Senha"
          placeholderTextColor="#8391a1"
        />
        <TextInput
          style={[styles.emailInput, styles.inputLayout]}
          placeholder="Email"
          keyboardType="email-address"
          placeholderTextColor="#8391a1"
        />
        <TextInput
          style={[styles.usernameInput, styles.inputLayout]}
          placeholder="Usuário"
          placeholderTextColor="#8391a1"
        />
        <Text style={[styles.helloRegisterTo, styles.loginTypo]}>
          Olá! Registre-se para começar.
        </Text>
        <Image
          style={[styles.backIcon, styles.backIconPosition]}
          contentFit="cover"
          source={require("../assets/back.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  statusBarParentLayout: {
    width: 331,
    position: "absolute",
  },
  framePosition: {
    overflow: "hidden",
    position: "absolute",
  },
  backIconPosition: {
    top: 0,
    position: "absolute",
  },
  textTypo: {
    textAlign: "center",
    fontSize: FontSize.size_mini,
  },
  loginTypo: {
    fontFamily: FontFamily.urbanistBold,
    fontWeight: "700",
  },
  inputLayout: {
    height: 56,
    borderWidth: 1,
    borderColor: Color.colorAliceblue_100,
    borderStyle: "solid",
    backgroundColor: Color.colorWhitesmoke,
    borderRadius: Border.br_5xs,
    fontFamily: FontFamily.urbanistMedium,
    fontWeight: "500",
    fontSize: FontSize.size_mini,
    left: 0,
    paddingLeft:10,
    backgroundColor:Color.white,
    width: 331,
    position: "absolute",
  },
  statusBarIcon: {
    top: 56,
    right: -66,
    left: 22,
    maxWidth: "100%",
    height: 44,
    display: "none",
  },
  jTemConta: {
    color: Color.dark,
    fontFamily: FontFamily.urbanistMedium,
    fontWeight: "500",
  },
  login: {
    color: Color.colorMediumturquoise,
  },
  text: {
    letterSpacing: 0.2,
    lineHeight: 21,
  },
  jTemContaContainer: {
    left: 96,
  },
  frame: {
    top: 709,
    width: 234,
    height: 21,
    left: 0,
  },
  register: {
    top: 19,
    left: 125,
    fontWeight: "600",
    fontFamily: FontFamily.urbanistSemiBold,
    color: Color.white,
    position: "absolute",
    textAlign: "center",
    fontSize: FontSize.size_mini,
  },
  registerButton: {
    height: "7.67%",
    top: "64.25%",
    right: "0%",
    bottom: "28.08%",
    left: "0%",
    backgroundColor: Color.dark,
    borderRadius: Border.br_5xs,
    position: "absolute",
    width: "100%",
  },
  confirmPasswordInput: {
    top: 383,
  },
  passwordInput: {
    top: 315,
  },
  emailInput: {
    top: 247,
  },
  usernameInput: {
    top: 179,
  },
  helloRegisterTo: {
    top: 69,
    fontSize: FontSize.size_11xl,
    letterSpacing: -0.3,
    lineHeight: 39,
    textAlign: "left",
    color: Color.dark,
    left: 0,
    width: 331,
    position: "absolute",
  },
  backIcon: {
    borderRadius: Border.br_xs,
    width: 41,
    height: 41,
    left: 0,
  },
  statusBarParent: {
    top: 72,
    left: 29,
    height: 730,
  },
  appHomevariant2Parent: {
    flex: 1,
    height: 844,
    width: "100%",
  },
});

export default Register;
