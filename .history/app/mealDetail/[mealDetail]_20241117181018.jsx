import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const MealDetailScreen = () => {
  const {id} = use
  return (
    <View style={styles.container}>
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