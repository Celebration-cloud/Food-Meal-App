import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'
import MainButton from '../components/MainButton.android'

const MealDetailScreen = () => {
  const {mealDetail} = useLocalSearchParams()
  return (
    <View style={styles.container}>
      <Text>MealDetailScreen{mealDetail}</Text>
      <MainButton button={styles.btn} replace= href="/">
        Link to Meal Detail
      </MainButton>
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
  btn: {
    width: Dimensions.get("window").width / 2.3,
    padding: Dimensions.get("window").scale * 4.5,
  },
});