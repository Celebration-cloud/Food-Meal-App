import { enableScreens } from "react-native-screens";
import { Drawer } from 'expo-router/drawer';
import { GestureHandlerRootView } from "react-native-gesture-handler";
enableScreens();
export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer screenOptions={{ headerShown: false, drawerStyle: {} }} initialRouteName="(tabs)">
        <Drawer.Screen
          name="(tabs)" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: "Category",
          }}
        />
        <Drawer.Screen
          name="(filter)"
          options={{ drawerLabel: "Filter" }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
