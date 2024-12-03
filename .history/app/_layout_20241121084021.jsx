import { Stack } from "expo-router";
import { enableScreens } from "react-native-screens";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from 'expo-router/drawer';
enableScreens();
export default function RootLayout() {
  return (
    <Stack>
      <GestureHandlerRootView style={{ flex: 1 }}>
        
      </GestureHandlerRootView>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
