import { StyleSheet } from "react-native";
import { Stack, useLocalSearchParams } from "expo-router";
// import { MEALS } from "../../../data/MealData";
import { Fragment } from "react";
import CustomFlatList from "../../../components/CustomFlatList";

const CategoryMealScreen = () => {
  const { id, title } = useLocalSearchParams();
  const {meals} = useSelector(state => state.meals)
  const selectedMeal = meals.filter((meal) => meal.categoryIds.includes(id));
  return (
    <Fragment>
      <Stack.Screen options={{ title: title, animation: "fade" }} />
      <CustomFlatList selectedMeal={selectedMeal}/>
    </Fragment>
  );
};

export default CategoryMealScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  result: {
    width: "100%",
  },
});
