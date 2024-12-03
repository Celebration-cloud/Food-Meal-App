import { ColorTheme } from "@/constants/ColorTheme";
import { Stack } from "expo-router";
import { StatusBar } from "react-native";
export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: ColorTheme.primary,
        },
        headerTitleAlign: "center",
        headerTitleStyle: {
          fontSize: 25,
          color: ColorTheme.b,
        },
        animation: "fade_from_bottom",
      }}
    >
      <Stack.Screen name="about" options={{ title: "About" }} />
      <Stack.Screen name="categoryMeal" options={{title: "Category Meal"}} />
      <Stack.Screen name="index" options={{ title: "Categories" }} />
      <Stack.Screen name="mealDetail" options ={{ title: "Meal Detail" }} />
    </Stack>
  );
}
