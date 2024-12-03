import { enableScreens } from "react-native-screens";
import { Drawer } from 'expo-router/drawer';
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { ColorTheme } from "@/constants/ColorTheme";
import { Dimensions } from "react-native";
import { Provider } from 'react-redux';
import store from "../store/configStore"
enableScreens();
export default function RootLayout() {
  return (
    <Provider store={store} g>

    </Provider>
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={{
          headerShown: false,
          drawerStyle: {
            backgroundColor: ColorTheme.secondary,
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0,
          },
          drawerLabelStyle: {
            fontSize: Dimensions.get("window").fontScale * 20,
          },
        }}
        initialRouteName="(tabs)"
      >
        <Drawer.Screen
          name="(tabs)" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: "Category",
          }}
        />
        <Drawer.Screen name="(filter)" options={{ drawerLabel: "Filter" }} />
      </Drawer>
    </GestureHandlerRootView>
  );
}