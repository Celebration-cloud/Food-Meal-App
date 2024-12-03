import { Dimensions, FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MainButton from '../components/MainButton';
import { Stack, useLocalSearchParams } from 'expo-router';
import { MEALS } from '../data/MealData';
import categoryMeals from '../components/CategoryMeals';

const CategoryMealScreen = () => {
  const {id} = useLocalSearchParams()
  
  return (
    <View style={styles.container}>
      <Stack.Screen options={{title: id, animation: "fade"}}/>
      <FlatList data={MEALS} renderItem={categoryMeals}/>
    </View>
  );
}

export default CategoryMealScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});