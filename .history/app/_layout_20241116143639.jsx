import { Stack } from "expo-router";
export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "red",
          alignItems: "center",
          justifyContent: "center",
          width: "100%"
        },
        contentStyle: {
          alignItems: "center",
          justifyContent: "center",
        },
      }}
    >
      <Stack.Screen name="about" options={{ title: "About" }} />
      <Stack.Screen name="index" options={{ title: "Home" }} />
    </Stack>
  );
}
