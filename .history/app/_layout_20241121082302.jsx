import { Stack } from "expo-router";
import { enableScreens } from "react-native-screens";
import { GestureHandlerRootView } from "react-native-gesture-handle";
enableScreens();
export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
