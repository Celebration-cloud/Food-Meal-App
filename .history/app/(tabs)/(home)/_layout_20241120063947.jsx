import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const HomeLayout = () => {
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
        animation: "fade_from_bottom",
      }}
    >
      <Stack.Screen name="about" options={{ title: "About" }} />
      <Stack.Screen name="categoryMeal" options={{ title: "Category Meal" }} />
      <Stack.Screen name="index" options={{ title: "Categories" }} />
      <Stack.Screen name="mealDetail" options={{ title: "Meal Detail" }} />
    </Stack>
  );
}

export default HomeLayout

const styles = StyleSheet.create({})