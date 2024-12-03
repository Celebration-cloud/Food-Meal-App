import { Stack } from "expo-router";
import { enableScreens } from "react-native-screens";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from 'expo-router/drawer';
enableScreens();
export default function RootLayout() {
  return (
      <GestureHandlerRootView style={{ flex: 1, width: "" }}>
        <Drawer screenOptions={{title: "Category", headerShown: false}}>
        <Drawer.Screen
          name="(tabs)" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'Category',
            title: 'Category',
          }}
        />
        <Drawer.Screen name="filterScreen" options={{title: "Filter", drawerLabel: "Filter"}}/>
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