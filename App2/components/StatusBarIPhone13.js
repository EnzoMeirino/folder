import React, { useMemo, memo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, ImageSourcePropType } from "react-native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const StatusBarIPhone13 = memo(
  ({
    imageDimensions,
    timeLabel,
    statusBarIPhone13Position,
    statusBarIPhone13Top,
    statusBarIPhone13Right,
    statusBarIPhone13Left,
    textFontWeight,
    textFontFamily,
  }) => {
    const statusBarIPhone13Style = useMemo(() => {
      return {
        ...getStyleValue("position", statusBarIPhone13Position),
        ...getStyleValue("top", statusBarIPhone13Top),
        ...getStyleValue("right", statusBarIPhone13Right),
        ...getStyleValue("left", statusBarIPhone13Left),
      };
    }, [
      statusBarIPhone13Position,
      statusBarIPhone13Top,
      statusBarIPhone13Right,
      statusBarIPhone13Left,
    ]);

    const textStyle = useMemo(() => {
      return {
        ...getStyleValue("fontWeight", textFontWeight),
        ...getStyleValue("fontFamily", textFontFamily),
      };
    }, [textFontWeight, textFontFamily]);

    return (
      <View style={[styles.statusbarIphone13, statusBarIPhone13Style]}>
        <Image
          style={[styles.notchIcon, styles.iconPosition]}
          contentFit="cover"
          source={imageDimensions}
        />
        <View style={[styles.leftSide, styles.leftSideLayout]}>
          <View style={[styles.statusbarTime, styles.leftSideLayout]}>
            <Text style={[styles.text, textStyle]}>{timeLabel}</Text>
          </View>
        </View>
        <Image
          style={[styles.rightSideIcon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/right-side.png")}
        />
      </View>
    );
  }
);

const styles = StyleSheet.create({
  iconPosition: {
    left: "50%",
    position: "absolute",
  },
  leftSideLayout: {
    height: 21,
    width: 54,
    left: "50%",
    position: "absolute",
  },
  notchIcon: {
    marginLeft: -82,
    top: -2,
    width: 164,
    height: 32,
    display: "none",
  },
  text: {
    top: 1,
    left: 0,
    fontSize: FontSize.size_mid,
    letterSpacing: 0,
    lineHeight: 22,
    fontWeight: "600",
    fontFamily: FontFamily.sFProText,
    color: Color.white,
    textAlign: "center",
    height: 20,
    width: 54,
    position: "absolute",
  },
  statusbarTime: {
    marginLeft: -27,
    top: 0,
    borderRadius: Border.br_5xl,
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
    overflow: "hidden",
  },
});

export default StatusBarIPhone13;
