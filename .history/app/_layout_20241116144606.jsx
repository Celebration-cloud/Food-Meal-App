import { Stack } from "expo-router";
import { StatusBar } from "react-native";
export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "red",
        },
        contentStyle: {
          alignItems: "center",
          justifyContent: "center",
        },
        
      }}
    >
      <Stack.Screen name="about" options={{ title: "About", a }} />
      <Stack.Screen name="index" options={{ title: "Home" }} />
    </Stack>
  );
}
