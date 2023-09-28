const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import FrameScreen from "./screens/FrameScreen";
import StatusBarIPhone13 from "./components/StatusBarIPhone13";
import Frame2 from "./screens/Frame2";
import Frame1 from "./screens/Frame1";
import DatePicker from "./components/DatePicker";
import Frame from "./components/Frame";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";
import Register from "./screens/Register";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(false);
  const [fontsLoaded, error] = useFonts({
    "Inter-ExtraLight": require("./assets/fonts/Inter-ExtraLight.ttf"),
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
    "Inter-Medium": require("./assets/fonts/Inter-Medium.ttf"),
    "Inter-Bold": require("./assets/fonts/Inter-Bold.ttf"),
    "Urbanist-Medium": require("./assets/fonts/Urbanist-Medium.ttf"),
    "Urbanist-SemiBold": require("./assets/fonts/Urbanist-SemiBold.ttf"),
    "Urbanist-Bold": require("./assets/fonts/Urbanist-Bold.ttf"),
   // "Eras-Bold-": require("./assets/fonts/Eras-Bold-Itc")
  });

  React.useEffect(() => {
    setTimeout(() => {
      setHideSplashScreen(true);
    }, 1000);
  }, []);

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="FrameScreen"
              component={FrameScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame2"
              component={Frame2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame1"
              component={Frame1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DatePicker"
              component={DatePicker}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame"
              component={Frame}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Register"
              component={Register}
              options={{headerShown: false}}
            />
          </Stack.Navigator>
        ) : (
          <FrameScreen />
        )}
      </NavigationContainer>
    </>
  );
};
export default App;
