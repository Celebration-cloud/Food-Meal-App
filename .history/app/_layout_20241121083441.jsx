import { Stack } from "expo-router";
import { enableScreens } from "react-native-screens";
import { GestureHandlerRootView } from "react-native-gesture-handler";
enableScreens();
export default function RootLayout() {
  return (
    <Stack>
      <GestureHandlerRootView>
        <Dre
      </GestureHandlerRootView>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
