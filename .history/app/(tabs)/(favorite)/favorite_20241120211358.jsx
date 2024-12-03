import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {MEALS} from "../../../data/MealData"
import { ColorTheme } from '../../../constants/ColorTheme';
import CustomFlatList from '../../../components/CustomFlatList';

const Favorite = () => {
  const selectedMeals = MEALS.filter(star=> star.categoryIds.includes())
  return (
    <View>
      <CustomFlatList selectedMeals={selectedMeals}/>
    </View>
  );
}

export default Favorite

const styles = StyleSheet.create({})