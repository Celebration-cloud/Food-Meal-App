import { Stack } from "expo-router";
import { enableScreens } from "react-native-screens";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from 'expo-router/drawer';
enableScreens();
export default function RootLayout() {
  return (
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Drawer screenOptions={{title: "Category", headerShown: true}}>
        <Drawer.Screen
          name="index" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'Category',
            title: 'overview',
          }}
        />
        {/* <Drawer.Screen
          name="" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'User',
            title: 'overview',
          }}
        /> */}
      </Drawer>
      </GestureHandlerRootView>
  );
}
