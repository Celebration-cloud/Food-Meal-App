import { Stack } from "expo-router";

export default function RootLayout() {
  return( <Stack>
    <Stack.Screen name="About" s options={{title: "About"}}/>
  </Stack>);
}
