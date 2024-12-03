import React, { Fragment } from 'react'
import CustomFlatList from '../../../components/CustomFlatList';
import MenuBar from '../../../components/MenuBar';
import { useSelector } from 'react-redux';

const Favorite = () => {
  const { meals } = useSelector((state) => state.meals);
  const selectedMeals = MEALS.filter((star) => star.categoryIds.includes("c2"));
  return (
    <Fragment>
      <MenuBar/>
      <CustomFlatList selectedMeal={selectedMeals} />
    </Fragment>
  );
}

export default Favorite