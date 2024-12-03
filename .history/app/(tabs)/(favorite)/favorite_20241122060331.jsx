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
      <Stack.Screen
        options={{
          headerLeft: () => (
            <CustomIcon onPress={handleMenu}>
              <Ionicons
                name="menu-sharp"
                size={30}
                color={ColorTheme.background}
              />
            </CustomIcon>
          ),
        }}
      />
      <CustomFlatList selectedMeal={selectedMeals} />
    </Fragment>
  );
}

export default Favorite

const styles = StyleSheet.create({})