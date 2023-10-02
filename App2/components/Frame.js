import React, { memo } from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/native"



const Frame = memo(({ onClose }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.ellipseParent}>
      <Image
        style={[styles.ellipseIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/ellipse.png")}
      />
      <Text style={[styles.username, styles.usernameTypo]}>Username</Text>
      <Pressable style={styles.ellipseParent} onPress={() => navigation.navigate("TelaInicial")}>
      <Text style={[styles.sairDaConta, styles.usernameTypo]}>
        Sair da conta
      </Text>
      <Image
        style={[styles.iconAccountLogout, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/-icon-account-logout.png")}
      />
      </Pressable>
      <View style={[styles.separator, styles.separatorBorder]} />
      <View style={[styles.frameChild, styles.separatorBorder]} />
    </View>
  );
});

const styles = StyleSheet.create({
  iconLayout: {
    position: "absolute",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  usernameTypo: {
    height: 24,
    width: 107,
    textAlign: "center",
    color: Color.colorGray_100,
    fontFamily: FontFamily.urbanistMedium,
    fontWeight: "500",
    lineHeight: 20,
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  separatorBorder: {
    borderStyle: "solid",
    position: "absolute",
  },
  ellipseIcon: {
    height: "25.39%",
    width: "15.64%",
    top: "14.51%",
    right: "76.54%",
    bottom: "60.1%",
    left: "7.82%",
  },
  username: {
    top: 20,
    left: 28,
  },
  sairDaConta: {
    top: 73,
    left: 36,
  },
  iconAccountLogout: {
    height: "16.01%",
    width: "11.27%",
    top: "67.11%",
    right: "79.23%",
    bottom: "16.88%",
    left: "9.5%",
  },
  separator: {
    marginLeft: -73.26,
    bottom: -70,
    left: "50%",
    backgroundColor: Color.colorBlack,
    shadowColor: "rgba(0, 0, 0, 0.2)",
    shadowOffset: {
      width: 0,
      height: 0.75527423620224,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
    borderColor: Color.colorBlack,
    borderTopWidth: 1.5,
    width: 296,
    height: 2,
  },
  frameChild: {
    top: 55,
    left: -54,
    borderColor: Color.colorGray_100,
    borderTopWidth: 0.5,
    width: 278,
    height: 1,
  },
  ellipseParent: {
    borderRadius: 12,
    backgroundColor: Color.white,
    width: 179,
    height: 110,
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
});

export default Frame;
