import React, { memo } from "react";
import { Pressable, StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const PasswordChangeFormContainer = memo(() => {
  const navigation = useNavigation();

  return (
    <View style={styles.backToLoginButtonParent}>
      <Pressable
        style={[styles.backToLoginButton, styles.backLayout]}
        onPress={() => navigation.navigate("Login")}
      >
        <View style={[styles.backToLoginButtonChild, styles.backLayout]} />
        <Text style={[styles.backToLogin, styles.passwordFlexBox]}>
          Voltar para Login
        </Text>
      </Pressable>
      <View style={styles.text}>
        <Text style={[styles.yourPasswordHas, styles.passwordFlexBox]}>
          Sua conta foi criada com sucesso.
        </Text>
        <Text style={[styles.passwordChanged, styles.passwordFlexBox]}>
          Conta Criada!
        </Text>
      </View>
      <View style={[styles.successmark, styles.successmarkPosition]}>
        <Image
          style={[styles.stickerIcon, styles.successmarkPosition]}
          contentFit="cover"
          source={require("../assets/sticker.png")}
        />
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  backLayout: {
    height: 56,
    left: 0,
    width: 331,
    position: "absolute",
  },
  passwordFlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  successmarkPosition: {
    overflow: "hidden",
    position: "absolute",
  },
  backToLoginButtonChild: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.dark,
    top: 0,
  },
  backToLogin: {
    top: 19,
    left: 121,
    fontWeight: "600",
    fontFamily: FontFamily.urbanistSemiBold,
    color: Color.white,
    fontSize: FontSize.size_mini,
    textAlign: "center",
  },
  backToLoginButton: {
    top: 260,
  },
  yourPasswordHas: {
    top: 39,
    left: 3,
    lineHeight: 23,
    fontWeight: "500",
    fontFamily: FontFamily.urbanistMedium,
    width: 226,
    color: Color.white,
    fontSize: FontSize.size_mini,
    textAlign: "center",
  },
  passwordChanged: {
    fontSize: FontSize.size_7xl,
    fontWeight: "700",
    fontFamily: FontFamily.urbanistBold,
    color: Color.dark,
    top: 0,
    textAlign: "center",
    left: 0,
  },
  text: {
    top: 135,
    left: 50,
    width: 232,
    height: 85,
    position: "absolute",
  },
  stickerIcon: {
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  successmark: {
    left: 116,
    width: 100,
    height: 100,
    top: 0,
  },
  backToLoginButtonParent: {
    top: 176,
    left: 27,
    height: 316,
    width: 331,
    position: "absolute",
  },
});

export default PasswordChangeFormContainer;
