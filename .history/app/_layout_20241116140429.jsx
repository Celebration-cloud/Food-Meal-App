import { Stack } from "expo-router";
import ColorTheme from "../constants/ColorTheme"
export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "red",
        },
        contentStyle: {
          alignItems: "center"
        }
      }}
    >
      {/* <Stack.Screen name="about" options={{ title: "About" }} /> */}
      <Stack.Screen name="index" options={{ title: "Home" }} />
    </Stack>
  );
}
