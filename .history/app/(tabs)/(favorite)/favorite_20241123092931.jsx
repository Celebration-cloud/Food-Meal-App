import React, { Fragment } from 'react'
import CustomFlatList from '../../../components/CustomFlatList';
import MenuBar from '../../../components/MenuBar';
import { useSelector } from 'react-redux';
import { Text } from 'react-native';

const Favorite = () => {
  const { meals, favorites } = useSelector((state) => state.meals);
  const selectedMeals = meals.filter((star) => star.categoryIds.includes("c2"));
  let FavoriteComponent;
  if (selectedMeals.length > 0) {
    FavoriteComponent = <CustomFlatList selectedMeal={selectedMeals} />;
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

export default Favorite