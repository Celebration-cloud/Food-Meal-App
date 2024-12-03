import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const RootLayout = () => {
  return (
    <Stack r>
        <Stack.Screen name="categoryMeals" options={{title: "Category Meals"}} />
    </Stack>
  )
}

export default RootLayout

const styles = StyleSheet.create({})