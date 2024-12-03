import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const AppLayout = () => {
  return (
    <Stack>
        <Stack.Screen name='()' />
        <Stack.Screen name='(tabs)' />
    </Stack>
  )
}

export default AppLayout

const styles = StyleSheet.create({})