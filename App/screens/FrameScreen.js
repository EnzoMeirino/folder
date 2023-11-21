import * as React from "react";
import { View, StyleSheet } from "react-native";
import TelaInicial from "../components/TelaInicial";

const FrameScreen = () => {
  return (
    <View style={styles.appHomevariant2Parent}>
      <TelaInicial />
    </View>
  );
};

const styles = StyleSheet.create({
  appHomevariant2Parent: {
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default FrameScreen;
