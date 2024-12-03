import { Stack } from "expo-router";

export default function RootLayout() {
  return( <Stack>
    <Stack.Screen name="About" options={{title: "About"}}/>
    <Stack.Screen name="Home" options={{title: "Home"}}/>

  </Stack>);
}