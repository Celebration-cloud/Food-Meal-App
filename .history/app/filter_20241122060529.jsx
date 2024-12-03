import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const Filter = () => {
  return (
    <View style={styles.container}>
      <Stack.Screen name='filter' options={{title: "Filter"}}/>
      <Text>filterScreen</Text>
    </View>
  )
}

export default Filter

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})