import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link, useLocalSearchParams } from 'expo-router'
import MainButton from '../components/MainButton.android'

const MealDetailScreen = () => {
  const {mealDetail} = useLocalSearchParams()
  return (
    <View style={styles.container}>
      <Text>MealDetailScreen{mealDetail}</Text>
      <Link rep href="/"></Link>
    </View>
  );
}

export default MealDetailScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});