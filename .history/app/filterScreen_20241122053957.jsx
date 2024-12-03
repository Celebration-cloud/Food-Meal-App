import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const filterScreen = () => {
  return (
    <View style={styles.container}>
      <Stack.Screen name='filterScreen' options={{titl}}/>
      <Text>filterScreen</Text>
    </View>
  )
}

export default filterScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})