import { Button, Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link, useLocalSearchParams } from 'expo-router'
import MainButton from '../components/MainButton.android'

const MealDetailScreen = () => {
  const {mealDetail} = useLocalSearchParams()
  const router 
  return (
    <View style={styles.container}>
      <Text>MealDetailScreen{mealDetail}</Text>
      <MainButton button={styles.btn} dismiss="all">
        Link to Meal Detail
      </MainButton>
      <Button title="Go back to Category" onPress={() => }/>
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