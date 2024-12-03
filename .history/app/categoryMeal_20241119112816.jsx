import { Dimensions, FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MainButton from '../components/MainButton';
import { Stack, useLocalSearchParams } from 'expo-router';
import { MEALS } from '../data/MealData';
import categoryMeals from '../components/CategoryMeals';

const CategoryMealScreen = () => {
  const {id} = useLocalSearchParams()
  const selectedMeal = MEALS.find(meal => meal.id)
  console.log(selectedMeal)
  return (
    <View style={styles.container}>
      <Stack.Screen options={{title: id, animation: "fade"}}/>
      <FlatList data={selectedMeal} renderItem={categoryMeals}/>
    </View>
  );
}

export default CategoryMealScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});