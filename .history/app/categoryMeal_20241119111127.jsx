import { Dimensions, FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MainButton from '../components/MainButton.android';
import { Stack, useLocalSearchParams } from 'expo-router';
import { MEALS } from '../data/MealData';

const CategoryMealScreen = () => {
  const {id} = useLocalSearchParams()
  return (
    <View style={styles.container}>
      <Stack.Screen options={{title: id, animation: "fade"}}/>
      <FlatList data={MEALS}/>
    </View>
  );
}

export default CategoryMealScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});