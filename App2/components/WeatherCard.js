import React, { useMemo, memo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { FontFamily, FontSize, Color } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const WeatherCard = memo(({ iconWaterTop }) => {
  const weatherStyle = useMemo(() => {
    return {
      ...getStyleValue("top", iconWaterTop),
    };
  }, [iconWaterTop]);

  return (
    <View style={[styles.weather, weatherStyle]}>
      <Text style={styles.temperatura}>Temperatura</Text>
      <Text style={[styles.text, styles.textTypo]}>19°</Text>
      <Image
        style={styles.iconWater}
        contentFit="cover"
        source={require("../assets/-icon-water.png")}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  textTypo: {
    fontFamily: FontFamily.textRegularSm,
    left: "50%",
    textAlign: "center",
    position: "absolute",
  },
  temperatura: {
    top: 0,
    left: 89,
    fontSize: FontSize.size_11xl,
    lineHeight: 50,
    fontFamily: FontFamily.arial,
    width: 211,
    height: 77,
    textAlign: "center",
    color: Color.white,
    letterSpacing: 0,
    position: "absolute",
  },

  label: {
    marginLeft: -62,
    top: 135,
    fontSize: FontSize.size_xl,
    lineHeight: 24,
  },
  text: {
    marginLeft: -68,
    top: 57,
    fontSize: FontSize.size_77xl,
    lineHeight: 100,
    color: Color.white,
    letterSpacing: 0,
    left: "50%",
  },
  iconWater: {
    height: "29.8%",
    width: "21.79%",
    top: "-40.44%",
    right: "38.72%",
    bottom: "110.64%",
    left: "39.49%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
  },
  weather: {
    top: 141,
    left: 0,
    width: 390,
    height: 183,
    position: "absolute",
  },
});

export default WeatherCard;
