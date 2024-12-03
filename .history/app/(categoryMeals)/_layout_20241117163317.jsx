import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const RootLayout = () => {
  return (
    <Stack>
        <Stack.Screen name="categoryMeals" component={HomeScreen} />
    </Stack>
  )
}

export default RootLayout

const styles = StyleSheet.create({})