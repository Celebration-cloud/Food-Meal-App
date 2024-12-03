import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const FilterScreen = () => {
  return (
    <View style={styles.container}>
      <Stack.Screen name='filterScreen' options={{title: "Filter"}}/>
      <Text>filterScreen</Text>
    </View>
  )
}

export default FilterScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})