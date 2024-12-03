import { StyleSheet, Text, View } from 'react-native'
import React, { Fragment } from 'react'
import {MEALS} from "../../../data/MealData"
import { ColorTheme } from '../../../constants/ColorTheme';
import CustomFlatList from '../../../components/CustomFlatList';

const Favorite = () => {
  const selectedMeals = MEALS.filter(star=> star.categoryIds.includes("c2"))
  return  <Fragment>
    </Fragment><CustomFlatList selectedMeal={selectedMeals}/>
}

export default Favorite

const styles = StyleSheet.create({})