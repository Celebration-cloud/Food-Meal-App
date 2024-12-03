import React, { Fragment } from 'react'
import CustomFlatList from '../../../components/CustomFlatList';
import MenuBar from '../../../components/MenuBar';
import { useSelector } from 'react-redux';
import { Dimensions, StyleSheet, Text } from 'react-native';

const Favorite = () => {
  const { meals, favorites } = useSelector((state) => state.meals);
  const selectedMeals = meals.filter((star) => star.categoryIds.includes("c2"));
  let FavoriteComponent;
  if (favorites.length > 0) {
    FavoriteComponent = <CustomFlatList selectedMeal={favorites} />;
  }else{
    FavoriteComponent = <Text>No favorites</Text>;
  }
  return (
    <Fragment>
      <MenuBar/>
      {FavoriteComponent}
    </Fragment>
  );
}

const styles = StyleSheet.create({
  text: {
    justifyContent: "center",
    alignContent: "center",
    fontSize: Dimensions.get("window").fontSize * 4
  }
});
export default Favorite