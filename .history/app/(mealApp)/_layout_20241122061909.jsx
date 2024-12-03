import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const AppLayout = () => {
  return (
    <Stack screenOptions={{
        headerStyle: {
          backgroundColor: ColorTheme.primary,
        },
        headerTitleAlign: "center",
        headerTitleStyle: {
          fontSize: 25,
          color: ColorTheme.background,
        },
      }}>
      <Stack.Screen name="(tabs)" />
      <Stack.Screen name="filter" options={{ title: "Filter" }} />
    </Stack>
  );
}

export default AppLayout

const styles = StyleSheet.create({})