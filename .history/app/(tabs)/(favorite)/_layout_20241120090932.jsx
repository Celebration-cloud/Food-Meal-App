import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { ColorTheme } from '../../../constants/ColorTheme';

const FavoriteLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: ColorTheme.text,
        },
        headerTitleAlign: "center",
        headerTitleStyle: {
          fontSize: 25,
          color: ColorTheme.background,
        },
        animation: "fade_from_bottom",
      }}
    >
      <Stack.Screen name="favorite" options={{ title: "Favorite" }} />
    </Stack>
  );
}

export default FavoriteLayout

const styles = StyleSheet.create({})