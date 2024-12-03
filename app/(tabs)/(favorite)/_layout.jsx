import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { ColorTheme } from '../../../constants/ColorTheme';

const FavoriteLayout = () => {
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
      <Stack.Screen name="favorite" options={{ title: "Favorite Meals" }} />
    </Stack>
  );
}

export default FavoriteLayout

const styles = StyleSheet.create({})