import React, { memo } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { Image } from "expo-image";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const RegisterForm = memo(() => {
  return (
    <View style={[styles.registerWith, styles.registerLayout1]}>
      <View style={[styles.registerWith1, styles.registerPosition]}>
        <Text style={[styles.orRegisterWith, styles.registerPosition]}>
          Ou registre-se com
        </Text>
        
      </View>
      <View style={styles.frame}>
        <Image
          style={[styles.googleButtonIcon, styles.buttonIconLayout]}
          contentFit="cover"
          source={require("../assets/google-button.png")}
        />
        <Image
          style={[styles.facebookButtonIcon, styles.buttonIconLayout]}
          contentFit="cover"
          source={require("../assets/facebook-button.png")}
        />
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  registerLayout1: {
    width: 331,
    left: 0,
  },
  registerPosition: {
    top: 0,
    position: "absolute",
  },
  registerLayout: {
    height: 1,
    width: 100,
    borderTopWidth: 1,
    borderColor: Color.colorAliceblue_100,
    borderStyle: "solid",
    top: 9,
    position: "absolute",
  },
  buttonIconLayout: {
    width: 105,
    height: 56,
    top: 0,
    position: "absolute",
  },
  orRegisterWith: {
    left: 100,
    fontSize: FontSize.textSemiboldSm_size,
    fontWeight: "600",
    fontFamily: FontFamily.urbanistSemiBold,
    color: Color.darkGray,
    textAlign: "center",
  },

  registerWithItem: {
    left: 228,
  },
  registerWith1: {
    height: 17,
    width: 331,
    left: 0,
  },
  googleButtonIcon: {
    left: 170,
  },
  facebookButtonIcon: {
    left: 57,
    borderRadius: Border.br_5xs,
  },
  frame: {
    top: 39,
    overflow: "hidden",
    height: 56,
    width: 331,
    left: 0,
    position: "absolute",
  },
  registerWith: {
    top: 560,
    height: 95,
    position: "absolute",
    width: 331,
  },
});

export default RegisterForm;
