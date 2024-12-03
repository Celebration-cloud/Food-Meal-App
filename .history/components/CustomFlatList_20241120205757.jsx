import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MEALS } from '../data/MealData';
import { useLocalSearchParams } from 'expo-router';

const CustomFlatList = (props) => {
    const { id, title } = useLocalSearchParams();
    const selectedMeal = MEALS.filter((meal) => meal.categoryIds.includes(id));
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: title, animation: "fade" }} />
      <FlatList
        data={prselectedMeal}
        renderItem={categoryMeals}
        style={styles.result}
      />
    </View>
  );
}

export default CustomFlatList

const styles = StyleSheet.create({})