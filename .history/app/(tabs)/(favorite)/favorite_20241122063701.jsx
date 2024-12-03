import { StyleSheet } from 'react-native'
import React, { Fragment } from 'react'
import {MEALS} from "../../../data/MealData"
import CustomFlatList from '../../../components/CustomFlatList';
import MenuBar from '../../../components/MenuBar';

const Favorite = () => {
  const selectedMeals = MEALS.filter((star) => star.categoryIds.includes("c2"));
  return (
    <Fragment>
      <MenuBar/>
      <CustomFlatList selectedMeal={selectedMeals} />
    </Fragment>
  );
}

export default Favorite

const styles = StyleSheet.create({})