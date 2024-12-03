import { StyleSheet, Text, View } from 'react-native'
import React, { Fragment } from 'react'
import {MEALS} from "../../../data/MealData"
import { ColorTheme } from '../../../constants/ColorTheme';
import CustomFlatList from '../../../components/CustomFlatList';
import { Stack, useNavigation } from 'expo-router';
import CustomIcon from '../../../components/CustomIcon';
import { Ionicons } from '@expo/vector-icons';

const Favorite = () => {
  const selectedMeals = MEALS.filter((star) => star.categoryIds.includes("c2"));
  const navigation = useNavigation();
  const handleMenu = () => {
    navigation.openDrawer();
  };
  return (
    <Fragment>
      <M
      <CustomFlatList selectedMeal={selectedMeals} />
    </Fragment>
  );
}

export default Favorite

const styles = StyleSheet.create({})