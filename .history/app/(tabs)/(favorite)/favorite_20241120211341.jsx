import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {MEALS} from "../../../data/MealData"
import { ColorTheme } from '../../../constants/ColorTheme';

const Favorite = () => {
  const selectedMeals = MEALS.filter(star=> star.categoryIds.includes())
  return (
    <View>
      <Cu
    </View>
  );
}

export default Favorite

const styles = StyleSheet.create({})