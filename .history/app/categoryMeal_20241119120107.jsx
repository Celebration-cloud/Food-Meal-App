import { Dimensions, FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MainButton from '../components/MainButton';
import { Stack, useLocalSearchParams } from 'expo-router';
import { MEALS } from '../data/MealData';
import categoryMeals from '../components/CategoryMeals';

const CategoryMealScreen = () => {
  const {id, title} = useLocalSearchParams()
  const selectedMeal = MEALS.filter(
    (meal) => meal.categoryIds.includes(id)
  );
  console.log(selectedMeal)
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: title, animation: "fade" }} />
      <FlatList
        data={selectedMeal}
        renderItem={categoryMeals}
        style={styles.result}
      />
    </View>
  );
}

export default CategoryMealScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 1
  },
  result: {
    width: "100%",
  }
});