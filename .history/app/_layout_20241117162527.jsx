import { Stack } from "expo-router";
import { StatusBar } from "react-native";
import ColorTheme from "../constants/ColorTheme"
export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "red",
        },
        headerTitleAlign: "center",
        headerTintColor: "yellow",
        headerTitleStyle: {
          fontSize: 25,
          color: Colo,
        }
      }}
    >
      <Stack.Screen name="about" options={{ title: "About" }} />
      <Stack.Screen name="index" options={{ title: "Home" }} />
    </Stack>
  );
}
