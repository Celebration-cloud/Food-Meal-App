import { Stack } from "expo-router";
import { enableScreens } from "react-native-screens";
enableScreens();
export default function RootLayout() {
  return (
    <Stack>
      <GE
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
