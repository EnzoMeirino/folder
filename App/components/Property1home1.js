import React, { useState, useCallback, memo } from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable, Modal } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import WeatherCard from "./WeatherCard";
import { Border } from "../GlobalStyles";

const Property1home1 = memo(() => {
  const [ellipseIconVisible, setEllipseIconVisible] = useState(false);

  const openEllipseIcon = useCallback(() => {
    setEllipseIconVisible(true);
  }, []);

  const closeEllipseIcon = useCallback(() => {
    setEllipseIconVisible(false);
  }, []);

  return (
    <>
      <LinearGradient
        style={[styles.property1home, styles.imageShadowBox]}
        locations={[0, 0.81]}
        colors={["#6cff48", "#ff07ab"]}
      >
        <Image
          style={styles.property1homeChild}
          contentFit="cover"
          source={require("../assets/ellipse-5.png")}
        />
        <LinearGradient
          style={[styles.image, styles.imageShadowBox]}
          locations={[0, 1]}
          colors={["#2e335a", "#1c1b33"]}
        >
        </LinearGradient>
        <WeatherCard iconWaterTop={140} />

        <Pressable style={styles.ellipse} onPress={openEllipseIcon}>
          <Image
            style={[styles.icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/ellipse.png")}
          />
        </Pressable>
      </LinearGradient>

      <Modal animationType="fade" transparent visible={ellipseIconVisible}>
        <View style={styles.ellipseIconOverlay}>
          <Pressable style={styles.ellipseIconBg} onPress={closeEllipseIcon} />
          <Frame onClose={closeEllipseIcon} />
        </View>
      </Modal>
    </>
  );
});

const styles = StyleSheet.create({
  imageShadowBox: {
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
    width: 390,
    left: 0,
    top: 0,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  property1homeChild: {
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
  },
  iconAlternateMapMarker: {
    height: "1.58%",
    width: "2.56%",
    top: "33.29%",
    right: "58.46%",
    bottom: "65.13%",
    left: "38.97%",
    position: "absolute",
  },
  ellipseIconOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  ellipseIconBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  ellipse: {
    left: "7.69%",
    top: "9.12%",
    right: "85.13%",
    bottom: "87.56%",
    width: "7.18%",
    height: "3.32%",
    position: "absolute",
  },
  property1home: {
    borderRadius: Border.br_25xl,
  },
});

export default Property1home1;
