import { ColorTheme } from "@/constants/ColorTheme";
import { Stack } from "expo-router";
import { enableScreens } from "react-native-screens";
enableScreens();
export default function RootLayout() {
  return (
    <Stack>
      <
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
