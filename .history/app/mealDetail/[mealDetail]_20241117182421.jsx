import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

const MealDetailScreen = () => {
  const {mealDetail} = useLocalSearchParams()
  return (
    <View style={styles.container}>
      <Sta
      <Text>MealDetailScreen{mealDetail}</Text>
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