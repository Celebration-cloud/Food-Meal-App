import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const MealDetailScreen = () => {
  return (
    <View style={s}>
      <Text>MealDetailScreen</Text>
    </View>
  )
}

export default MealDetailScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});