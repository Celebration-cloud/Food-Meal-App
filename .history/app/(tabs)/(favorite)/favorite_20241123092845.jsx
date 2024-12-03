import React, { Fragment } from 'react'
import CustomFlatList from '../../../components/CustomFlatList';
import MenuBar from '../../../components/MenuBar';
import { useSelector } from 'react-redux';

const Favorite = () => {
  const { meals, favorites } = useSelector((state) => state.meals);
  const selectedMeals = meals.filter((star) => star.categoryIds.includes("c2"));
  let FavoriteComponent;
  if (selectedMeals.length > 0) {
    FavoriteComponent = <CustomFlatList selectedMeal={selectedMeals} />;
  }else{
    FavoriteComponent = <T>No favorites</T>;
  }
  return (
    <Fragment>
      <MenuBar/>
      {""}
      <CustomFlatList selectedMeal={selectedMeals} />
    </Fragment>
  );
}

export default Favorite