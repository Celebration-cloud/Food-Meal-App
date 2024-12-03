import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { ColorTheme } from '../../constants/ColorTheme';

const AppLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: ColorTheme.primary,
        },
        headerTitleAlign: "center",
        headerTitleStyle: {
          fontSize: 25,
          color: ColorTheme.background,
        },
      }}
    >
      <Stack.Screen name="filter" options={{ title: "Filter M" }} />
    </Stack>
  );
}

export default AppLayout