import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{headerStyle: {
      backgroundColor: C
    }}}>
      <Stack.Screen name="about" options={{ title: "About" }} />
      <Stack.Screen name="index" options={{ title: "Home" }} />
    </Stack>
  );
}
