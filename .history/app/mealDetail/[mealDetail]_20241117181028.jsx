import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

const MealDetailScreen = () => {
  const {id} = useLocalSearchParams()
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