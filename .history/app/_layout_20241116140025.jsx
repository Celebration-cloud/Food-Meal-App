import { Stack } from "expo-router";
import Color
export default function RootLayout() {
  return (
    <Stack screenOptions={{headerStyle: {
      backgroundColor: ColorTheme
    }}}>
      <Stack.Screen name="about" options={{ title: "About" }} />
      <Stack.Screen name="index" options={{ title: "Home" }} />
    </Stack>
  );
}
