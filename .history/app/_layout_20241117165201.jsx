import { ColorTheme } from "@/constants/ColorTheme";
import { Stack } from "expo-router";
import { StatusBar } from "react-native";
export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: ColorTheme.background,
        },
        headerTitleAlign: "center",
        headerTintColor: ColorTheme.secondary,
        headerTitleStyle: {
          fontSize: 25,
          color: ColorTheme.text,
        }
      }}
    >
      <Stack.Screen name="about" options={{ title: "About" }} />
      <Stack.Screen name="index" options={{ title: "Categories" }} />
      <Stack.Screen name="categoryMeals" options={{title: "Category M"}} />
    </Stack>
  );
}
