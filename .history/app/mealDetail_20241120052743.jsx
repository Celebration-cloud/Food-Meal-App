import { Button, Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link, useLocalSearchParams, useRouter } from 'expo-router'
import MainButton from '../components/MainButton.android'

const MealDetailScreen = () => {
  const {data, title} = useLocalSearchParams()
  const router = useRouter()
  return (
    <View style={styles.container}>
      <
      <Text>MealDetailScreen{mealDetail}</Text>
      <MainButton button={styles.btn} onPress={() => router.dismissAll()}>
        Link to Meal Detail
      </MainButton>
      <Button title="Go back to Category" onPress={() => router.dismissAll()} />
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