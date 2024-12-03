import { Stack } from "expo-router";

export default function RootLayout() {
  return( <Stack>
    <Stack.Screen name="About" options={{title: "About"}}/>
    <Stack.Screen name="i" options={{title: "Home"}}/>

  </Stack>);
}
