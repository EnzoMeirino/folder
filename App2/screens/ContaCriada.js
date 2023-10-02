import * as React from "react";
import { StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import CardView from "../components/CardView";
import ContaCriada1 from "../components/ContaCriada1";

const ContaCriada = () => {
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
          navigation.navigate("Frame2")
        }
        onRegisterButtonPress={() => navigation.navigate("Register")}
        onLoginButtonPress={() => navigation.navigate("Login")}
      />
      <ContaCriada1 />
    </View>
  );
};

const styles = StyleSheet.create({
  appHomevariant2Parent: {
    flex: 1,
    width: "100%",
    height: 844,
  },
});

export default ContaCriada;
