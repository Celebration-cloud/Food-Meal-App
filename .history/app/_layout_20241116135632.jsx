import { Stack } from "expo-router";

export default function RootLayout() {
  return( <Stack>
    <Stack.Screen name="About" options={{title: "About"}}/>
    <Stack.Screen name="index" options={{title: "Home"}}/>

  </Stack>);
}
